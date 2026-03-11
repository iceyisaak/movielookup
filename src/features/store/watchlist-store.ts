import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WatchlistStore {
  ids: string[];
  add: (id: string) => void;
  remove: (id: string) => void;
  has: (id: string) => boolean;
}

export const useWatchlistStore = create<WatchlistStore>()(
  persist(
    (set, get) => ({
      ids: [],
      add: (id) => set((s) => ({ ids: [...s.ids, id] })),
      remove: (id) => set((s) => ({ ids: s.ids.filter((i) => i !== id) })),
      has: (id) => get().ids.includes(id),
    }),
    { name: "watchlist" }, // persists to localStorage automatically
  ),
);
