import React from "react";
import getImageUrl from "@utils/getImageUrl";
import styled from "styled-components";
import { bleyEvansColors } from "@utils/themes/bley/BleyColors";

const StyledBannerImage = styled.div<{
  imageUrl: string;
  height: string;
}>`
  background-image: url(${(p) => p.imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${bleyEvansColors.lightTan};
  height: ${(p) => p.height};
`;
const BannerImage: React.FC<{
  image: { _type: "image"; asset };
  height?: string;
}> = ({ image, height = "20rem" }) => {
  const url = getImageUrl(image).maxWidth(1000).url();
  if (!image) return null;
  return <StyledBannerImage height={height} imageUrl={url}></StyledBannerImage>;
};

export default BannerImage;
