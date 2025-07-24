"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useGamesStore } from "@/providers";
import { Spinner, Toast } from "@/client/components";
import { Grid } from "@/components/shared";
import { mapGameToGameDetails } from "@/utils";
import { GameDetails } from "@/types";
import { Media, Summary, Chips, ImageTitle } from "./components";

import styles from "./Content.module.scss";

interface ContentProps {
  gameId: string;
}

const Content = ({ gameId }: ContentProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [game, setGame] = useState<GameDetails>();
  const { games, addGame, removeGame } = useGamesStore((state) => state);

  const router = useRouter();

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

  const handleCollectGameClick = () => {
    if (!game) return;

    const savedGame = {
      id: game.id,
      name: game.name,
      imageSrc: game.imageSrc,
      releaseDate: game.releaseDate,
      addedAt: new Date(),
    };

    addGame(savedGame);

    toast(
      <Toast
        variant="success"
        title="Game collected"
        description={`${game.name} has been added to your collection`}
      />
    );
  };

  const handleRemoveGameClick = () => {
    if (!game) return;

    removeGame(game.id);

    toast(
      <Toast
        variant="success"
        title="Game removed"
        description={`${game.name} has been removed from your collection`}
      />
    );
  };

  const handleSimilarGameClick = (gameId: string) => {
    router.push(`/details/${gameId}`);
  };

  useEffect(() => {
    fetchGameDetails(gameId);
  }, [fetchGameDetails, gameId]);

  const isGameCollected = games.some((game) => game.id === gameId);

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
            isGameCollected={isGameCollected}
            onCollectGameClick={() => {
              if (isGameCollected) {
                handleRemoveGameClick();
              } else {
                handleCollectGameClick();
              }
            }}
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
              <div className={styles["similar-games-container"]}>
                <span className={styles["similar-games-title"]}>
                  Similar Games
                </span>
                <Grid
                  games={game.similarGames.map((game) => ({
                    id: game.id,
                    name: game.name,
                    imageSrc: game.imageSrc,
                    addedAt: new Date(),
                  }))}
                  onCardClick={handleSimilarGameClick}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Content;
