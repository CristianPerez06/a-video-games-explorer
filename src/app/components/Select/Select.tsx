"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import cn from "classnames";
import { Spinner } from "@/app/components";
import Picture from "./components/Picture";

import styles from "./Select.module.scss";

type Item = {
  id: number;
  name: string;
  image: string;
};

interface SelectProps {
  items: Item[];
  isLoading?: boolean;
  onSearch: (query: string) => void;
  onItemSelected: (item: Item) => void;
}

const Select = ({
  items,
  isLoading = false,
  onSearch,
  onItemSelected,
}: SelectProps) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [currentItems, setCurrentItems] = useState<Item[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (query: string) => {
    setQuery(query);
    onSearch?.(query);
  };

  const handleClearInput = () => {
    setQuery("");
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const handleItemClick = (item: Item) => {
    onItemSelected?.(item);
  };

  useEffect(() => {
    setIsOpen(query.length > 0);

    if (items.length > 0) {
      setCurrentItems(items);
    }
  }, [items, query]);

  return (
    <div className={styles["container"]}>
      <div className={styles["input-container"]}>
        <Search className={styles["icon"]} />
        <input
          type="text"
          placeholder="Search games..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          ref={inputRef}
          className={cn(styles["input"], isOpen && styles["open"])}
        />
        {query.length > 0 && (
          <button
            className={styles["clear-icon-container"]}
            onClick={handleClearInput}
          >
            <X className={styles["clear-icon"]} />
          </button>
        )}
      </div>
      {isOpen && (
        <div className={styles["list-container"]}>
          <ul className={styles["list"]}>
            {isLoading && (
              <li className={styles["list-item-loading"]}>
                <div className={styles["list-item-loading-spinner"]}>
                  <Spinner size="sm" />
                </div>
              </li>
            )}
            {!isLoading &&
              currentItems.map((item) => (
                <li key={item.id} className={styles["list-item"]}>
                  <div
                    className={styles["list-item-content"]}
                    onClick={() => handleItemClick(item)}
                  >
                    <Picture src={item.image} alt={item.name} />
                    <span className={styles["list-item-content-text"]}>
                      {item.name}
                    </span>
                  </div>
                </li>
              ))}
            {!isLoading && currentItems.length === 0 && (
              <li className={styles["list-item-empty"]}>
                <span className={styles["list-item-empty-text"]}>
                  Nothing to show
                </span>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
