import { Star, Calendar, Puzzle } from "lucide-react";
import { Chip } from "@/client/components";

import styles from "./Chips.module.scss";

const Chips = () => {
  return (
    <div className={styles["container"]}>
      <Chip
        icon={<Star width={16} height={16} />}
        title="Rating"
        description="8.9"
      />
      <Chip
        icon={<Calendar width={16} height={16} />}
        title="Rating"
        description="8.9"
      />
      <Chip
        icon={<Puzzle width={16} height={16} />}
        title="Genre"
        description="Card & Board Game"
      />
    </div>
  );
};

export default Chips;
