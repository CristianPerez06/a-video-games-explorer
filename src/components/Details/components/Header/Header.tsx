import { Search } from "@/components/shared";
import { BackButton } from "./components";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <div className={styles["row"]}>
          <BackButton />
          <div className={styles["search-container"]}>
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
