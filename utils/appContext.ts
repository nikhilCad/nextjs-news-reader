import { create } from "zustand";

interface curFeedState {
  curFeedUrl: string;
  setCurFeedUrl: (newFeedUrl: string) => void;
  getCurFeedUrl: () => string;
}

export const useCurFeedStore = create<curFeedState>((set, get) => ({
  curFeedUrl: "ALL",
  setCurFeedUrl: (newFeedUrl) => set({ curFeedUrl: newFeedUrl }),
  getCurFeedUrl: () => get().curFeedUrl,
}));

interface allFeedsState {
  allFeeds: string[];
  setAllFeeds: (newFeeds: string[]) => void;
  addFeed: (feed: string) => void;
  removeFeed: (feed: string) => void;
  getAllFeeds: () => string[];
}

export const useAllFeedsStore = create<allFeedsState>((set, get) => ({
  allFeeds: [],
  setAllFeeds: (newFeeds) => set({ allFeeds: newFeeds }),
  addFeed: (feed) => set((state) => ({ allFeeds: [...state.allFeeds, feed] })),
  removeFeed: (feed) =>
    set((state) => ({
      allFeeds: state.allFeeds.filter((item) => item !== feed),
    })),
  getAllFeeds: () => get().allFeeds,
}));

// const myString = useCurFeedStore((state) => state.curFeedUrl);
// const setMyString = useCurFeedStore((state) => state.setCurFeedUrl);
// const getMyString = useCurFeedStore((state) => state.getCurFeedUrl);
// setMyString("newUrl");
