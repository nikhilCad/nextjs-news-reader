import React from "react";
import NewsColumn from "@/components/newsColumn";
import  Sidebar from "@/components/sidebar";
//import { useCurFeedStore } from "@/utils/appContext";



const showSidebar = true;

export default function Home() {

  // const getMyString = useCurFeedStore((state) => state.getCurFeedUrl);
  // const setMyString = useCurFeedStore((state) => state.setCurFeedUrl);

  
  // const [allFeeds, feedWithNames] = use(fetchData([getMyString()].map(feed => feed.url)));
  
  return (
    <main className="flex flex-row">
      {showSidebar && <Sidebar/>}
      
      <div className="flex flex-col ">
        <NewsColumn/>
      </div>
      
    </main>
  );
}
