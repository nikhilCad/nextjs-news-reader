import React from "react";
import { newsCard } from "./newsCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { newsPopup } from "./newsPopup";
import { use } from "react";
import { fetchData } from "@/utils/getFeedFromUrl";

// import { useCurFeedStore } from "@/utils/appContext";

const feeds = [
  {name: "NyTimes", url: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml"},
  // {name: "Reddit", url: "https://old.reddit.com/.rss"},
  // {name: "Times of India", url: "https://timesofindia.indiatimes.com/rssfeedstopstories.cms"},
  {name: "Tech Crunch", url:"https://techcrunch.com/feed/"}
];

const NewsColumn = () => {

  // const curFeed = useCurFeedStore((state) => state.getCurFeed)();

  // console.log(curFeed);

  const [data, _] = use(fetchData(feeds.map(feed => feed.url)));
  // const [data, _] = use(fetchData([curFeed].map(feed => feed.url)));

  return (
    <div className="flex flex-wrap p-5 bg-zinc-900">
      {data.map((item: any) => {
        return (
          <Dialog key={item.link}>
            <DialogTrigger className="w-1/4">{newsCard(item)}</DialogTrigger>
            <DialogContent className="h-[calc(100vh-5%)] min-w-[calc(100vw-40%)]">
              <DialogHeader>
                <DialogTitle>
                  Header component with buttons
                </DialogTitle>
                <DialogDescription>{newsPopup(item)}</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
};

export default NewsColumn;
