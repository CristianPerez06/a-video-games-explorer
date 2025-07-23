import { GameHavenIcon } from "./components";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <div className={styles["row"]}>
          <GameHavenIcon />
          <h1 className={styles["h1"]}>Gaming Haven Z</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
