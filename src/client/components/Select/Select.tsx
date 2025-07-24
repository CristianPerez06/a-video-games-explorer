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
  ariaLabel?: string;
}

const Select = ({
  items,
  isLoading = false,
  onSearch,
  onItemSelected,
  ariaLabel = "Search",
}: SelectProps) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [currentItems, setCurrentItems] = useState<Item[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const isClearingRef = useRef(false);

  const LIST_ID = "search-list";
  const INPUT_ID = "search-input";

  const handleSearch = (query: string) => {
    setQuery(query);
    onSearch?.(query);
    setActiveIndex(-1);
  };

  const handleClearInput = () => {
    isClearingRef.current = true;
    setQuery("");
    setIsOpen(false);
    setActiveIndex(-1);
    inputRef.current?.focus();
    setTimeout(() => {
      isClearingRef.current = false;
    }, 0);
  };

  const handleItemClick = (item: Item) => {
    onItemSelected?.(item);
    setIsOpen(false);
    setActiveIndex(-1);
  };

  const handleInputFocus = () => {
    if (query.length > 0 && !isClearingRef.current && !isLoading) {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setActiveIndex(-1);
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
        <Search className={styles["search-icon"]} aria-hidden="true" />
        <input
          id={INPUT_ID}
          type="text"
          placeholder="Search games..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={handleInputFocus}
          ref={inputRef}
          className={cn(styles["input"], isOpen && styles["open"])}
          role="combobox"
          aria-expanded={isOpen}
          aria-controls={LIST_ID}
          aria-activedescendant={
            activeIndex >= 0
              ? `item-${currentItems[activeIndex].id}`
              : undefined
          }
          aria-label={ariaLabel}
          aria-busy={isLoading}
        />
        {!isLoading && query.length > 0 && (
          <button
            className={styles["right-icon-container"]}
            onClick={handleClearInput}
            aria-label="Clear search"
          >
            <X className={styles["clear-icon"]} aria-hidden="true" />
          </button>
        )}
        {isLoading && query.length > 0 && (
          <div className={styles["right-icon-container"]}>
            <Spinner size="sm" />
          </div>
        )}
      </div>
      {!isLoading && (
        <div
          className={cn(
            styles["list-container"],
            isOpen ? styles["open"] : styles["closed"]
          )}
          role="region"
          aria-live="polite"
        >
          <div className={styles["list-content"]}>
            <ul
              id={LIST_ID}
              ref={listRef}
              className={styles["list"]}
              role="listbox"
            >
              {currentItems.map((item, index) => (
                <li
                  key={item.id}
                  className={cn(
                    styles["list-item"],
                    index === activeIndex && styles["active"]
                  )}
                  role="option"
                  id={`item-${item.id}`}
                  aria-selected={index === activeIndex}
                >
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
                <li className={styles["list-item-empty"]} role="status">
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
