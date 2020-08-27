export const pageSectionGeneral = {
  name: "pageSectionGeneral",
  type: "document",
  title: "pageSection - general",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: `non-displaying.  just something to call this section`,
    },
    {
      name: "heading",
      type: "string",
      title: "Heading",
      description:
        "this is the heading for this section.  h3 or something - optional",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
};

export const pageSectionSpecial = {
  name: "pageSectionSpecial",
  type: "document",
  title: "pageSection - special",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: `non-displaying.  just something to call this section`,
    },
    {
      name: "text",
      type: "string",
      title: "Text",
      description: "one or two sentences",
    },
  ],
};

export const pageSectionTestimonial = {
  name: "pageSectionTestimonial",
  type: "document",
  title: "pageSection - testimonial",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Title",
      description: "large text header",
    },
    {
      name: "fromPerson",
      type: "string",
      title: "From",
      description: "name of person who gave this testimonial",
    },
    {
      name: "year",
      type: "string",
      title: "Year",
      description: "year of testimony",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
};
