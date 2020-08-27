import { Button } from "semantic-ui-react";
import styled, { CSSProperties } from "styled-components";
import { useTemplate } from "@context/TemplateContext";
import { bleyEvans } from "@utils/themes";

const StyledButton = styled(Button)<{
  styles: ButtonI;
  selected?: boolean;
}>`
  &&& {
    background-color: ${(p) =>
      p.selected ? p.styles.selectedBackground : p.styles.background};
    color: ${(p) => (p.selected ? p.styles.selectedText : p.styles.text)};
    padding: ${(p) => p.styles.padding};
    font-family: "Old Standard TT", serif;
    font-weight: 400;
    text-transform: uppercase;
    border-radius: 0 !important;
  }
`;

const ThemedButton: React.FC<{
  selected?: boolean;
  name?: "button1" | "button2" | "button3";
}> = ({ children, selected, name, ...passThruProps }) => {
  const { templateSlug } = useTemplate();
  switch (templateSlug) {
    case "bleyEvans":
      const styles = bleyEvans[name || "button1"];
      return <StyledButton {...{ selected, styles }}>{children}</StyledButton>;
    default:
      return <Button {...passThruProps}>{children}</Button>;
  }
};

export default ThemedButton;
