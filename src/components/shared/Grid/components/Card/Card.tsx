"use client";

import Image from "next/image";
import { Trash } from "lucide-react";
import { useBreakpoint } from "@/client/hooks";

import styles from "./Card.module.scss";

interface CardProps {
  id: string;
  gameName: string;
  imageSrc?: string;
  onClick: (gameId: string) => void;
  onDeleteClick?: (gameId: string) => void;
}

const Card = ({
  id,
  gameName,
  imageSrc,
  onClick,
  onDeleteClick,
}: CardProps) => {
  const currentBreakpoint = useBreakpoint();
  const isMobile = currentBreakpoint === "xs" || currentBreakpoint === "sm";

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick(id);
    }
  };

  const handleDeleteKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onDeleteClick?.(id);
    }
  };

  return (
    <article className={styles["container"]} role="gridcell">
      <div
        className={styles["image-container"]}
        onClick={() => onClick(id)}
        onKeyDown={handleKeyPress}
        role="button"
        tabIndex={0}
        aria-label={`View details for ${gameName}`}
      >
        {!imageSrc && (
          <span
            className={styles["image-not-found"]}
            role="img"
            aria-label="No image available"
          >
            Image not found
          </span>
        )}
        {imageSrc && (
          <Image
            className={styles["image-cover"]}
            src={imageSrc}
            alt={`Cover image for ${gameName}`}
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
          onKeyDown={handleDeleteKeyPress}
          aria-label={`Remove ${gameName} from collection`}
        >
          <Trash className={styles["trash-icon"]} aria-hidden="true" />
        </button>
      )}
    </article>
  );
};

export default Card;
