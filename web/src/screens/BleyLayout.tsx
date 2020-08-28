import React from "react";
import ButtonRow from "@components/sections/buttonRow/ButtonRow";
import Button from "@components/ui/ButtonXX";
import Button2 from "../components/buttons/BleyButton2";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import BleyHeader from "@components/sections/header/BleyHeader";
import { useContentCtx } from "@context/ContentContext";
import styled from "styled-components";
import { bleyEvansColors } from "@utils/themes/bley/BleyColors";
//
//
const StyledBG = styled.main`
  background-color: ${bleyEvansColors.lightTan};
`;
const BleyLayout: React.FC = ({ children }) => {
  useScrollPosition(({ prevPos, currPos }) => {});

  return (
    <div>
      <BleyHeader />
      <ButtonRow />
      <StyledBG>{children}</StyledBG>
    </div>
  );
};

export default BleyLayout;
