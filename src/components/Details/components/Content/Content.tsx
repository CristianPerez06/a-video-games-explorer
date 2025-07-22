"use client";

import { SimilarGames, Media, Summary, Chips, ImageTitle } from "./components";

import styles from "./Content.module.scss";

const Content = () => {
  return (
    <div className={styles["container"]}>
      <ImageTitle />
      <div className={styles["second-row"]}>
        <Chips />
      </div>
      <div className={styles["third-row"]}>
        <Summary />
      </div>
      <div className={styles["fourth-row"]}>
        <Media />
      </div>
      <div className={styles["fifth-row"]}>
        <SimilarGames />
      </div>
    </div>
  );
};

export default Content;
