import Image from "next/image";
import LibraryImage from "../../../../../../public/images/games-library.svg";

import styles from "./Library.module.scss";

interface LibraryProps {
  items: string[]; // TODO - Add correct type
}

const Library = ({ items }: LibraryProps) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <span className={styles["title"]}>Saved games</span>
        {/* Empty state */}
        {items.length == 0 && (
          <div className={styles["empty-library"]}>
            <Image
              src={LibraryImage.src}
              alt="library"
              width={280}
              height={168}
            />
            <div className={styles["empty-library-text"]}>
              <span className={styles["empty-library-title"]}>
                Nothing to collect yet.
              </span>
              <span className={styles["empty-library-description"]}>
                Here you will see your collected games
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Library;
