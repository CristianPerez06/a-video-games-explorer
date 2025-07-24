"use client";

import cn from "classnames";
import styles from "./Button.module.scss";

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  isDisabled?: boolean;
  variant?: "primary" | "secondary";
  ariaLabel?: string;
}

const Button = ({
  label,
  isDisabled = false,
  variant = "primary",
  onClick,
  ariaLabel,
}: ButtonProps) => {
  const handleClick = () => {
    onClick?.();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <button
      type="button"
      className={cn(styles["container"], styles[variant])}
      disabled={isDisabled}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel || `${label} button`}
      role="button"
      aria-disabled={isDisabled}
      data-testid="button"
    >
      {label}
    </button>
  );
};

export default Button;
