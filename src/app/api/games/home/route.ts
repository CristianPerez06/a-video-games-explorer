import { NextResponse } from "next/server";
import { SavedGame } from "@/types";

// Mock games data for the library
const mockGames: SavedGame[] = [
  {
    id: "1",
    imageSrc:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p2d.jpg",
    releaseDate: new Date("2020-12-10"),
    addedAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    imageSrc:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg",
    releaseDate: new Date("2018-10-26"),
    addedAt: new Date("2024-01-10"),
  },
  {
    id: "3",
    imageSrc:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co2lbd.jpg",
    releaseDate: new Date("2020-03-20"),
    addedAt: new Date("2024-01-08"),
  },
  {
    id: "4",
    imageSrc:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co1r7f.jpg",
    releaseDate: new Date("2016-05-10"),
    addedAt: new Date("2024-01-05"),
  },
  {
    id: "5",
    imageSrc:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p54.jpg",
    releaseDate: new Date("2023-05-12"),
    addedAt: new Date("2024-01-03"),
  },
  {
    id: "6",
    imageSrc:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co2lc1.jpg",
    releaseDate: new Date("2021-11-05"),
    addedAt: new Date("2024-01-01"),
  },
  {
    id: "7",
    imageSrc:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co1r81.jpg",
    releaseDate: new Date("2017-03-03"),
    addedAt: new Date("2023-12-28"),
  },
  {
    id: "8",
    imageSrc:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p2g.jpg",
    releaseDate: new Date("2022-02-25"),
    addedAt: new Date("2023-12-25"),
  },
  {
    id: "9",
    imageSrc:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co1ycs.jpg",
    releaseDate: new Date("2019-04-23"),
    addedAt: new Date("2023-12-20"),
  },
  {
    id: "10",
    imageSrc:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co2lbg.jpg",
    releaseDate: new Date("2015-09-01"),
    addedAt: new Date("2023-12-15"),
  },
  {
    id: "11",
    imageSrc:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p3v.jpg",
    releaseDate: new Date("2021-06-11"),
    addedAt: new Date("2023-12-10"),
  },
  {
    id: "12",
    imageSrc:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co1r7c.jpg",
    releaseDate: new Date("2018-09-07"),
    addedAt: new Date("2023-12-05"),
  },
  {
    id: "13",
    imageSrc:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co2lc4.jpg",
    releaseDate: new Date("2020-07-17"),
    addedAt: new Date("2023-12-01"),
  },
  {
    id: "14",
    imageSrc:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p51.jpg",
    releaseDate: new Date("2022-08-29"),
    addedAt: new Date("2023-11-28"),
  },
  {
    id: "15",
    imageSrc:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co1yep.jpg",
    releaseDate: new Date("2019-11-08"),
    addedAt: new Date("2023-11-25"),
  },
  {
    id: "16",
    imageSrc:
      "https://images.igdb.com/igdb/image/upload/t_cover_big/co2lbj.jpg",
    releaseDate: new Date("2017-10-27"),
    addedAt: new Date("2023-11-20"),
  },
];

export const GET = async () => {
  try {
    // Simulate a small delay to mimic real API behavior
    await new Promise((resolve) => setTimeout(resolve, 100));

    return NextResponse.json({
      games: mockGames,
      total: mockGames.length,
    });
  } catch (error) {
    console.error("Home API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch home games" },
      { status: 500 }
    );
  }
};
