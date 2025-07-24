"use client";

import { useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
// import { fromUnixTime } from "date-fns";
import { toast } from "react-toastify";
import { debounce } from "lodash";
import { Select, Toast } from "@/client/components";
import { IGDBGame } from "@/types";

import styles from "./Search.module.scss";

const MIN_QUERY_LENGTH = 3;

type SelectItem = {
  id: string;
  name: string;
  image?: string;
};

const Search = () => {
  const router = useRouter();

  const [searchItemResults, setSearchItemResults] = useState<
    SelectItem[] | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);

  const mapGamesToSelectItems = useCallback(
    (games: IGDBGame[]): SelectItem[] => {
      return games.map((game) => {
        return {
          id: game.id.toString(),
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

  const handleGameSelected = (id: string) => {
    const gameId = Number(id);

    router.push(`/details/${gameId}`);
  };

  const handleSearchRef = useRef(
    debounce(async (query: string) => {
      if (!query || query.trim().length < MIN_QUERY_LENGTH) {
        setSearchItemResults([]);
        return;
      }

      const trimmedQuery = query.trim().toLowerCase();

      setIsLoading(true);

      try {
        const games = await searchGames(trimmedQuery);
        const selectItems = mapGamesToSelectItems(games);

        setSearchItemResults(selectItems);
      } catch (error) {
        console.error("Search failed:", error);
        toast(
          <Toast
            variant="error"
            title="Something went wrong"
            description="Please try again"
          />
        );
        setSearchItemResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 300)
  );

  return (
    <div className={styles["container"]}>
      <Select
        items={searchItemResults}
        isLoading={isLoading}
        onSearch={handleSearchRef.current}
        onItemSelected={(item) => {
          handleGameSelected(item.id);
        }}
      />
    </div>
  );
};

export default Search;
