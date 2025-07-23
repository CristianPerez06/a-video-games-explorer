import { Star, Calendar, Puzzle } from "lucide-react";
import { Chip } from "@/client/components";
import { concatenateStrings } from "@/utils";

import styles from "./Chips.module.scss";

interface ChipsProps {
  rating?: number;
  releaseDate?: Date;
  genres: string[];
}

const Chips = ({ rating, releaseDate, genres }: ChipsProps) => {
  return (
    <div className={styles["container"]}>
      <Chip
        icon={<Star width={16} height={16} />}
        title="Rating"
        description={rating?.toString() || "N/A"}
      />
      <Chip
        icon={<Calendar width={16} height={16} />}
        title="Release Date"
        description={releaseDate?.toLocaleDateString() || "N/A"}
      />
      {genres.length > 0 && (
        <Chip
          icon={<Puzzle width={16} height={16} />}
          title="Genre"
          description={concatenateStrings(genres)}
        />
      )}
    </div>
  );
};

export default Chips;
