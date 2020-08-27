export const bleyEvansColors = {
  // bley evans colors
  darkNavyBG: "#060E20",
  mediumNavyBG: "#1e2a40",
  burgandyBG: "#552125",
  burgandyText: "##652c30",
  lightTan: "#e5e4e0",
  darkTan: "#afa696",
  tanText: "#333333",
  white: "#FFF",
  black: "#000",
};

const bec = bleyEvansColors;

export const bleyEvans: ThemeI = {
  button1: {
    background: bec.darkNavyBG, // dark blue
    text: bec.white,
    selectedBackground: bec.darkTan,
    selectedText: bec.black,
    padding: `1.5rem 1rem`,
  },
  button2: {
    background: bec.burgandyBG,
    text: bec.lightTan,
    selectedBackground: bec.darkTan,
    selectedText: bec.black,
    padding: `1.5rem 1rem`,
  },
};
