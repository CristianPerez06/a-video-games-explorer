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
    >
      <div className={styles["header"]}>
        <Icon className={styles["icon"]} aria-hidden="true" />
        <h2 className={styles["h2"]}>{title}</h2>
      </div>
      {description && (
        <div className={styles["h4"]} role="complementary">
          {description}
        </div>
      )}
    </div>
  );
};

export default Toast;
