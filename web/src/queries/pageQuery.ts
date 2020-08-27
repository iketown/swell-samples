import groq from "groq";

export default groq`
  *[_type == 'pageMockup' && slug.current == $pageSlug][0] {
  _createdAt,
  _updatedAt,
  bannerImage,
  sections,
  slug,
  title
}
`;
