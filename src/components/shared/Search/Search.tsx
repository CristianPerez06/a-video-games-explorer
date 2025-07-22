"use client";

import { useState, useCallback, useRef } from "react";
import { fromUnixTime } from "date-fns";
import { Select, Toast } from "@/client/components";
import { toast } from "react-toastify";
import { debounce } from "lodash";
import { IGDBGame, SavedGame } from "@/types";

import styles from "./Search.module.scss";

const MIN_QUERY_LENGTH = 3;

type SelectItem = {
  id: string;
  name: string;
  image?: string;
};

const Search = () => {
  const [searchItemResults, setSearchItemResults] = useState<SelectItem[]>([]);
  const [searchGameResults, setSearchGameResults] = useState<IGDBGame[]>([]);

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

    const selectedGameData = searchGameResults.find(
      (game) => game.id === gameId
    );

    const savedGame: SavedGame = {
      id: selectedGameData!.id.toString(),
      imageSrc: selectedGameData!.cover?.image_id
        ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${
            selectedGameData!.cover.image_id
          }.jpg`
        : undefined,
      releaseDate: selectedGameData!.first_release_date
        ? new Date(fromUnixTime(selectedGameData!.first_release_date))
        : undefined,
      addedAt: new Date(),
    };

    // onGameSelected(savedGame); // TODO: Implement this
  };

  const handleSearchRef = useRef(
    debounce(async (query: string) => {
      if (!query || query.trim().length < MIN_QUERY_LENGTH) {
        setSearchItemResults([]);
        setSearchGameResults([]);
        return;
      }

      const trimmedQuery = query.trim().toLowerCase();

      setIsLoading(true);

      try {
        const games = await searchGames(trimmedQuery);
        const selectItems = mapGamesToSelectItems(games);

        setSearchItemResults(selectItems);
        setSearchGameResults(games);
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
        setSearchGameResults([]);
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
