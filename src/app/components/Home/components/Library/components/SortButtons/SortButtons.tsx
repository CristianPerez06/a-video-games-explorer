import React, { useState } from "react";
import cn from "classnames";

import styles from "./SortButtons.module.scss";

const SortButtons = () => {
  const [activeSort, setActiveSort] = useState("Last added");

  const sortOptions = ["Last added", "Newest", "Oldest"];

  const handleSortClick = (sortType: string) => {
    setActiveSort(sortType);
  };

  return (
    <div className={styles["container"]}>
      {sortOptions.map((sortOption) => (
        <button
          key={sortOption}
          className={cn(
            styles["button"],
            activeSort === sortOption && styles["active"]
          )}
          onClick={() => handleSortClick(sortOption)}
        >
          {sortOption}
        </button>
      ))}
    </div>
  );
};

export default SortButtons;
