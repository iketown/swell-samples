import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { useContentCtx } from "@context/ContentContext";
import client from "../../../client";
import styled from "styled-components";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Logo: React.FC<{ width?: number }> = ({ width = 80 }) => {
  const { logo } = useContentCtx();
  return (
    <div>
      <img src={urlFor(logo).width(width).url()} />
    </div>
  );
};

export default Logo;
