import BlockContent from "@sanity/block-content-to-react";
import { bleyEvansColors } from "@utils/themes/bley/BleyColors";
import React from "react";
import styled from "styled-components";

import client from "../../../../client";

const StyledGeneralSection = styled.div`
  .heading {
    font-family: "Montserrat", sans-serif;
    color: ${bleyEvansColors.darkNavyBG};
    font-size: 2rem;
  }
  p {
    font-family: "Old Standard TT", serif;
    color: #000000bb;
    font-size: 20px;
  }
`;
const GeneralSection = ({ section }) => {
  const { heading, body, gridValue } = section;
  return (
    <StyledGeneralSection>
      {heading && <div className="heading">{heading}</div>}
      <BlockContent
        className="content"
        blocks={body}
        imageOptions={{ w: 600, h: 240, fit: "max" }}
        {...client.config()}
      />
      {/* <JView src={section} name="gen section" collapsed /> */}
    </StyledGeneralSection>
  );
};

export default GeneralSection;
