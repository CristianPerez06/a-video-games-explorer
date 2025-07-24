import { SavedGame } from "@/types";
import { Card } from "./components";

import styles from "./Grid.module.scss";

interface GridProps {
  games: SavedGame[];
  onCardClick: (slug: string) => void;
  onDeleteClick?: (gameId: string, gameName: string) => void;
  title?: string;
}

const Grid = ({
  games,
  onCardClick,
  onDeleteClick,
  title = "Games grid",
}: GridProps) => {
  return (
    <section className={styles["container"]} aria-label={title}>
      <div className={styles["content"]}>
        <div
          className={styles["grid"]}
          role="grid"
          aria-rowcount={games.length}
        >
          {games.map((item: SavedGame, index: number) => {
            return (
              <div key={item.id} role="row" aria-rowindex={index + 1}>
                <Card
                  id={item.id}
                  gameName={item.name}
                  imageSrc={item.imageSrc}
                  onClick={() => onCardClick(item.slug)}
                  onDeleteClick={() => onDeleteClick?.(item.id, item.name)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Grid;
