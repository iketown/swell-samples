import React, { Fragment } from "react";
import styled from "styled-components";
import { useTemplate } from "@context/TemplateContext";
import { Button as SButton, Menu, Dropdown } from "semantic-ui-react";
import BleyButton1 from "../../buttons/BleyButton1";
import BleyButton2 from "../../buttons/BleyButton2";
import BleyDropdown from "../../buttons/BleyDropdown";
import { bleyEvans, bleyEvansColors } from "@utils/themes";
import Link from "next/link";
import { useContentCtx } from "@context/ContentContext";
import { useRouter } from "next/router";
const StyledButtonRow = styled.div`
  width: 100vw;
  opacity: 0.95;
  background: ${bleyEvansColors.darkNavyBG};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 2;
  .navButtons {
    display: flex;
  }
`;

const ButtonRow: React.FC<{
  buttons: ButtonInfo[];
  fixedButton?: JSX.Element;
}> = ({ buttons, fixedButton }) => {
  const { templateSlug } = useTemplate();
  switch (templateSlug) {
    case "bleyEvans":
      return <BleyEvansButtonRow {...{ buttons, fixedButton }} />;
    default:
      return <StyledButtonRow>Button row</StyledButtonRow>;
  }
};

export default ButtonRow;

const BleyEvansButtonRow: React.FC<{
  buttons: ButtonInfo[];
}> = ({ buttons }) => {
  const {
    slug: { current: siteSlug },
  } = useContentCtx();
  const router = useRouter();
  const { clientNumber, mainMenu } = useContentCtx();
  const homeAs = `/mockups/${siteSlug}`;
  return (
    <StyledButtonRow>
      <div className="navButtons">
        <BleyButton1
          href="/mockups/[slug]"
          as={homeAs}
          text="Home"
          selected={router.asPath === homeAs}
        />
        {mainMenu.map(({ page, subLinks, buttonText }, index) => {
          const displayText = buttonText || page?.title || "ERROR";
          const pageSlug = page?.slug.current;
          if (subLinks) {
            return <BleyDropdown {...{ subLinks, buttonText }} />;
          }
          return (
            <BleyButton1
              key={displayText}
              text={displayText}
              href="/mockups/[slug]/[pageSlug]"
              as={`/mockups/${siteSlug}/${pageSlug}`}
              selected={false}
            />
          );
        })}
      </div>
      <BleyButton2
        href={`tel://${clientNumber}`}
        text={clientNumber || "123-456-7890"}
      ></BleyButton2>
    </StyledButtonRow>
  );
};
