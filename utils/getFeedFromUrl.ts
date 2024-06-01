import Parser from "rss-parser";

const fetchFeed = async () => {
  type CustomFeed = { foo: string };
  type CustomItem = { bar: number };

  const parser: Parser<CustomFeed, CustomItem> = new Parser();

  const feed = await parser.parseURL("https://timesofindia.indiatimes.com/rssfeedstopstories.cms");

  const arr = feed.items; //.map((item: any) => item.title);

  return arr;
};

export const fetchData = fetchFeed();