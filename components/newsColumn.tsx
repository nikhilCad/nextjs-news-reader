import { parseFeedForImage } from "@/utils/parseFeedForImage";
import { getTextEllipsis } from "@/utils/summarizeText";
import Link from "next/link";
import React from "react";
import classes from "../styles/column.module.scss";

export const newsColumn = (data: any) => {
  return (
    <div className={classes.newspaperLayout}>
      {data.map((item: any) => {
      
        const imageUrl = parseFeedForImage(item)  

        return (
          <div className={classes.card}>
            <Link href={item.link} target="_blank" className={classes.cardHeading}>{item.title}</Link>
            {imageUrl &&(<img
              src={imageUrl}
              alt={item.title}
              className="w-full"
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
