import Image from "next/image";
import cn from "classnames";
import { useState, useEffect } from "react";
import LibraryImage from "@public/images/games-library.svg";
import { useIntersectionObserver } from "@/client/hooks";
import { sortGames } from "@/utils";
import { SavedGame } from "@/app/types";
import Grid from "@/app/components/shared/Grid";
import { SortButtons } from "./components";

import styles from "./Library.module.scss";

interface LibraryProps {
  savedGames: SavedGame[];
  onDeleteGame: (gameId: string) => void;
}

const Library = ({ savedGames, onDeleteGame }: LibraryProps) => {
  const [games, setGames] = useState(sortGames(savedGames, "last-added"));
  const [currentSortType, setCurrentSortType] = useState<string>("last-added");

  const { elementRef: sortButtonsRef, isVisible: isTestVisible } =
    useIntersectionObserver({
      threshold: 0,
      rootMargin: "0px",
    });

  const handleSortClick = (sortId: string) => {
    setCurrentSortType(sortId);
    const sortedGames = sortGames(games, sortId);
    setGames(sortedGames);
  };

  const handleCardClick = (gameId: string) => {
    console.log("Card clicked - id: ", gameId);
  };

  const handleDeleteClick = (gameId: string) => {
    onDeleteGame(gameId);
  };

  useEffect(() => {
    const updatedGames = sortGames(savedGames, currentSortType);
    setGames(updatedGames);
  }, [savedGames, currentSortType]);

  return (
    <div className={styles["container"]}>
      {/* Sorting buttons - Floating*/}
      {games.length > 0 && (
        <div
          className={cn(
            styles["sort-buttons-container"],
            styles["floating"],
            !isTestVisible && styles["floating-visible"]
          )}
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
        {games.length > 0 && (
          <div
            className={cn(
              styles["sort-buttons-container"],
              !isTestVisible && styles["hidden"]
            )}
            ref={sortButtonsRef}
          >
            <SortButtons onSortClick={handleSortClick} />
          </div>
        )}

        {/* Empty state */}
        {games.length == 0 && (
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
        <Grid
          games={games}
          onCardClick={handleCardClick}
          onDeleteClick={handleDeleteClick}
        />
      </div>
    </div>
  );
};

export default Library;
