import { create } from "zustand";

interface feed{
  name: string,
  url: string
}

interface curFeedState {
  curFeed: feed;
  setCurFeed: (newFeed: feed) => void;
  getCurFeed: () => feed;
}

export const useCurFeedStore = create<curFeedState>((set, get) => ({
  curFeed: {name: "NyTimes", url:"https://rss.nytimes.com/services/xml/rss/nyt/World.xml"},
  setCurFeed: (newFeed) => set({ curFeed: newFeed }),
  getCurFeed: () => get().curFeed,
}));

interface allFeedsState {
  allFeeds: feed[];
  setAllFeeds: (newFeeds: feed[]) => void;
  addFeed: (feed: feed) => void;
  removeFeed: (feed: feed) => void;
  getAllFeeds: () => feed[];
}

const defaultFeeds = [
  {name: "NyTimes", url: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml"},
  // {name: "Reddit", url: "https://old.reddit.com/.rss"},
  // {name: "Times of India", url: "https://timesofindia.indiatimes.com/rssfeedstopstories.cms"},
  {name: "Tech Crunch", url:"https://techcrunch.com/feed/"}
];

export const useAllFeedsStore = create<allFeedsState>((set, get) => ({
  allFeeds: defaultFeeds,
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
