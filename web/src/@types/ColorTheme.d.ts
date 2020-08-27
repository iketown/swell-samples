interface ColorTheme {
  _type: "colorTheme";
  background?: ColorDef;
  background2?: ColorDef;
  foreground?: ColorDef;
  foreground2?: ColorDef;
  mainText?: ColorDef;
  mainText2?: ColorDef;
  title?: string;
}

interface ColorDef {
  _type: "color";
  hex: string;
  rgb: {
    a: number;
    b: number;
    g: number;
    r: number;
  };
}

interface ThemeI {
  button1: ButtonI;
  button2: ButtonI;
}

interface ButtonI {
  background: string;
  text: string;
  selectedBackground: string;
  selectedText: string;
  padding: string;
}

interface ButtonInfo {
  text: string;
  href: string;
  as: string;
}
