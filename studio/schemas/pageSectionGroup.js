export default {
  name: "pageSectionGroup",
  title: "Page Section Group",
  type: "document",
  description: "Collection of page sections",
  fields: [
    { title: "Title", name: "title", type: "string" },
    {
      name: "header",
      title: "Header",
      type: "string",
      description: "text describing this section",
    },
    {
      name: "sections",
      type: "array",
      of: [
        // these could be different types of secions, but now there is only one.
        {
          type: "pageSectionGeneral",
          name: "pageSectionGeneral",
          title: "Custom General Section",
        },
        {
          type: "pageSectionTestimonial",
          name: "pageSectionTestimonial",
          title: "Custom Testimonial Section",
        },
        {
          type: "pageSectionSpecial",
          name: "pageSectionSpecial",
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
