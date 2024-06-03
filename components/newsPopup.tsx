import { parseFeedForImage } from "@/utils/parseFeedForImage";
import Link from "next/link";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area"

export const newsPopup = (item: any) => {
  const imageUrl = parseFeedForImage(item);
  return (
    <ScrollArea className="h-[85vh] w-[90%] rounded-md border pb-6 ml-10 mr-10">
      <div className="pr-6 pl-6">
      <Link
        href={item.link}
        target="_blank"
        className="text-2xl font-bold mb-8 pb-4 hover:underline"
      >
        {item.title}
      </Link>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={item.title}
          className="mt-6 mb-6 block w-auto h-auto m-auto max-w-96"
        ></img>
      )}
      <div className="text-base pt-4">
        {item.contentSnippet}
      </div>
      </div>
    </ScrollArea>
  );
};
