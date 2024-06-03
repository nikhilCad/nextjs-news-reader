import React from "react";

export const Sidebar = (feeds: any) => {
  return (
    <div className="sticky top-0 shadow flex flex-col gap-1 pt-10 bg-zinc-900 h-screen">
      <div
        className="flex flex-row gap-4 w-40 pl-4 items-center 
          text-white text-base rounded-md hover:bg-zinc-600 hover:scale-110 transition-all"
      >
        All Items
      </div>

      {feeds.map((item: any) => {
        return (
          <div
            className="flex flex-row gap-4 w-40 pl-4 items-center 
          text-white text-base rounded-md hover:bg-zinc-600 hover:scale-110 transition-all"
          >
            {getFavicon(item.url)}
            {item.name}
          </div>
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
