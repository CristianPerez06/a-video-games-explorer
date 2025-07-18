import PageComponent from "./pageComponent";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles["page"]}>
      <PageComponent />
    </div>
  );
}
