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

  var feedWithData: any[] = [];

  for( const feed of feedList){
    const feedRes = await parser.parseURL(
          feed
        );
    // console.log(feedRes);
    arr = [...arr, ...feedRes.items];

    const thisFeed = {
      name: feedRes.title,
      description: feedRes.description,
      items: feedRes.items,
      url: feedRes.link
    }
    feedWithData = [...feedWithData, thisFeed]

  }
  arr = sortByIsoDate(arr);

  return [arr, feedWithData];
};

export const fetchData = (feedList: string[]) => {
  return fetchFeed(feedList);
};


function compare( a: { isoDate: number; }, b: { isoDate: number; } ) {
  if ( a.isoDate < b.isoDate ){
    return -1;
  }
  if ( a.isoDate > b.isoDate ){
    return 1;
  }
  return 0;
}

const sortByIsoDate = (arr:any[]) => {
  return arr.sort ( compare ).reverse();
}
