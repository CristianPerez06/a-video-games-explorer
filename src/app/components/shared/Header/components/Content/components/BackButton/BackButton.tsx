import { ArrowLeftIcon } from "lucide-react";

import styles from "./BackButton.module.scss";

interface BackButtonProps {
  onClick: () => void;
}

const BackButton = ({ onClick }: BackButtonProps) => {
  return (
    <button className={styles["container"]} onClick={onClick}>
      <ArrowLeftIcon className={styles["icon"]} />
      <span className={styles["text"]}>Back</span>
    </button>
  );
};

export default BackButton;
