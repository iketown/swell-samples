import groq from "groq";

export default groq`
 *[_type == 'dummyWebsite'] {
    slug,
  mainTitle,
  "template": templateName->slug,
  _updatedAt
  }
`;
