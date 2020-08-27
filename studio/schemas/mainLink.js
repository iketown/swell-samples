export default {
  name: "mainLink",
  type: "document",
  title: "Main Link",
  description: "Button in the Main Nav bar",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "what it says on the button",
    },

    {
      name: "page",
      type: "reference",
      title: "Page",
      description: "where this link will send you",
      to: {
        type: "pageMockup",
      },
    },
  ],
};
