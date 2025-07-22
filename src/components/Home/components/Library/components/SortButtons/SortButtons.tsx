"use client";

import React, { useState } from "react";
import cn from "classnames";
import { SortOption } from "@/types";

import styles from "./SortButtons.module.scss";

interface SortButtonsProps {
  onSortClick: (sortId: string) => void;
}

const SortButtons = ({ onSortClick }: SortButtonsProps) => {
  const [activeSort, setActiveSort] = useState("last-added");

  const sortOptions: SortOption[] = [
    { id: "last-added", description: "Last added" },
    { id: "newest", description: "Newest" },
    { id: "oldest", description: "Oldest" },
  ];

  const handleSortClick = (sortId: string) => {
    setActiveSort(sortId);
    onSortClick(sortId);
  };

  return (
    <div className={styles["container"]}>
      {sortOptions.map((sortOption) => (
        <button
          key={sortOption.id}
          className={cn(
            styles["button"],
            activeSort === sortOption.id && styles["active"]
          )}
          onClick={() => handleSortClick(sortOption.id)}
        >
          {sortOption.description}
        </button>
      ))}
    </div>
  );
};

export default SortButtons;
