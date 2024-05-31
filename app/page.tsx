import Link from "@/node_modules/next/link";
import React from "react";
import { use } from "react";
import Parser from "rss-parser";

const fetchFeed = async () => {
  type CustomFeed = { foo: string };
  type CustomItem = { bar: number };

  const parser: Parser<CustomFeed, CustomItem> = new Parser();

  const feed = await parser.parseURL("https://netflixtechblog.com/feed");

  const arr = feed.items; //.map((item: any) => item.title);

  return arr;
};

const fetchData = fetchFeed();

export default function Home() {
  const data = use(fetchData);
  return (
    <main className="flex flex-col ">
      {data.map((item: any) => {
        console.log(Object.keys(item))
        return (
          // <Link href={item.link} target="_blank"><button className="btn btn-primary">{item.title}</button></Link>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item['content:encodedSnippet']}</p>
            </div>
          </div>
        );
      })}
    </main>
  );
}
