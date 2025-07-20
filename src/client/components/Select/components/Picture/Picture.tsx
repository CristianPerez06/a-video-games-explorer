"use client";

import { useState } from "react";
import Image from "next/image";
import IgdbIcon from "./images/igdb-icon.svg";

import styles from "./Picture.module.scss";

type PictureProps = {
  src: string;
  alt: string;
};

const Picture = ({ src, alt }: PictureProps) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Image
      src={imageError ? IgdbIcon.src : src}
      alt={alt}
      width={30}
      height={30}
      className={styles["container"]}
      onError={() => setImageError(true)}
    />
  );
};

export default Picture;
