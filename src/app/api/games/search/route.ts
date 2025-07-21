import { NextRequest, NextResponse } from "next/server";
import { IGDBGame } from "@/app/types";

// TODO -  Move to .env
const clientId = "qg0heh2xjyvud06ubvl5sxc8bkbzo1";
const clientSecret = "ms9gjn8v9tpklffkbfkh8kbjvt2op1";

// Cache for access token
let accessToken: string | null = null;
let tokenExpiry: number = 0;

const getAccessToken = async (): Promise<string> => {
  // Check if we have a valid token
  if (accessToken && Date.now() < tokenExpiry) {
    return accessToken;
  }

  if (!clientId || !clientSecret) {
    throw new Error("IGDB credentials not configured");
  }

  try {
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
  } catch (error) {
    console.error("Error getting access token:", error);
    throw new Error("Failed to authenticate with IGDB");
  }
};

// No mapping needed since API returns IGDBGame structure directly

export const GET = async (request: NextRequest) => {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");

    if (!query || query.trim().length < 2) {
      return NextResponse.json({ games: [] });
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
      body: `search "${query}"; fields id,name,cover.image_id, first_release_date;`,
    });

    if (!response.ok) {
      throw new Error(`IGDB API error: ${response.status}`);
    }

    const games: IGDBGame[] = await response.json();

    return NextResponse.json({ games });
  } catch (error) {
    console.error("Search API error:", error);
    return NextResponse.json(
      { error: "Failed to search games" },
      { status: 500 }
    );
  }
};
