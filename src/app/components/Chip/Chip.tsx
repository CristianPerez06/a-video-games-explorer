"use client";

import styles from "./Chip.module.scss";

export interface ChipProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Chip = ({ icon, title, description }: ChipProps) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["icon"]}>{icon}</div>
      <span className={styles["title"]}>{`${title}:`}</span>
      <span className={styles["description"]}>{description}</span>
    </div>
  );
};

export default Chip;
