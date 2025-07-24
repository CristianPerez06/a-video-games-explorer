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
      data-testid="chip"
      aria-label={ariaLabel || `${title}: ${description}`}
    >
      <div
        className={styles["icon"]}
        aria-hidden="true"
        data-testid="chip-icon"
      >
        {icon}
      </div>
      <span
        className={styles["title"]}
        data-testid="chip-title"
      >{`${title}:`}</span>
      <span className={styles["description"]} data-testid="chip-description">
        {description}
      </span>
    </div>
  );
};

export default Chip;
