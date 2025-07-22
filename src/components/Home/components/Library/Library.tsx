"use client";

import Image from "next/image";
import cn from "classnames";
import { useState, useEffect, useRef, useCallback } from "react";
import LibraryImage from "@public/images/games-library.svg";
import { useIntersectionObserver } from "@/client/hooks";
import { sortGames } from "@/utils";
import { SavedGame } from "@/types";
import { Spinner } from "@/client/components";
import Grid from "@/components/shared/Grid";
import { SortButtons } from "./components";

import styles from "./Library.module.scss";

const savedGames: SavedGame[] = [
  {
    id: "1",
    releaseDate: new Date(),
    addedAt: new Date(),
  },
  {
    id: "2",
    releaseDate: new Date(),
    addedAt: new Date(),
  },
  {
    id: "3",
    releaseDate: new Date(),
    addedAt: new Date(),
  },
  {
    id: "4",
    releaseDate: new Date(),
    addedAt: new Date(),
  },
  {
    id: "5",
    releaseDate: new Date(),
    addedAt: new Date(),
  },
  {
    id: "6",
    releaseDate: new Date(),
    addedAt: new Date(),
  },
  {
    id: "7",
    releaseDate: new Date(),
    addedAt: new Date(),
  },
  {
    id: "8",
    releaseDate: new Date(),
    addedAt: new Date(),
  },
  {
    id: "9",
    releaseDate: new Date(),
    addedAt: new Date(),
  },
  {
    id: "10",
    releaseDate: new Date(),
    addedAt: new Date(),
  },
  {
    id: "11",
    releaseDate: new Date(),
    addedAt: new Date(),
  },
  {
    id: "12",
    releaseDate: new Date(),
    addedAt: new Date(),
  },
  {
    id: "13",
    releaseDate: new Date(),
    addedAt: new Date(),
  },
  {
    id: "15",
    releaseDate: new Date(),
    addedAt: new Date(),
  },
  {
    id: "16",
    releaseDate: new Date(),
    addedAt: new Date(),
  },
];

const Library = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [games, setGames] = useState<SavedGame[]>([]);
  const [currentSortType, setCurrentSortType] = useState<string>("last-added");

  const sortButtonsRef = useRef<HTMLDivElement>(null);
  const isSortButtonsVisible = useIntersectionObserver(sortButtonsRef);

  const fetchGames = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch("/api/games/home");

      if (!response.ok) {
        throw new Error("Failed to fetch games");
      }

      const data = await response.json();
      const sortedGames = sortGames(data.games, currentSortType);
      setGames(sortedGames);
    } catch (error) {
      console.error("Error fetching games:", error);
      setError("Failed to load games. Please try again.");
      setGames([]);
    } finally {
      setIsLoading(false);
    }
  }, [currentSortType]);

  const handleSortClick = (sortId: string) => {
    setCurrentSortType(sortId);
    const sortedGames = sortGames(games, sortId);
    setGames(sortedGames);
  };

  const handleCardClick = (gameId: string) => {
    console.log("Card clicked - id: ", gameId);
  };

  const handleDeleteClick = (gameId: string) => {
    // onDeleteGame(gameId); // TODO: Implement this
  };

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  return (
    <div className={styles["container"]}>
      {/* Sorting buttons - Floating*/}
      {games.length > 0 && !isSortButtonsVisible && (
        <div
          className={cn(styles["sort-buttons-container"], styles["floating"])}
        >
          <SortButtons onSortClick={handleSortClick} />
        </div>
      )}

      <div
        className={cn(
          styles["content"],
          games.length > 0 && styles["with-items"]
        )}
      >
        <span className={styles["title"]}>Saved games</span>

        {/* Sorting buttons */}
        <div className={styles["sort-buttons-container"]} ref={sortButtonsRef}>
          {!isLoading && games.length > 0 && (
            <SortButtons onSortClick={handleSortClick} />
          )}
        </div>

        {/* Loading state */}
        {isLoading && (
          <div className={styles["loading-error-container"]}>
            <Spinner size="lg" variant="dark" />
          </div>
        )}

        {/* Empty state */}
        {!isLoading && games.length == 0 && (
          <div className={styles["empty-library"]}>
            <Image
              src={LibraryImage.src}
              alt="library"
              width={280}
              height={168}
            />
            <div className={styles["empty-library-text"]}>
              <span className={styles["empty-library-title"]}>
                Nothing to collect yet.
              </span>
              <span className={styles["empty-library-description"]}>
                Here you will see your collected games
              </span>
            </div>
          </div>
        )}

        {/* Grid list */}
        {!isLoading && (
          <Grid
            games={games}
            onCardClick={handleCardClick}
            onDeleteClick={handleDeleteClick}
          />
        )}
      </div>
    </div>
  );
};

export default Library;
