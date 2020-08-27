import React from "react";
import { useContentCtx } from "@context/ContentContext";
import { bleyEvansColors } from "@utils/themes/bley/BleyColors";

import styled from "styled-components";

const MainTitle = styled.div`
  font-family: "Old Standard TT", serif;
  text-transform: uppercase;
  font-size: 4rem;
  color: ${bleyEvansColors.darkNavyBG};
  line-height: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  span {
    margin-right: 10px;
    z-index: 2;
  }
`;
const FancyAnd = styled.div`
  font-family: "Playfair Display", serif;
  font-size: 5rem;
  width: 3rem;
  /* border: 1px solid orange; */
  color: ${bleyEvansColors.darkTan};
  transform: translateY(-15%);
  position: relative;
  z-index: 1;
  height: 30px;
  div {
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
`;
const SubTitle = styled.div`
  border-top: 2px solid ${bleyEvansColors.darkTan};
  margin-top: 1rem;
  font-family: Montserrat, sans-serif;
  text-transform: uppercase;
  /* font-weight: bold; */
  font-size: 28px;
  color: ${bleyEvansColors.darkTan};
  line-height: 1;
  letter-spacing: 5px;
  text-align: center;
  display: inline-block;
`;

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeaderNameDisplay = () => {
  const { logo, logoIncludesName, mainTitle, subTitle } = useContentCtx();
  return (
    <HeaderDiv>
      <MainTitle>
        {mainTitle.split(" ").map((word) =>
          word === "&" ? (
            <FancyAnd>
              <div>&</div>
            </FancyAnd>
          ) : (
            <span>{word}</span>
          )
        )}
      </MainTitle>
      <SubTitle>{subTitle}</SubTitle>
    </HeaderDiv>
  );
};

export default HeaderNameDisplay;
