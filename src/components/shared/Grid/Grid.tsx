import { SavedGame } from "@/types";
import { Card } from "./components";

import styles from "./Grid.module.scss";

interface GridProps {
  games: SavedGame[];
  onCardClick: (gameId: string) => void;
  onDeleteClick: (gameId: string) => void;
}

const Grid = ({ games, onCardClick, onDeleteClick }: GridProps) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <div className={styles["grid"]}>
          {games.map((item: SavedGame) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                imageSrc={item.imageSrc}
                onClick={onCardClick}
                onDeleteClick={onDeleteClick}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Grid;
