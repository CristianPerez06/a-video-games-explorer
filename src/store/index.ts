import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { SavedGame } from "@/types";

export type StoreState = {
  games: SavedGame[];
  addGame: (game: SavedGame) => void;
  addGames: (games: SavedGame[]) => void;
  setGames: (games: SavedGame[]) => void;
  removeGame: (id: string) => void;
};

export type StoreActions = {
  games: SavedGame[];
  addGame: (game: SavedGame) => void;
  addGames: (games: SavedGame[]) => void;
  setGames: (games: SavedGame[]) => void;
  removeGame: (id: string) => void;
};

export type Store = StoreState & StoreActions;

export const defaultInitState: StoreState = {
  games: [],
  addGame: () => {},
  addGames: () => {},
  setGames: () => {},
  removeGame: () => {},
};

export const createGamesStore = (initState: StoreState = defaultInitState) => {
  return create<Store>()(
    devtools((set) => ({
      ...initState,
      addGame: (game: SavedGame) =>
        set((state) => ({
          games: [...state.games, game],
        })),
      addGames: (games: SavedGame[]) =>
        set((state) => ({
          games: [...state.games, ...games],
        })),
      setGames: (games: SavedGame[]) =>
        set({
          games,
        }),
      removeGame: (id: string) =>
        set((state) => ({
          games: state.games.filter((game) => game.id !== id),
        })),
    }))
  );
};
