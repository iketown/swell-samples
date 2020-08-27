import color from "./color";

export default {
  name: "colorTheme",
  title: "Color Theme",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "name for this color theme",
    },
    {
      name: "background",
      title: "Background",
      description: "main bg",
      type: "color",
    },
    {
      name: "background2",
      title: "Background 2",
      type: "color",
      description: "slight contrast to bg1",
    },
    {
      name: "foreground",
      title: "Foreground",
      type: "color",
      description: "strong contrast to backgrounds",
    },
    {
      name: "foreground2",
      title: "Foreground 2",
      type: "color",
      description: "other strong contrast to backgrounds",
    },
    {
      name: "mainText",
      title: "Main Text",
      type: "color",
      description: "main text color - contrasts with background",
    },
    {
      name: "mainText2",
      title: "Main Text",
      type: "color",
      description: "secondary text color",
    },
  ],
};
