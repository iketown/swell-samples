import React from "react";
import { Dropdown, Menu, Button } from "semantic-ui-react";
import styled from "styled-components";
import { bleyEvans, bleyEvansColors } from "@utils/themes/bley/BleyColors";
import Link from "next/link";
import { useContentCtx } from "@context/ContentContext";
const { button1 } = bleyEvans;
const StyledButton = styled(Button)`
  &&& {
    border: none;
    border-radius: 0;
    transition: all 0.5s;
    padding: 1.5rem 1rem;
    border-right: 1px solid #ffffff33;
    font-family: "Old Standard TT", serif;
    font-weight: 400;
    text-transform: uppercase;
    background: ${(p) =>
      p.selected ? button1.selectedBackground : button1.background};
    color: ${(p) => (p.selected ? button1.selectedText : button1.text)};
    &:hover {
      background: ${button1.selectedBackground};
      color: ${button1.background};
    }
    .dropdown.icon {
      display: none;
    }
  }
`;
const StyledDDMenu = styled(Dropdown.Menu)`
  background: ${bleyEvansColors.mediumNavyBG};
`;
const StyledDDItem = styled(Dropdown.Item)`
  &&& {
    background: ${bleyEvansColors.mediumNavyBG};
    color: ${button1.text} !important;
    &:hover {
      background: ${button1.selectedBackground};
      color: ${button1.background} !important;
    }
  }
`;

const BleyDropdown: React.FC<{
  subLinks: {
    page: PageLink;
  }[];
  buttonText: string;
}> = ({ subLinks, buttonText }) => {
  const {
    slug: { current: siteSlug },
  } = useContentCtx();
  return (
    <StyledButton>
      <Dropdown text="Specialties">
        <StyledDDMenu>
          {subLinks.map(({ page }) => {
            const {
              title,
              slug: { current: pageSlug },
            } = page;
            return (
              <Link
                href="/mockups/[slug]/[pageSlug]"
                as={`/mockups/${siteSlug}/${pageSlug}`}
              >
                <StyledDDItem key={pageSlug}>
                  <span className="title">{title}</span>
                </StyledDDItem>
              </Link>
            );
          })}
        </StyledDDMenu>
      </Dropdown>
    </StyledButton>
  );
};

export default BleyDropdown;
