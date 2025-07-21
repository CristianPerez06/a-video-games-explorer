"use client";

import cn from "classnames";
import { BackButton, GameHavenIcon, Search } from "./components";

import styles from "./Content.module.scss";

interface ContentProps {
  onGameSelected: (id: number) => void;
  onBack?: () => void;
}

const Content = ({ onBack, onGameSelected }: ContentProps) => {
  return (
    <div className={styles["container"]}>
      <div
        className={cn(styles["content"], onBack && styles["with-back-button"])}
      >
        <div className={styles["first-row"]}>
          {!onBack && (
            <>
              <GameHavenIcon />
              <h1 className={"h1"}>Gaming Haven Z</h1>
            </>
          )}
          {onBack && <BackButton onClick={onBack} />}
        </div>
        <div
          className={cn(styles["second-row"], onBack && styles["width-auto"])}
        >
          <div className={styles["select-container"]}>
            <Search onGameSelected={onGameSelected} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
