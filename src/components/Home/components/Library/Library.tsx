"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import cn from "classnames";
import { useState, useEffect, useRef, useCallback } from "react";
import { toast } from "react-toastify";
import LibraryImage from "@public/images/games-library.svg";
import { useGamesStore } from "@/providers";
import { useIntersectionObserver } from "@/client/hooks";
import { addAddedAtDates, mapGamesToSavedGames, sortGames } from "@/utils";
import { SavedGame } from "@/types";
import { Spinner, Toast } from "@/client/components";
import Grid from "@/components/shared/Grid";
import { SortButtons } from "./components";

import styles from "./Library.module.scss";

const Library = () => {
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  const { games, addGames, setGames, removeGame } = useGamesStore(
    (state) => state
  );
  const sortButtonsRef = useRef<HTMLDivElement>(null);
  const isSortButtonsVisible = useIntersectionObserver(sortButtonsRef);

  const fetchGames = useCallback(async (): Promise<SavedGame[]> => {
    try {
      const response = await fetch("/api/games/home");

      if (!response.ok) {
        console.error("Error fetching games:");
        toast(
          <Toast
            variant="error"
            title="Error loading games"
            description={`Failed to load games. Please try again.`}
          />
        );
        return [];
      }

      const data = await response.json();
      let savedGames = mapGamesToSavedGames(data.games);
      savedGames = addAddedAtDates(savedGames);
      return savedGames;
    } catch (error) {
      console.error("Error fetching games:", error);
      toast(
        <Toast
          variant="error"
          title="Error loading games"
          description={`Failed to load games. Please try again.`}
        />
      );
      return [];
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
    removeGame(gameId);
  };

  useEffect(() => {
    // If games are already in the store, don't fetch them again
    if (games.length > 0) {
      setIsLoading(false);
      return;
    }

    // Fetch games from the API
    const getMockedSavedGames = async () => {
      const mockedSavedGames = await fetchGames();
      // Avoid updating the store (which would trigger this effect again)
      // when no games were fetched (e.g., API request failed).
      if (mockedSavedGames.length > 0) {
        addGames(mockedSavedGames);
      }
      setIsLoading(false);
    };
    getMockedSavedGames();
  }, [addGames, fetchGames, games]);

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
              priority={true}
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
