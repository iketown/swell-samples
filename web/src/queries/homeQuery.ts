import groq from "groq";

export default groq`*[_type == 'dummyWebsite' && slug.current == $slug][0] {
  "bannerBG": bannerImageBG->image,
  bannerImageMain,
  "bannerImageMainMeta": bannerImageMain.image.asset->{
    url,
    metadata {
      palette {
        dominant {
          background,
          foreground
        }
      }
    }
  },
  clientName,
  clientNumber,
  logo,
  logoIncludesName,
  mainMenu[] {
    slug,
    title,
     page->{slug, title},
     buttonText,
      subLinks[]{
        page->{slug,title}
      }
   },
  mainTitle,
  slug,
  "specialties": specialties[]->,
  subTitle,
  templateName-> {slug},
  }
  `;
