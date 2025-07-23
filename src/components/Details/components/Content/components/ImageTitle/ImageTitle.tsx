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

  return (
    <div className={styles["container"]}>
      <div className={styles["columns"]}>
        <div className={styles["image-container"]}>
          {!imageSrc && (
            <span className={styles["image-not-found"]}>Image not found</span>
          )}
          {imageSrc && (
            <Image
              src={imageSrc}
              className={styles["image-cover"]}
              alt="Game cover"
              width={isMobile ? 83 : 270}
              height={isMobile ? 110 : 326}
            />
          )}
        </div>

        <div className={styles["right-column"]}>
          <span className={styles["title"]}>{gameName}</span>
          {publishers.length > 0 && (
            <span className={styles["publisher"]}>
              {concatenateStrings(publishers)}
            </span>
          )}
          <div className={styles["desktop-button-container"]}>
            <Button
              label={isGameCollected ? "Game collected" : "Collect game"}
              onClick={onCollectGameClick}
              variant={isGameCollected ? "secondary" : "primary"}
            />
          </div>
        </div>
      </div>
      <div className={styles["mobile-button-container"]}>
        <Button
          label={isGameCollected ? "Game collected" : "Collect game"}
          onClick={onCollectGameClick}
          variant={isGameCollected ? "secondary" : "primary"}
        />
      </div>
    </div>
  );
};

export default ImageTitle;
