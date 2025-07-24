import { GameDetails, IGDBGame, SavedGame } from "@/types";
import { fromUnixTime } from "date-fns";

export const sortGames = (
  gamesList: SavedGame[],
  sortType: string
): SavedGame[] => {
  return [...gamesList].sort((a, b) => {
    switch (sortType) {
      case "last-added":
        return new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime();

      case "newest":
        // Handle cases where releaseDate might be undefined
        if (!a.releaseDate && !b.releaseDate) return 0;
        if (!a.releaseDate) return 1; // Put games without release date at the end
        if (!b.releaseDate) return -1;
        return (
          new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
        );

      case "oldest":
        // Handle cases where releaseDate might be undefined
        if (!a.releaseDate && !b.releaseDate) return 0;
        if (!a.releaseDate) return 1; // Put games without release date at the end
        if (!b.releaseDate) return -1;
        return (
          new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()
        );

      default:
        // Default to last-added sorting
        return new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime();
    }
  });
};

export const mapGameToSavedGame = (game: IGDBGame): SavedGame => {
  return {
    id: game.id.toString(),
    name: game.name,
    imageSrc: game.cover?.image_id
      ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg`
      : undefined,
    releaseDate: game.first_release_date
      ? new Date(fromUnixTime(game.first_release_date))
      : new Date(1970, 0, 1),
    addedAt: new Date(),
    slug: game.slug,
  };
};

export const mapGamesToSavedGames = (games: IGDBGame[]): SavedGame[] => {
  return games.map(mapGameToSavedGame);
};

// Used to mock the addedAt date for testing
export const addAddedAtDates = (games: SavedGame[]): SavedGame[] => {
  const startDate = new Date(2025, 0, 1); // Jan 1, 2025

  return games.map((game, index) => {
    const addedDate = new Date(startDate);
    addedDate.setDate(startDate.getDate() + index);

    return {
      ...game,
      addedAt: addedDate,
    };
  });
};

export const mapGameToGameDetails = (game: IGDBGame): GameDetails => {
  return {
    id: game.id.toString(),
    name: game.name,
    imageSrc: game.cover?.image_id
      ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg`
      : undefined,
    releaseDate: game.first_release_date
      ? new Date(fromUnixTime(game.first_release_date))
      : undefined,
    publishers:
      game.involved_companies?.map((company) => ({
        name: company.company.name,
      })) || [],
    rating: game.rating,
    genre:
      game.genres?.map((genre) => ({
        name: genre.name,
      })) || [],
    summary: game.summary,
    platforms: game.platforms?.map((platform) => platform.name) || [],
    media:
      game.screenshots?.map((screenshot) => ({
        imageId: screenshot.image_id,
        imageSrc: `https://images.igdb.com/igdb/image/upload/t_thumb/${screenshot.image_id}.jpg`,
      })) || [],
    similarGames:
      game.similar_games?.map((similarGame) => ({
        id: similarGame.id.toString(),
        name: similarGame.name,
        imageSrc: similarGame.cover?.image_id
          ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${similarGame.cover.image_id}.jpg`
          : undefined,
        slug: similarGame.slug,
      })) || [],
    slug: game.slug,
  };
};

export const concatenateStrings = (strings: string[]): string => {
  return strings.length > 0
    ? strings.slice(0, -1).join(", ") +
        (strings.length > 1 ? ", " : "") +
        strings[strings.length - 1]
    : "";
};
