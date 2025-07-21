import Image from "next/image";
import cn from "classnames";
import LibraryImage from "@public/images/games-library.svg";
import { useIntersectionObserver } from "@/client/hooks";
import { SavedGame } from "@/app/types";
import Grid from "@/app/components/shared/Grid";
import { SortButtons } from "./components";

import styles from "./Library.module.scss";

interface LibraryProps {
  items: SavedGame[];
}

const Library = ({ items }: LibraryProps) => {
  const { elementRef: sortButtonsRef, isVisible: isTestVisible } =
    useIntersectionObserver({
      threshold: 0,
      rootMargin: "0px",
    });

  return (
    <div className={styles["container"]}>
      {/* Sorting buttons - Floating*/}
      {items.length > 0 && (
        <div
          className={cn(
            styles["sort-buttons-container"],
            styles["floating"],
            !isTestVisible && styles["floating-visible"]
          )}
        >
          <SortButtons />
        </div>
      )}

      <div
        className={cn(
          styles["content"],
          items.length > 0 && styles["with-items"]
        )}
      >
        <span className={styles["title"]}>Saved games</span>

        {/* Sorting buttons */}
        {items.length > 0 && (
          <div
            className={cn(
              styles["sort-buttons-container"],
              !isTestVisible && styles["hidden"]
            )}
            ref={sortButtonsRef}
          >
            <SortButtons />
          </div>
        )}

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

        {/* Grid list */}
        <Grid items={items} />
      </div>
    </div>
  );
};

export default Library;
