"use client";

import styles from "./Button.module.scss";

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

const Button = ({ label }: ButtonProps) => {
  return (
    <button type="button" className={styles.storybookButton}>
      {label}
    </button>
  );
};

export default Button;
