import React from "react";
import styled from "styled-components";
import JView from "@utils/JView";
import { bleyEvansColors } from "../../../utils/themes/bley/BleyColors";
const StyledSpecial = styled.div`
  text-align: center;
  font-family: "Old Standard TT", serif;
  letter-spacing: 1px;
  color: ${bleyEvansColors.burgandyBG};
`;
const Divider = styled.div`
  /* border: 1px solid blue; */
  width: 100%;
  padding: 1rem;
  position: relative;
  ::before {
    position: absolute;
    content: " ";
    left: 25%;
    right: 25%;
    border-top: 3px solid ${bleyEvansColors.darkTan};
  }
`;
const GeneralSection = ({ section }) => {
  return (
    <StyledSpecial>
      <Divider />
      <div>{section.text}</div>
      {/* <JView src={section} /> */}
    </StyledSpecial>
  );
};

export default GeneralSection;
