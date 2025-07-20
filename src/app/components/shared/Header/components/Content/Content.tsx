"use client";

import cn from "classnames";
import { Select } from "@/client/components";
import { BackButton, GameHavenIcon } from "./components";

import styles from "./Content.module.scss";

interface ContentProps {
  onBack?: () => void;
}

const Content = ({ onBack }: ContentProps) => {
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
            <Select items={[]} onSearch={() => {}} onItemSelected={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
