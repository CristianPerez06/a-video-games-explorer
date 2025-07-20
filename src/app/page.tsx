import { Home as HomeContent } from "@/app/components";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles["container"]}>
      <HomeContent />
    </div>
  );
}
