import Parser from "rss-parser";

const fetchFeed = async () => {
  type CustomFeed = { foo: string };
  type CustomItem = { mediaContent: any };

//   const parser: Parser<CustomFeed, CustomItem> = new Parser(); 
    const parser: Parser<CustomFeed, CustomItem> = new Parser(
        {
            customFields: {
              item: [
                ['media:content', 'mediaContent'],
              ]
            }
          }
    );

  const feed = await parser.parseURL("https://rss.nytimes.com/services/xml/rss/nyt/World.xml");

  const arr = feed.items; //.map((item: any) => item.title);

  return arr;
};

export const fetchData = fetchFeed();