"use client";

import styles from "./Button.module.scss";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  isDisabled?: boolean;
}

const Button = ({ label, isDisabled = false, onClick }: ButtonProps) => {
  const handleClick = () => {
    if (isDisabled) return;

    onClick?.();
  };

  return (
    <button
      type="button"
      className={styles["container"]}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
