"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import { type Store, createGamesStore } from "@/store";

export type GamesStoreApi = ReturnType<typeof createGamesStore>;

export const GamesStoreContext = createContext<GamesStoreApi | undefined>(
  undefined
);

export interface GamesStoreProviderProps {
  children: ReactNode;
}

export const GamesStoreProvider = ({ children }: GamesStoreProviderProps) => {
  const storeRef = useRef<GamesStoreApi | null>(null);

  if (storeRef.current === null) {
    storeRef.current = createGamesStore();
  }

  return (
    <GamesStoreContext.Provider value={storeRef.current}>
      {children}
    </GamesStoreContext.Provider>
  );
};

export const useGamesStore = <T,>(selector: (store: Store) => T): T => {
  const gamesStoreContext = useContext(GamesStoreContext);

  if (!gamesStoreContext) {
    throw new Error(`useGamesStore must be used within GamesStoreProvider`);
  }

  return useStore(gamesStoreContext, selector);
};
