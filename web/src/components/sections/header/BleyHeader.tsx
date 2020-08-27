import React from "react";
import { useContentCtx } from "@context/ContentContext";
import Logo from "@components/logo/Logo";
import styled from "styled-components";
import useWindowSize from "@hooks/useWindowSize";
import { bleyEvansColors } from "@utils/themes/bley/BleyColors";
import HeaderNameDisplay from "./HeaderNameDisplay";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../../../client";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const StyledHeader = styled.header<{ bgUrl: string }>`
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 100%;
  background-position: top;
  background-attachment: fixed;
  background-image: radial-gradient(
      ${bleyEvansColors.lightTan}bb,
      ${bleyEvansColors.lightTan}cc
    ),
    url(${(p) => p.bgUrl});
  background-color: ${bleyEvansColors.lightTan};
`;
const BleyHeader = () => {
  const { width, height } = useWindowSize();
  const { logo, logoIncludesName, bannerBG } = useContentCtx();

  const bgUrl = urlFor(bannerBG).width(800).url();
  console.log("bgImage", bgUrl);
  return (
    <StyledHeader bgUrl={bgUrl}>
      {logo && logoIncludesName ? (
        <Logo width={Math.floor(width * 0.6)} />
      ) : (
        <HeaderNameDisplay />
      )}
    </StyledHeader>
  );
};

export default BleyHeader;
