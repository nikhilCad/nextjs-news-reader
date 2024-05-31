import React from "react";
import {use} from "react";
import Parser from "rss-parser";

type CustomFeed = { foo: string };
type CustomItem = { bar: number };

const fetchFeed = async () => {
  const parser: Parser<CustomFeed, CustomItem> = new Parser();

  const feed = await parser.parseURL("https://netflixtechblog.com/feed");

  const arr = feed.items.map((item: any) => item.title);

  return arr;
};

const fetchData = fetchFeed();

export default function Home() {

  const data = use(fetchData);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      RSS Reader
      {data.map((item: any) => {
        return <p>{item}</p>;
      })}
    </main>
  );
}
