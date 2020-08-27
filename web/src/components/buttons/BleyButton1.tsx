import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { bleyEvans } from "@utils/themes/bley/BleyColors";
import { Button } from "semantic-ui-react";
const { button1 } = bleyEvans;
const StyledButton = styled(Button)<{ selected?: boolean }>`
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
  }
`;
const BleyButton1: React.FC<{
  selected: boolean;
  href: string;
  as: string;
  text: string;
}> = ({ selected, href, as, text }) => {
  return (
    <Link {...{ href, as }}>
      <StyledButton {...{ selected }}>{text}</StyledButton>
    </Link>
  );
};

export default BleyButton1;
