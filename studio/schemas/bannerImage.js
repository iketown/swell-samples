export default {
  type: "document",
  name: "bannerImage",
  title: "Banner Image",
  description: "horizontal image nondescript",
  fields: [
    {
      type: "string",
      name: "alt",
      title: "Alt Text",
      description: "alt text for this photo",
    },
    {
      type: "image",
      title: "Image",
      name: "image",
      options: {
        hotspot: true,
        metadata: ["palette"],
      },
    },
  ],
};
