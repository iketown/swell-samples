import React from "react";
import getImageUrl from "@utils/getImageUrl";
import styled from "styled-components";
import { bleyEvansColors } from "@utils/themes/bley/BleyColors";
import { useTransform, useViewportScroll, motion } from "framer-motion";

const StyledBannerImage = styled.div<{
  imageUrl: string;
  height: number;
}>`
  background-image: url(${(p) => p.imageUrl});
  background-size: cover;
  background-position: center;

  background-repeat: no-repeat;
  background-color: ${bleyEvansColors.lightTan};
  height: ${(p) => p.height * 1.5}px;
  width: 100vw;
  // border: 2px solid pink;
  margin-top: ${(p) => p.height * -0.25}px;
`;
const BannerContainer = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
  overflow-y: hidden;
  overflow-x: hidden;
  width: 100vw;
`;
const BannerImage: React.FC<{
  image?: { _type: "image"; asset };
  height?: number;
}> = ({ image, height = 200 }) => {
  const url = getImageUrl(image).height(600).url();
  const { scrollY } = useViewportScroll();
  const yInputRange = [0, 400];
  const yOutputRange = [0, 60];
  const y = useTransform(scrollY, yInputRange, yOutputRange);
  if (!image) return null;
  console.log({ y, scrollY });
  return (
    <BannerContainer height={height}>
      <motion.div
        initial={{ y: 0 }}
        style={{
          y,
        }}
      >
        <StyledBannerImage height={height} imageUrl={url}></StyledBannerImage>
      </motion.div>
    </BannerContainer>
  );
};

export default BannerImage;
