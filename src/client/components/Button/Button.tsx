"use client";

import cn from "classnames";
import styles from "./Button.module.scss";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  isDisabled?: boolean;
  variant?: "primary" | "secondary";
}

const Button = ({
  label,
  isDisabled = false,
  variant = "primary",
  onClick,
}: ButtonProps) => {
  const handleClick = () => {
    onClick?.();
  };

  return (
    <button
      type="button"
      className={cn(styles["container"], styles[variant])}
      disabled={isDisabled}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
