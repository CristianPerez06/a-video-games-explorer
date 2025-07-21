"use client";

import { useState, useCallback } from "react";
import { Header } from "@/app/components/shared";
import { Library } from "./components";
import { SavedGame } from "@/app/types";

import styles from "./Home.module.scss";

const Home = () => {
  const [savedGames, setSavedGames] = useState<SavedGame[]>([]);

  const handleGameSelected = useCallback((game: SavedGame) => {
    // Check if game is already saved to avoid duplicates
    setSavedGames((prevGames) => {
      const isAlreadySaved = prevGames.some(
        (savedGame) => savedGame.id === game.id
      );

      if (isAlreadySaved) {
        return prevGames;
      }

      return [...prevGames, game];
    });
  }, []);

  const handleDeleteGame = useCallback((gameId: string) => {
    setSavedGames((prevGames) =>
      prevGames.filter((game) => game.id !== gameId)
    );
  }, []);

  return (
    <div className={styles["container"]}>
      <Header onGameSelected={handleGameSelected} onBack={() => {}} />
      <Library savedGames={savedGames} onDeleteGame={handleDeleteGame} />
    </div>
  );
};

export default Home;
