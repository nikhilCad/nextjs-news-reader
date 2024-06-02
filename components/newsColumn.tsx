import { parseFeedForImage } from "@/utils/parseFeedForImage";
import { getTextEllipsis } from "@/utils/summarizeText";
import Link from "next/link";
import React from "react";

export const newsColumn = (data: any) => {
  return (
    <div className="grid grid-cols-auto-fit-400 p-5 bg-slate-100 w-screen">
      {data.map((item: any) => {
      
        const imageUrl = parseFeedForImage(item)  

        return (
          <div className="bg-white border-gray-400 rounded-lg m-1 p-4 shadow-lg h-96">
            <Link href={item.link} target="_blank" className="text-lg font-bold mb-3 pb-4">{item.title}</Link>
            {imageUrl &&(<img
              src={imageUrl}
              alt={item.title}
              className="mb-3 block w-auto h-auto max-w-60 m-auto"
            ></img>)}
            {/* <div className="text-base pt-4 overflow-hidden">
              {getTextEllipsis(item.contentSnippet)}
            </div> */}
          </div>
        );
      })}
    </div>
  );
};
