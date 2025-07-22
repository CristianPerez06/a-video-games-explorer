import { Header, Content } from "./components";

import styles from "./Details.module.scss";

const Details = () => {
  return (
    <div className={styles["container"]}>
      <Header />
      <Content />
    </div>
  );
};

export default Details;
