import { toast } from "react-toastify";
import Image from "next/image";
import { concatenateStrings } from "@/utils";
import { Button, Toast } from "@/client/components";
import { useBreakpoint } from "@/client/hooks";

import styles from "./ImageTitle.module.scss";

interface ImageTitleProps {
  imageSrc?: string;
  gameName: string;
  publishers: string[];
}

const ImageTitle = ({ imageSrc, gameName, publishers }: ImageTitleProps) => {
  const currentBreakpoint = useBreakpoint();

  const handleCollectGameClick = () => {
    toast(
      <Toast
        variant="success"
        title="Game collected"
        description={`${gameName} has been added to your collection`}
      />
    );
  };

  const isMobile = currentBreakpoint === "xs" || currentBreakpoint === "sm";

  return (
    <div className={styles["container"]}>
      <div className={styles["columns"]}>
        <div className={styles["image-container"]}>
          {!imageSrc && (
            <span className={styles["image-not-found"]}>Image not found</span>
          )}
          {imageSrc && (
            <Image
              src={imageSrc}
              className={styles["image-cover"]}
              alt="Game cover"
              width={isMobile ? 83 : 270}
              height={isMobile ? 110 : 326}
            />
          )}
        </div>

        <div className={styles["right-column"]}>
          <span className={styles["title"]}>{gameName}</span>
          {publishers.length > 0 && (
            <span className={styles["publisher"]}>
              {concatenateStrings(publishers)}
            </span>
          )}
          <div className={styles["desktop-button-container"]}>
            <Button label="Collect game" onClick={handleCollectGameClick} />
          </div>
        </div>
      </div>
      <div className={styles["mobile-button-container"]}>
        <Button label="Collect game" onClick={handleCollectGameClick} />
      </div>
    </div>
  );
};

export default ImageTitle;
