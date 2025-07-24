"use client";

import cn from "classnames";

import styles from "./Spinner.module.scss";

interface SpinnerProps {
  variant?: "light" | "dark";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  ariaLabel?: string;
}

const Spinner = ({
  size = "xs",
  variant = "light",
  ariaLabel = "Loading",
}: SpinnerProps) => {
  return (
    <div
      className={cn(styles.container, styles[variant], styles[size])}
      role="status"
      aria-label={ariaLabel}
      aria-live="polite"
    />
  );
};

export default Spinner;
