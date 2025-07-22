import { Button } from "@/client/components";
import { useBreakpoint } from "@/client/hooks";
import Image from "next/image";

import styles from "./ImageTitle.module.scss";

const ImageTitle = () => {
  const currentBreakpoint = useBreakpoint();

  const isMobile = currentBreakpoint === "xs" || currentBreakpoint === "sm";

  return (
    <div className={styles["container"]}>
      <div className={styles["columns"]}>
        <Image
          src=""
          alt="Game cover"
          width={isMobile ? 83 : 270}
          height={isMobile ? 110 : 326}
          className={styles["game-cover-image"]}
        />
        <div className={styles["right-column"]}>
          <span className={styles["title"]}>Grand Theft Auto V</span>
          <span className={styles["publisher"]}>Rockstar Games</span>
          {!isMobile && <Button label="Collect game" />}
        </div>
      </div>
      {isMobile && (
        <div className={styles["mobile-button-container"]}>
          <Button label="Collect game" />
        </div>
      )}
    </div>
  );
};

export default ImageTitle;
