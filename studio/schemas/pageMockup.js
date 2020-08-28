export default {
  name: "pageMockup",
  title: "Page Mockup",
  type: "document",
  fields: [
    {
      name: "pageTitle",
      type: "string",
      title: "Page Name",
      description: `title as shown on header`,
    },
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "title for records, not shown",
    },
    {
      name: "bannerImage",
      type: "bannerImage",
      title: "Page Banner Image",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: `XXX not this - - this will be the main home page link. like "motorcycle-accidents" or "home"`,
    },
    {
      name: "pageLink",
      type: "string",
      title: "Page Link",
      description: `this will be the displayed slug "home" or "car-accidents" etc.`,
    },
    {
      name: "pageSectionGroups",
      type: "array",
      of: [
        { type: "pageSectionGroup" },
        {
          type: "reference",
          title: "Prefab Page section group",
          to: { type: "pageSectionGroup" },
        },
      ],
    },
  ],
};
