"use client";

import Image from "next/image";
import { Trash } from "lucide-react";
import { useBreakpoint } from "@/client/hooks";

import styles from "./Card.module.scss";

interface CardProps {
  id: string;
  imageSrc?: string;
  onClick: (gameId: string) => void;
  onDeleteClick?: (gameId: string) => void;
}

const Card = ({ id, imageSrc, onClick, onDeleteClick }: CardProps) => {
  const currentBreakpoint = useBreakpoint();
  const isMobile = currentBreakpoint === "xs" || currentBreakpoint === "sm";

  return (
    <div className={styles["container"]}>
      <div className={styles["image-container"]} onClick={() => onClick(id)}>
        {!imageSrc && (
          <span className={styles["image-not-found"]}>Image not found</span>
        )}
        {imageSrc && (
          <Image
            className={styles["image-cover"]}
            src={imageSrc}
            alt="Game image"
            width={isMobile ? 114 : 170}
            height={isMobile ? 152 : 226}
            priority={true}
          />
        )}
      </div>
      {onDeleteClick && (
        <button
          className={styles["action-button"]}
          onClick={() => onDeleteClick(id)}
          aria-label="Card action"
        >
          <Trash className={styles["trash-icon"]} />
        </button>
      )}
    </div>
  );
};

export default Card;
