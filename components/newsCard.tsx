import { parseFeedForImage } from "@/utils/parseFeedForImage";
import Link from "next/link";
import React from "react";


const formateDate = (isoDate:any) => {
  const rightNow = new Date().valueOf()
  const articleTime = new Date(isoDate).valueOf()
  const seconds = (rightNow - articleTime) / 1000;

  var d = Math.floor(seconds / (3600*24));
  if(d>0) return d.toString() + "d"

  var h = Math.floor(seconds / (3600));
  if(h>0) return h.toString() + "h"

  var m = Math.floor(seconds / 60);
  if(m>0) return m.toString() + "m"
  
  return seconds.toString + "s"
}

export const newsCard = (item: any) => {
  const imageUrl = parseFeedForImage(item);
  return (
    <div className="bg-zinc-800 border-slate-950 rounded-lg m-1 p-4 shadow-lg h-96 relative">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={item.title}
          className="mb-3 m-auto block h-60 w-60 object-cover"
        ></img>
      )}
      <div className="text-base text-gray-100 font-bold mb-1 pb-4">{item.title}</div>
      {!imageUrl && (
        <div className="text-sm text-gray-300 pt-4 overflow-hidden text-wrap w-60 h-40">
        {item.contentSnippet}
      </div>
      )}
      <div className="absolute bottom-0 text-gray-300">{formateDate(item.isoDate)}</div>
    </div>
  );
};
