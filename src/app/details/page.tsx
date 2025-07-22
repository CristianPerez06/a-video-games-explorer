import { Details as DetailsContent } from "@/components";

import styles from "./details.module.scss";

const Details = () => {
  return (
    <div className={styles["container"]}>
      <DetailsContent />
    </div>
  );
};

export default Details;
