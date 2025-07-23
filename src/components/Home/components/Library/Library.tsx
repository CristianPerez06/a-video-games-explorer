"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import cn from "classnames";
import { useState, useEffect, useRef, useCallback } from "react";
import { toast } from "react-toastify";
import LibraryImage from "@public/images/games-library.svg";
import { useIntersectionObserver } from "@/client/hooks";
import { addAddedAtDates, mapGamesToSavedGames, sortGames } from "@/utils";
import { SavedGame } from "@/types";
import { Spinner, Toast } from "@/client/components";
import Grid from "@/components/shared/Grid";
import { SortButtons } from "./components";

import styles from "./Library.module.scss";

const Library = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [games, setGames] = useState<SavedGame[]>([]);

  const router = useRouter();
  const sortButtonsRef = useRef<HTMLDivElement>(null);
  const isSortButtonsVisible = useIntersectionObserver(sortButtonsRef);

  const fetchGames = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/games/home");

      if (!response.ok) {
        throw new Error("Failed to fetch games");
      }

      const data = await response.json();
      let savedGames = mapGamesToSavedGames(data.games);
      savedGames = addAddedAtDates(savedGames);
      setGames(savedGames);
    } catch (error) {
      console.error("Error fetching games:", error);
      toast(
        <Toast
          variant="error"
          title="Error loading games"
          description={`Failed to load games. Please try again.`}
        />
      );
      setGames([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSortClick = (sortId: string) => {
    const sortedGames = sortGames(games, sortId);
    setGames(sortedGames);
  };

  const handleCardClick = (gameId: string) => {
    router.push(`/details/${gameId}`);
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
