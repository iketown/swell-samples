export default {
  type: "document",
  name: "dummyWebsite",
  title: "Website - Mockup",
  description: "Basic website for promo",
  fields: [
    {
      name: "mainTitle",
      title: "Main Title",
      type: "string",
      description: "probably the name of the firm",
    },
    {
      name: "subTitle",
      title: "Sub Title",
      type: "string",
      description: `"attorneys at law" or "minnesota injury lawyers" `,
    },
    {
      name: "mainQuote",
      title: "Main Quote",
      type: "string",
      description: '"I Help Injury Victims get the money they need or wtf',
    },
    {
      name: "logo",
      type: "image",
      title: "Logo",
      description: "must have transparent bg",
    },
    {
      name: "logoIncludesName",
      type: "boolean",
      title: "Logo Includes Name",
      description:
        "is the name of the firm included?  if so you can skip Main Title and Subtitle",
    },
    {
      name: "slug",
      title: "slug",
      type: "slug",
      options: {
        source: "clientName",
        maxLength: 96,
      },
    },
    {
      name: "clientNumber",
      title: "Client Phone Number",
      type: "string",
    },
    {
      name: "specialties",
      title: "Specialties",
      type: "array",
      of: [
        {
          type: "reference",
          title: "specialty",
          to: { type: "specialty" },
        },
        // { type: "specialty", title: "Custom Specialty" },
      ],
    },
    {
      name: "bannerImageMain",
      title: "Main Banner Image",
      description:
        "Banner image under the header - hopefully a shot of the lawyer, or city, or something custom.",
      type: "bannerImage",
    },
    {
      name: "mainStaffImage",
      title: "Main People Photo",
      description: "photo of lawyer(s)",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bannerImageBG",
      title: "Banner Image Background",
      description: "This will be low-contrast background to the header text",
      type: "reference",
      to: { type: "bannerImage" },
    },
    {
      name: "templateName",
      title: "Template",
      type: "reference",
      to: { type: "template" },
    },
    {
      name: "mainMenu",
      title: "Main Menu",
      type: "array",
      of: [{ type: "mainLink" }, { type: "mainLinkMenu" }],
    },
  ],
};
