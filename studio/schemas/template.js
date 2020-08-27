export default {
  name: "template",
  title: "Template",
  type: "document",
  fields: [
    {
      title: "Template Name",
      name: "templateName",
      type: "string",
    },
    {
      title: "Preview Image",
      name: "previewImage",
      type: "image",
    },
    { title: "slug", type: "slug", name: "slug" },
  ],
};
