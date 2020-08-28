import groq from "groq";

export default groq`
*[_type == 'dummyWebsite' && slug.current == $slug] {
   mainMenu[] {
     slug,
     title,
     page,
     buttonText,
     subLinks,
   }
}
`;
