"use client";

import Image from "next/image";
import { concatenateStrings } from "@/utils";
import { Button } from "@/client/components";
import { useBreakpoint } from "@/client/hooks";

import styles from "./ImageTitle.module.scss";

interface ImageTitleProps {
  imageSrc?: string;
  gameName: string;
  publishers: string[];
  isGameCollected?: boolean;
  onCollectGameClick: () => void;
}

const ImageTitle = ({
  imageSrc,
  gameName,
  publishers,
  isGameCollected = false,
  onCollectGameClick,
}: ImageTitleProps) => {
  const currentBreakpoint = useBreakpoint();
  const isMobile = currentBreakpoint === "xs" || currentBreakpoint === "sm";

  const publisherText =
    publishers.length > 0
      ? concatenateStrings(publishers)
      : "Unknown publisher";

  return (
    <section className={styles["container"]} aria-labelledby="game-title">
      <div className={styles["columns"]}>
        <div
          className={styles["image-container"]}
          role="img"
          aria-label={
            imageSrc ? `Cover image for ${gameName}` : "No image available"
          }
        >
          {!imageSrc && (
            <span className={styles["image-not-found"]}>Image not found</span>
          )}
          {imageSrc && (
            <Image
              src={imageSrc}
              className={styles["image-cover"]}
              alt={`Cover image for ${gameName}`}
              width={isMobile ? 83 : 270}
              height={isMobile ? 110 : 326}
              priority={true}
            />
          )}
        </div>

        <div className={styles["right-column"]}>
          <h1 id="game-title" className={styles["title"]}>
            {gameName}
          </h1>
          {publishers.length > 0 && (
            <p className={styles["publisher"]} aria-label="Game publisher">
              {publisherText}
            </p>
          )}
          <div
            className={styles["desktop-button-container"]}
            role="group"
            aria-label="Game collection actions"
          >
            <Button
              label={isGameCollected ? "Game collected" : "Collect game"}
              onClick={onCollectGameClick}
              variant={isGameCollected ? "secondary" : "primary"}
              aria-pressed={isGameCollected}
            />
          </div>
        </div>
      </div>
      <div
        className={styles["mobile-button-container"]}
        role="group"
        aria-label="Game collection actions"
      >
        <Button
          label={isGameCollected ? "Game collected" : "Collect game"}
          onClick={onCollectGameClick}
          variant={isGameCollected ? "secondary" : "primary"}
          aria-pressed={isGameCollected}
        />
      </div>
    </section>
  );
};

export default ImageTitle;
