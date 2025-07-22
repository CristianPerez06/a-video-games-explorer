import { ArrowLeftIcon } from "lucide-react";

import styles from "./BackButton.module.scss";

const BackButton = () => {
  return (
    <button className={styles["container"]}>
      <ArrowLeftIcon className={styles["icon"]} />
      <span className={styles["text"]}>Back</span>
    </button>
  );
};

export default BackButton;
