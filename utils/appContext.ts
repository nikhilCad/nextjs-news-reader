import { create } from "zustand";

interface feed{
  name: string,
  url: string
}

interface curFeedState {
  curFeedUrl: feed;
  setCurFeedUrl: (newFeedUrl: feed) => void;
  getCurFeedUrl: () => feed;
}

export const useCurFeedStore = create<curFeedState>((set, get) => ({
  curFeedUrl: {name: "ALL", url:"ALL"},
  setCurFeedUrl: (newFeedUrl) => set({ curFeedUrl: newFeedUrl }),
  getCurFeedUrl: () => get().curFeedUrl,
}));

interface allFeedsState {
  allFeeds: feed[];
  setAllFeeds: (newFeeds: feed[]) => void;
  addFeed: (feed: feed) => void;
  removeFeed: (feed: feed) => void;
  getAllFeeds: () => feed[];
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
