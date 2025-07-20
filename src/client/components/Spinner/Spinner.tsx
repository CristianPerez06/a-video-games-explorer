"use client";

import cn from "classnames";

import styles from "./Spinner.module.scss";

interface SpinnerProps {
  variant?: "light" | "dark";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const Spinner = ({ size = "xs", variant = "light" }: SpinnerProps) => {
  return (
    <div className={cn(styles.container, styles[variant], styles[size])} />
  );
};

export default Spinner;
