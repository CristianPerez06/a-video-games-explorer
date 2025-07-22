import { ImageCarousel } from "@/client/components";

import styles from "./Media.module.scss";

const Media = () => {
  return (
    <div className={styles["container"]}>
      <span className={styles["title"]}>Media</span>
      <div className={styles["image-carousel-container"]}>
        <ImageCarousel
          images={[
            { id: 1, alt: "Game cover" },
            { id: 2, alt: "Game cover" },
            { id: 3, alt: "Game cover" },
            { id: 4, alt: "Game cover" },
            { id: 5, alt: "Game cover" },
          ]}
        />
      </div>
    </div>
  );
};

export default Media;
