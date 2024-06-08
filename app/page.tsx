import React from "react";
import { use } from "react";
import { fetchData } from "@/utils/getFeedFromUrl";
import { newsColumn } from "@/components/newsColumn";
import  Sidebar from "@/components/sidebar";
//import { useCurFeedStore } from "@/utils/appContext";

const feeds = [
  {name: "NyTimes", url: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml"},
  // {name: "Reddit", url: "https://old.reddit.com/.rss"},
  // {name: "Times of India", url: "https://timesofindia.indiatimes.com/rssfeedstopstories.cms"},
  {name: "Tech Crunch", url:"https://techcrunch.com/feed/"}
];

const showSidebar = true;

export default function Home() {

  // const getMyString = useCurFeedStore((state) => state.getCurFeedUrl);
  // const setMyString = useCurFeedStore((state) => state.setCurFeedUrl);

  const [allFeeds, feedWithNames] = use(fetchData(feeds.map(feed => feed.url)));
  // const [allFeeds, feedWithNames] = use(fetchData([getMyString()].map(feed => feed.url)));
  
  return (
    <main className="flex flex-row">
      {showSidebar && <Sidebar feedsStr = {JSON.stringify(feedWithNames)} />}
      
      <div className="flex flex-col ">
        {(newsColumn(allFeeds))}
      </div>
      
    </main>
  );
}
