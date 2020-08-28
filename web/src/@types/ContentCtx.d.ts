interface ContentCtx {
  bannerBG;
  bannerImageMain;
  bannerImageMainMeta?: {
    metadata: {
      palette: {
        dominant: {
          background: string;
          foreground: string;
        };
      };
    };
  };
  clientName: string;
  clientNumber: string;
  logo;
  logoIncludesName: boolean;
  mainMenu: {
    // if its a single link to a page
    page?: PageLink;
    title?: string;
    slug?: string;
    // if its a menu
    subLinks?: { page: PageLink }[];
    buttonText?: string;
  }[];
  mainTitle: string;

  slug: { current: string };
  specialties: Specialty[];
  subTitle: string;
  bannerPhoto;
  templateName;
}

interface PageLink {
  slug: { current: string };
  title: string;
}

interface Specialty {
  specialtyName: string;
  specialtySlug: { current: string };
  templateName: { current: string };
}

interface PageData {
  bannerImage: {
    image: {
      _type: "image";
      asset;
      crop;
      hotspot;
    };
  };
  slug: string;
  pageSectionGroups: {
    header?: string;
    sections?: {
      _key: string;
      _type: string;
      body;
      gridValue: number;
      heading: string;
      title: string;
    }[];
  }[];
}
