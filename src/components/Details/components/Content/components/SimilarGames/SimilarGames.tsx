import Image from "next/image";
import { useBreakpoint } from "@/client/hooks";

import styles from "./SimilarGames.module.scss";

const SimilarGames = () => {
  const currentBreakpoint = useBreakpoint();

  const isMobile = currentBreakpoint === "xs" || currentBreakpoint === "sm";

  return (
    <div className={styles["container"]}>
      <span className={styles["title"]}>Similar Games</span>
      <div className={styles["images-container"]}>
        <div className={styles["images-content"]}>
          <Image
            src=""
            alt="Game cover"
            width={isMobile ? 114 : 170}
            height={isMobile ? 152 : 226}
            className={styles["game-cover-image"]}
          />
          <Image
            src=""
            alt="Game cover"
            width={isMobile ? 114 : 170}
            height={isMobile ? 152 : 226}
            className={styles["game-cover-image"]}
          />
          <Image
            src=""
            alt="Game cover"
            width={isMobile ? 114 : 170}
            height={isMobile ? 152 : 226}
            className={styles["game-cover-image"]}
          />
          <Image
            src=""
            alt="Game cover"
            width={isMobile ? 114 : 170}
            height={isMobile ? 152 : 226}
            className={styles["game-cover-image"]}
          />
        </div>
      </div>
    </div>
  );
};

export default SimilarGames;
