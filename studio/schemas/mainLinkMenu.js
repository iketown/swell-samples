export default {
  name: "mainLinkMenu",
  type: "document",
  title: "Main Link Menu",
  description: `when button doesnt do anything itself, just opens a menu of other links - like "specialties"`,
  fields: [
    {
      name: "buttonText",
      type: "string",
      title: "Button Text",
      description: "text on the button, no link, just opens the menu",
    },
    {
      name: "subLinks",
      type: "array",
      of: [
        {
          type: "mainLink",
        },
      ],
    },
  ],
};
