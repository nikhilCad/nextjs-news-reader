import { parse } from "node-html-parser";
import { sanitizeImageUrl } from "@/utils/sanitizeImageUrl";

export const parseFeedForImage = (item: any): string => {
  var imageUrl = item?.enclosure?.url ? item?.enclosure?.url : "";

  if (imageUrl === "") {
    var doc = parse(item.content);
    var img = doc.querySelector("img");

    if (img?.rawAttributes?.src) {
      imageUrl = sanitizeImageUrl(img?.rawAttributes?.src);
    } else {
        if(item?.mediaContent){
            imageUrl = item?.mediaContent['$'].url
        }
    }
  }

  return imageUrl;
};
