import Link from "@/node_modules/next/link";
import React from "react";
import { use } from "react";
import { fetchData } from "@/utils/getFeedFromUrl";
import { newsColumn } from "@/components/newsColumn";
import { Sidebar } from "@/components/sidebar";

const feedsFetched = [
  {name: "NyTimes", url: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml"},
  {name: "Reddit", url: "https://old.reddit.com/.rss"},
  {name: "Times of India", url: "https://timesofindia.indiatimes.com/rssfeedstopstories.cms"},
  {name: "Tech Crunch", url:"https://techcrunch.com/feed/"}
];

export default function Home() {
  const allFeeds = use(fetchData(feedsFetched.map(feed => feed.url)));
  return (
    <main className="flex flex-row">
      {Sidebar(feedsFetched)}
      
      <div className="flex flex-col ">
        {(newsColumn(allFeeds))}
      </div>
      
    </main>
  );
}
