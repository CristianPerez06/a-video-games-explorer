import { Trash } from "lucide-react";

import styles from "./Card.module.scss";

interface CardProps {
  imageSrc: string;
  onButtonClick?: () => void;
}

const Card = ({ imageSrc, onButtonClick }: CardProps) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["image-container"]}>
        {/* <img className={styles["image"]} src={NotFoundImage} /> */}
      </div>
      <button
        className={styles["action-button"]}
        onClick={onButtonClick}
        aria-label="Card action"
      >
        <Trash className={styles["trash-icon"]} />
      </button>
    </div>
  );
};

export default Card;
