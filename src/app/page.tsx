import { Button } from "@/app/components";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles["page"]}>
      <span className={styles["title"]}>
        Gaming Haven Z
        <Button label="Gaming Haven Z" />
      </span>
    </div>
  );
}
