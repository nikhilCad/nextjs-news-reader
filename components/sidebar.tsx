'use client';

import { useCurFeedStore } from "@/utils/appContext";

const Sidebar = ( {feedsStr} : {feedsStr:any} ) => {

  const feeds = JSON.parse(feedsStr);

  const getMyString = useCurFeedStore((state) => state.getCurFeedUrl);
  const setMyString = useCurFeedStore((state) => state.setCurFeedUrl);
  

  const handleClick = (item:any) => {
    setMyString({
      name: item.name,
      url: item.url
    })
    console.log(getMyString());
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
