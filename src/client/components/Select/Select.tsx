"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import cn from "classnames";
import Spinner from "@/client/components/Spinner";
import Picture from "./components/Picture";

import styles from "./Select.module.scss";

const MIN_QUERY_LENGTH = 3;

type Item = {
  id: string;
  name: string;
  image?: string;
};

interface SelectProps {
  items: Item[] | null;
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
  const containerRef = useRef<HTMLDivElement>(null);
  const isClearingRef = useRef(false);

  const handleSearch = (query: string) => {
    setQuery(query);
    onSearch?.(query);
  };

  const handleClearInput = () => {
    isClearingRef.current = true;
    setQuery("");
    setIsOpen(false);
    inputRef.current?.focus();
    // Reset the clearing flag after a brief delay to allow focus event to complete
    setTimeout(() => {
      isClearingRef.current = false;
    }, 0);
  };

  const handleItemClick = (item: Item) => {
    onItemSelected?.(item);
    setIsOpen(false);
  };

  const handleInputFocus = () => {
    if (query.length > 0 && !isClearingRef.current && !isLoading) {
      setIsOpen(true);
    }
  };

  // Handle clicks outside the component
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!items || isLoading) {
      setIsOpen(false);
      return;
    }

    setIsOpen(query.length >= MIN_QUERY_LENGTH);
    setCurrentItems(items);
  }, [items, query, isLoading]);

  return (
    <div className={styles["container"]} ref={containerRef}>
      <div className={styles["input-container"]}>
        <Search className={styles["search-icon"]} />
        <input
          type="text"
          placeholder="Search games..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={handleInputFocus}
          ref={inputRef}
          className={cn(styles["input"], isOpen && styles["open"])}
        />
        {!isLoading && query.length > 0 && (
          <button
            className={styles["right-icon-container"]}
            onClick={handleClearInput}
          >
            <X className={styles["clear-icon"]} />
          </button>
        )}
        {isLoading && query.length > 0 && (
          <div className={styles["right-icon-container"]}>
            <Spinner size="sm" />
          </div>
        )}
      </div>
      {/* Always render the list container to allow CSS transitions */}
      {!isLoading && (
        <div
          className={cn(
            styles["list-container"],
            isOpen ? styles["open"] : styles["closed"]
          )}
        >
          <div className={styles["list-content"]}>
            <ul className={styles["list"]}>
              {currentItems.map((item) => (
                <li key={item.id} className={styles["list-item"]}>
                  <div
                    className={styles["list-item-content"]}
                    onClick={() => handleItemClick(item)}
                  >
                    {item.image && <Picture src={item.image} alt={item.name} />}
                    <span className={styles["list-item-content-text"]}>
                      {item.name}
                    </span>
                  </div>
                </li>
              ))}
              {currentItems.length === 0 && (
                <li className={styles["list-item-empty"]}>
                  <span className={styles["list-item-empty-text"]}>
                    No results found
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
