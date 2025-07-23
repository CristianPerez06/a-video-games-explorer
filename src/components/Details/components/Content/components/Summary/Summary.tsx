import { concatenateStrings } from "@/utils";

import styles from "./Summary.module.scss";

interface SummaryProps {
  summary: string;
  platforms: string[];
}

const Summary = ({ summary, platforms }: SummaryProps) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["item"]}>
        <span className={styles["title"]}>Summary</span>
        <p className={styles["description"]}>{summary}</p>
      </div>
      <div className={styles["item"]}>
        <span className={styles["title"]}>Platforms</span>
        <p className={styles["description"]}>{concatenateStrings(platforms)}</p>
      </div>
    </div>
  );
};

export default Summary;
