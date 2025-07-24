import cn from "classnames";
import { CircleCheck, CircleAlert } from "lucide-react";

import styles from "./Toast.module.scss";

interface ToastProps {
  variant: "success" | "error";
  title: string;
  description?: string;
}

const Toast = ({ variant, title, description }: ToastProps) => {
  const Icon = variant === "success" ? CircleCheck : CircleAlert;
  const isError = variant === "error";

  return (
    <div
      className={cn(styles["container"], styles[variant])}
      role={isError ? "alert" : "status"}
      aria-live={isError ? "assertive" : "polite"}
      data-testid="toast"
    >
      <div className={styles["header"]}>
        <Icon
          className={styles["icon"]}
          aria-hidden="true"
          data-testid="toast-icon"
        />
        <h2 className={styles["h2"]} data-testid="toast-title">
          {title}
        </h2>
      </div>
      {description && (
        <div
          className={styles["h4"]}
          role="complementary"
          data-testid="toast-description"
        >
          {description}
        </div>
      )}
    </div>
  );
};

export default Toast;
