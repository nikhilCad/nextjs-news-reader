import React from "react";
import {use} from "react";
import Parser from "rss-parser";

const fetchFeed = async () => {
  type CustomFeed = { foo: string };
  type CustomItem = { bar: number };

  const parser: Parser<CustomFeed, CustomItem> = new Parser();

  const feed = await parser.parseURL("https://netflixtechblog.com/feed");

  const arr = feed.items;//.map((item: any) => item.title);

  return arr;
};

const fetchData = fetchFeed();

export default function Home() {

  const data = use(fetchData);
  return (
    <main>
      RSS Reader
      {data.map((item: any) => {
        return <p>{item.title} : {item.link}</p>;
      })}
      <button className="btn btn-primary">Button</button>
    </main>
  );
}
