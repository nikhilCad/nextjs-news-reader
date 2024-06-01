import { getTextEllipsis } from "@/utils/summarizeText";
import Link from "next/link";
import React from "react";
import classes from "../styles/column.module.scss";
import { parse } from 'node-html-parser';
import { sanitizeImageUrl } from "@/utils/sanitizeImageUrl";

export const newsColumn = (data: any) => {
  return (
    <div className={classes.newspaperLayout}>
      {data.map((item: any) => {

        var doc = parse(item.content);
        var img = doc.querySelector('img');

        const imageUrl = img?.rawAttributes?.src ? sanitizeImageUrl(img?.rawAttributes?.src) : undefined

        console.log(imageUrl)
        

        return (
          <div className={classes.card}>
            <Link href={item.link} target="_blank" className={classes.cardHeading}>{item.title}</Link>
            {imageUrl &&(<img
              src={imageUrl}
              alt={item.title}
              className={classes.cardImage}
            ></img>)}
            <div className={classes.cardContent}>
              {getTextEllipsis(item.contentSnippet)}
            </div>
          </div>
        );
      })}
    </div>
  );
};
