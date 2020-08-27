export default {
  name: "pageMockup",
  title: "Page Mockup",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "this page title",
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
      description: `this will be the main home page link. like "motorcycle-accidents"`,
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "sections",
      type: "array",
      of: [
        // these could be different types of secions, but now there is only one.
        {
          type: "pageSectionGeneral",
          name: "General Section",
          title: "Custom General Section",
        },
        {
          type: "pageSectionTestimonial",
          name: "Testimonial Section",
          title: "Custom Testimonial Section",
        },
        {
          type: "pageSectionSpecial",
          name: "Special Section",
          title: "Special Section",
        },
        {
          name: "prefabGeneral",
          title: "Pre Fab Page Section",
          type: "reference",
          to: { type: "pageSectionGeneral" },
        },
        {
          name: "prefabTestimonial",
          title: "Pre Fab Testimonial",
          type: "reference",
          to: { type: "pageSectionTestimonial" },
        },
        {
          name: "prefabSpecial",
          title: "Pre Fab Special",
          type: "reference",
          to: { type: "pageSectionSpecial" },
        },
      ],
    },
  ],
};
