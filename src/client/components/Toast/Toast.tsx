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

  return (
    <div className={cn(styles["container"], styles[variant])}>
      <div className={styles["header"]}>
        <Icon className={styles["icon"]} />
        <span className={"h2"}>{title}</span>
      </div>
      {description && <div className={"h4"}>{description}</div>}
    </div>
  );
};

export default Toast;
