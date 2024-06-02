import { parseFeedForImage } from "@/utils/parseFeedForImage";
import { getTextEllipsis } from "@/utils/summarizeText";
import Link from "next/link";
import React from "react";

export const newsColumn = (data: any) => {
  return (
    <div className="grid grid-cols-auto-fit-400 p-5 bg-slate-200">
      {data.map((item: any) => {
      
        const imageUrl = parseFeedForImage(item)  

        return (
          <div className="bg-white border-gray-400 rounded-lg m-5 p-4 shadow-lg">
            <Link href={item.link} target="_blank" className="text-base font-bold mb-3">{item.title}</Link>
            {imageUrl &&(<img
              src={imageUrl}
              alt={item.title}
              className="w-full mb-3"
            ></img>)}
            <div className="text-base">
              {getTextEllipsis(item.contentSnippet)}
            </div>
          </div>
        );
      })}
    </div>
  );
};
