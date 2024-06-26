'use client';

import { useCurFeedStore, useAllFeedsStore } from "@/utils/appContext";
import { useEffect, useState } from "react";

const Sidebar = ( ) => {

  // const feeds = JSON.parse(feedsStr);

  const feeds = useAllFeedsStore((state) => state.getAllFeeds)();

  const getCurFeed = useCurFeedStore((state) => state.getCurFeed);
  const setCurFeed = useCurFeedStore((state) => state.setCurFeed);
    
  // const [message, setMessage] = useState('')

  //   useEffect(() => {
  //       fetch('http://localhost:8080/api/hello')
  //           .then(response => response.json())
  //           .then(data => setMessage(data.message))
  //   }, [])
  
  // console.log(message);

  const handleClick = (item:any) => {
    setCurFeed({
      name: item.name,
      url: item.url
    })
    console.log(getCurFeed());
  }

  return (
    <div className="sticky top-0 shadow flex flex-col gap-1 pt-10 bg-zinc-900 h-screen">
      <div
        className="flex flex-row gap-4 w-40 pl-4 items-center 
          text-white text-base rounded-md hover:bg-zinc-600 hover:scale-110 transition-all" 
          onClick = {()=>handleClick({
            name: "ALL",
            url: "ALL",
          })}         
      >
        All Items
      </div>

      {feeds.map((item: any) => {
        return (
          <button
            className="flex flex-row gap-4 w-40 pl-4 items-center 
          text-white text-base rounded-md hover:bg-zinc-600 hover:scale-110 transition-all"
            onClick = {()=>handleClick(item)}
            key={item.url}
          >
            {getFavicon(item.url)}
            {item.name}
          </button>
        );
      })}
    </div>
  );
};

const getFavicon = function (url: string) {
  // var domain = new URL(url).hostname
  // console.log(domain)
  // return domain;
  const favUrl =
    "https://s2.googleusercontent.com/s2/favicons?domain_url=" + url;
  return <img src={favUrl}></img>;
};

export default Sidebar;
