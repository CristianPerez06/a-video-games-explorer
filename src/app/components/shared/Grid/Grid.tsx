import { SavedGame } from "@/app/types";
import { Card } from "./components";

import styles from "./Grid.module.scss";

interface GridProps {
  items: SavedGame[];
}

const Grid = ({ items }: GridProps) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <div className={styles["grid"]}>
          {items.map((item: SavedGame) => {
            return <Card key={item.id} imageSrc={item.imageSrc} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Grid;
