import Link from "@/node_modules/next/link";
import React from "react";
import { use } from "react";
import { fetchData } from "@/utils/getFeedFromUrl";
import { newsColumn } from "@/components/newsColumn";
import { Sidebar } from "@/components/sidebar";

const feedsFetched = [
  "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
  "https://old.reddit.com/.rss",
  "https://timesofindia.indiatimes.com/rssfeedstopstories.cms"
];

export default function Home() {
  const allFeeds = use(fetchData(feedsFetched));
  return (
    <main className="flex flex-row">
      <Sidebar />
      
      <div className="flex flex-col ">
        {(newsColumn(allFeeds))}
      </div>
      
    </main>
  );
}
