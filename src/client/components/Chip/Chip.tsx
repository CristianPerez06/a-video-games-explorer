"use client";

import styles from "./Chip.module.scss";

export interface ChipProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  ariaLabel?: string;
}

const Chip = ({ icon, title, description, ariaLabel }: ChipProps) => {
  return (
    <div
      className={styles["container"]}
      role="status"
      aria-label={ariaLabel || `${title}: ${description}`}
    >
      <div className={styles["icon"]} aria-hidden="true">
        {icon}
      </div>
      <span className={styles["title"]}>{`${title}:`}</span>
      <span className={styles["description"]}>{description}</span>
    </div>
  );
};

export default Chip;
