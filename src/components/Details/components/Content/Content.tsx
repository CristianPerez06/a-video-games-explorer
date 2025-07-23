"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Spinner, Toast } from "@/client/components";
import { mapGameToGameDetails } from "@/utils";
import { GameDetails } from "@/types";
import { SimilarGames, Media, Summary, Chips, ImageTitle } from "./components";

import styles from "./Content.module.scss";

interface ContentProps {
  gameId: string;
}

const Content = ({ gameId }: ContentProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [game, setGame] = useState<GameDetails>();

  const fetchGameDetails = useCallback(async (id: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/games/details/${id}`);

      if (!response.ok) {
        toast(
          <Toast
            variant="error"
            title="Error loading game details"
            description={`Failed to load game details. Please try again.`}
          />
        );
        setGame(undefined);
        return;
      }

      const data = await response.json();
      const gameDetails = mapGameToGameDetails(data.game);
      setGame(gameDetails);
    } catch (error) {
      console.error("Error fetching games:", error);
      toast(
        <Toast
          variant="error"
          title="Error loading game details"
          description={`Failed to load game details. Please try again.`}
        />
      );
      setGame(undefined);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGameDetails(gameId);
  }, [fetchGameDetails, gameId]);

  return (
    <div className={styles["container"]}>
      {isLoading && (
        <div className={styles["spinner-container"]}>
          <Spinner size="lg" variant="dark" />
        </div>
      )}
      {!isLoading && game && (
        <div className={styles["content"]}>
          <ImageTitle
            imageSrc={game.imageSrc}
            gameName={game.name}
            publishers={game.publishers.map((publisher) => publisher.name)}
          />
          <div className={styles["second-row"]}>
            <Chips
              rating={
                game.rating ? Number((game.rating / 10).toFixed(1)) : undefined
              }
              releaseDate={game.releaseDate}
              genres={game.genre.map((genre) => genre.name)}
            />
          </div>
          <div className={styles["third-row"]}>
            <Summary summary={game.summary} platforms={game.platforms} />
          </div>
          {game.media.length > 0 && (
            <div className={styles["fourth-row"]}>
              <Media media={game.media} />
            </div>
          )}
          {game.similarGames.length > 0 && (
            <div className={styles["fifth-row"]}>
              <SimilarGames games={game.similarGames} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Content;
