import client from "../../client";
import imageUrlBuilder from "@sanity/image-url";

const getImageUrl = (source) => {
  return imageUrlBuilder(client).image(source);
};
export default getImageUrl;
