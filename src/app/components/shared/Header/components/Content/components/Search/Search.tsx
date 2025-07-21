"use client";

import { useState, useCallback, useRef } from "react";
import { Select, Toast } from "@/client/components";
import { toast } from "react-toastify";
import { debounce } from "lodash";
import { IGDBGame } from "@/app/types";

import styles from "./Search.module.scss";

const MIN_QUERY_LENGTH = 3;

type SelectItem = {
  id: number;
  name: string;
  image?: string;
};

interface SearchProps {
  onGameSelected: (gameId: number) => void;
}

const Search = ({ onGameSelected }: SearchProps) => {
  const [searchResults, setSearchResults] = useState<SelectItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const mapGamesToSelectItems = useCallback(
    (games: IGDBGame[]): SelectItem[] => {
      return games.map((game) => {
        return {
          id: game.id,
          name: game.name,
          image: game.cover?.image_id
            ? `https://images.igdb.com/igdb/image/upload/t_thumb/${game.cover.image_id}.jpg`
            : undefined,
        };
      });
    },
    []
  );

  const searchGames = useCallback(
    async (query: string): Promise<IGDBGame[]> => {
      try {
        const response = await fetch(
          `/api/games/search?q=${encodeURIComponent(query)}`
        );

        if (!response.ok) {
          toast(
            <Toast
              variant="error"
              title="Something went wrong"
              description="Please try again"
            />
          );

          return [];
        }

        const data = await response.json();
        return data.games || [];
      } catch (error) {
        console.error("Error searching games:", error);
        toast(
          <Toast
            variant="error"
            title="Something went wrong"
            description="Please try again"
          />
        );
        return [];
      }
    },
    []
  );

  const handleSearchRef = useRef(
    debounce(async (query: string) => {
      if (!query || query.trim().length < MIN_QUERY_LENGTH) {
        setSearchResults([]);
        return;
      }

      const trimmedQuery = query.trim().toLowerCase();

      setIsLoading(true);

      try {
        const games = await searchGames(trimmedQuery);
        const selectItems = mapGamesToSelectItems(games);

        setSearchResults(selectItems);
      } catch (error) {
        console.error("Search failed:", error);
        toast(
          <Toast
            variant="error"
            title="Something went wrong"
            description="Please try again"
          />
        );
        setSearchResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 300)
  );

  return (
    <div className={styles["container"]}>
      <Select
        items={searchResults}
        isLoading={isLoading}
        onSearch={handleSearchRef.current}
        onItemSelected={(item) => {
          const numberId = Number(item.id);
          onGameSelected(numberId);
        }}
      />
    </div>
  );
};

export default Search;
