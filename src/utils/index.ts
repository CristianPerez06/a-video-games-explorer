import { SavedGame } from "@/app/types";

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
