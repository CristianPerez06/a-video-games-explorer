import Image from "next/image";
import { Trash } from "lucide-react";

import styles from "./Card.module.scss";

interface CardProps {
  id: string;
  imageSrc?: string;
  onClick: (gameId: string) => void;
  onDeleteClick: (gameId: string) => void;
}

const Card = ({ id, imageSrc, onClick, onDeleteClick }: CardProps) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["image-container"]} onClick={() => onClick(id)}>
        {!imageSrc && (
          <span className={styles["image-not-found"]}>Image not found</span>
        )}
        {imageSrc && (
          <Image
            className={styles["image"]}
            src={imageSrc}
            alt="Game image"
            fill
          />
        )}
      </div>
      <button
        className={styles["action-button"]}
        onClick={() => onDeleteClick(id)}
        aria-label="Card action"
      >
        <Trash className={styles["trash-icon"]} />
      </button>
    </div>
  );
};

export default Card;
