import { Search } from "@/components/shared";
import { Header, Library } from "./components";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles["container"]}>
      <Header />
      <div className={styles["first-row"]}>
        <div className={styles["select-container"]}>
          <Search />
        </div>
      </div>
      {/* <Library /> */}
    </div>
  );
};

export default Home;
