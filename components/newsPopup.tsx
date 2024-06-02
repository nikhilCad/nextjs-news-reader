import { parseFeedForImage } from "@/utils/parseFeedForImage";
import React from "react";

export const newsPopup = (item: any) => {
  const imageUrl = parseFeedForImage(item);
  return (
    <div>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={item.title}
          className="mb-3 block w-auto h-auto max-w-60 m-auto"
        ></img>
      )}
      <div className="text-base pt-4 overflow-hidden">
        {item.contentSnippet}
      </div>
    </div>
  );
};
