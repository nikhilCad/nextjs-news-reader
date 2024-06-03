import Parser from "rss-parser";

const fetchFeed = async (feedList: string[]) => {
  type CustomFeed = { foo: string };
  type CustomItem = { mediaContent: any };

  const parser: Parser<CustomFeed, CustomItem> = new Parser({
    customFields: {
      item: [["media:content", "mediaContent"]],
    },
  });

  

  var arr: any[] = [];

  // feedList.forEach(async (feed:string)=>{
  //   const feedRes = await parser.parseURL(
  //     "https://rss.nytimes.com/services/xml/rss/nyt/World.xml"
  //   );
  //   arr = [...arr, feedRes.items];
  // })

  for( const feed of feedList){
    const feedRes = await parser.parseURL(
          feed
        );
    arr = [...arr, feedRes.items];

  }

  // console.log(arr)

  // const arr = feed.items; //.map((item: any) => item.title);

  return arr;
};

export const fetchData = (feedList: string[]) => {
  return fetchFeed(feedList);
};
