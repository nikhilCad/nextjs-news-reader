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
    <div className="bg-white border-gray-400 rounded-lg m-1 p-4 shadow-lg h-96">
      <div className="text-lg font-bold mb-3 pb-4">{item.title} {formateDate(item.isoDate)}</div>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={item.title}
          className="mb-3 block w-auto h-auto max-w-60 m-auto"
        ></img>
      )}
    </div>
  );
};
