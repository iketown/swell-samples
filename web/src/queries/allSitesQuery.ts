import groq from "groq";

export default groq`
 *[_type == 'dummyWebsite'] {
    slug,
  clientName,
  "template": templateName->slug,
  _updatedAt
  }
`;
