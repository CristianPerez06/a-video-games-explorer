// This route handles requests for detailed game information by authenticating with the IGDB API
// and fetching specific game data based on the provided game ID.

import { NextRequest, NextResponse } from "next/server";
import { IGDBGame } from "@/types";

const clientId = process.env.IGDB_CLIENT_ID;
const clientSecret = process.env.IGDB_CLIENT_SECRET;

// Cache for access token
let accessToken: string | null = null;
let tokenExpiry = 0;

const getAccessToken = async (): Promise<string> => {
  // Re-use cached token if still valid
  if (accessToken && Date.now() < tokenExpiry) {
    return accessToken;
  }

  if (!clientId || !clientSecret) {
    throw new Error("IGDB credentials not configured");
  }

  const response = await fetch("https://id.twitch.tv/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "client_credentials",
    }),
  });

  if (!response.ok) {
    throw new Error(`Authentication failed: ${response.status}`);
  }

  const data = await response.json();
  accessToken = data.access_token;
  // Set expiry time (subtract 5 minutes for safety)
  tokenExpiry = Date.now() + (data.expires_in - 300) * 1000;

  return data.access_token;
};

// GET /api/games/details/[id]
export const GET = async (
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) => {
  try {
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json({ game: null });
    }

    if (!clientId) {
      return NextResponse.json(
        { error: "IGDB Client ID not configured" },
        { status: 500 }
      );
    }

    const token = await getAccessToken();

    const response = await fetch("https://api.igdb.com/v4/games", {
      method: "POST",
      headers: {
        "Client-ID": clientId,
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: `
        fields 
          id,
          name,
          first_release_date,
          involved_companies.company.name,
          cover.image_id,
          rating,genres.name,summary,
          platforms.name,
          screenshots.image_id,
          similar_games.id,
          similar_games.name,
          similar_games.slug,
          similar_games.cover.image_id,
          slug;
        where slug = "${slug}";
      `,
    });

    if (!response.ok) {
      throw new Error(`IGDB API error: ${response.status}`);
    }

    const games: IGDBGame[] = await response.json();
    const game: IGDBGame = games[0];

    return NextResponse.json({ game });
  } catch (error) {
    console.error("Details API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch game details" },
      { status: 500 }
    );
  }
};
