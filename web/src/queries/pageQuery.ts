import groq from "groq";

export const newPageQuery = groq`
  *[_type == 'dummyWebsite' && slug.current == $slug] {
   mainMenu[] {
     slug,
     title,
     page->,
     buttonText,
     subLinks[] {
       slug,
     	 page ->
   },
   }
}
`;
