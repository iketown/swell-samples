import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { bleyEvans } from "@utils/themes/bley/BleyColors";
import { Button } from "semantic-ui-react";
const { button2 } = bleyEvans;

const StyledButton = styled(Button)<{ selected?: boolean }>`
  &&& {
    border: none;
    border-radius: 0 !important;
    transition: all 0.5s;
    padding: 1.3rem 2rem;
    font-family: Montserrat, sans-serif;
    font-size: 20px !important;
    font-weight: 400;
    object-fit: cover;
    text-transform: uppercase;
    white-space: nowrap;
    background: ${(p) =>
      p.selected ? button2.selectedBackground : button2.background};
    color: ${(p) => (p.selected ? button2.selectedText : button2.text)};
    &:hover {
      background: ${button2.selectedBackground};
      color: ${button2.background};
    }
  }
`;

const BleyButton2: React.FC<{
  href: string;
  selected?: boolean;
  as?: string;
  text: string;
}> = ({ selected, href, as, text }) => {
  console.log({ selected, href, as, text });
  return (
    <Link {...{ href, as }}>
      <StyledButton {...{ selected }}>{text}</StyledButton>
    </Link>
  );
};

export default BleyButton2;
