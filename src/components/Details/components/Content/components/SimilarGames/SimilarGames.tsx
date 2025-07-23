"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useBreakpoint } from "@/client/hooks";

import styles from "./SimilarGames.module.scss";

interface SimilarGamesProps {
  games: {
    id: string;
    name: string;
    imageSrc?: string;
  }[];
}

const SimilarGames = ({ games }: SimilarGamesProps) => {
  const router = useRouter();
  const currentBreakpoint = useBreakpoint();
  const isMobile = currentBreakpoint === "xs" || currentBreakpoint === "sm";

  const handleGameClick = (gameId: string) => {
    router.push(`/details/${gameId}`);
  };

  return (
    <div className={styles["container"]}>
      <span className={styles["title"]}>Similar Games</span>
      <div className={styles["images-container"]}>
        <div className={styles["images-content"]}>
          {games.map((game) => {
            return (
              <div
                className={styles["image-container"]}
                key={game.id}
                onClick={() => handleGameClick(game.id)}
              >
                {!game.imageSrc && (
                  <span className={styles["image-not-found"]}>
                    Image not found
                  </span>
                )}
                {game.imageSrc && (
                  <Image
                    src={game.imageSrc}
                    alt={`Game cover: ${game.name}`}
                    width={isMobile ? 114 : 170}
                    height={isMobile ? 152 : 226}
                    className={styles["image"]}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SimilarGames;
