export default {
  name: "specialty",
  type: "document",
  title: "Specialty",
  fields: [
    {
      name: "specialtyName",
      title: "Specialty Name",
      description: `i.e. "Car Accidents" or "Family Law" `,
      type: "string",
    },
    {
      name: "specialtySlug",
      title: "Slug",
      type: "slug",
      options: {
        source: "specialtyName",
        maxLength: 96,
      },
    },
    {
      name: "bannerImage",
      title: "Banner Image",
      description: "Main Image for detail page",
      type: "bannerImage",
    },
    {
      name: "shortDescription",
      title: "Short Description",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    },
    {
      name: "longDescription",
      title: "Long Description",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    },
  ],
};
