import { ImageCarousel } from "@/client/components";

import styles from "./Media.module.scss";

interface MediaProps {
  media: {
    imageId: string;
    imageSrc: string;
  }[];
}

const Media = ({ media }: MediaProps) => {
  return (
    <div className={styles["container"]}>
      <span className={styles["title"]}>Media</span>
      <div className={styles["image-carousel-container"]}>
        <ImageCarousel
          images={media.map((item) => ({
            id: item.imageId,
            src: item.imageSrc,
          }))}
        />
      </div>
    </div>
  );
};

export default Media;
