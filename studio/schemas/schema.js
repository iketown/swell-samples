// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./blockContent";
import category from "./category";
import post from "./post";
import author from "./author";
import specialty from "./specialty";
import richText from "./richText";
import colorTheme from "./colorTheme";
import website from "./website";
import bannerImage from "./bannerImage";
import template from "./template";
import pageMockup from "./pageMockup";
import {
  pageSectionGeneral,
  pageSectionTestimonial,
  pageSectionSpecial,
} from "./pageSection";
import pageSectionGroup from "./pageSectionGroup";
import mainLink from "./mainLink";
import mainLinkMenu from "./mainLinkMenu";
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    website,
    pageMockup,
    bannerImage,
    blockContent,
    specialty,
    richText,
    template,
    pageSectionGeneral,
    pageSectionTestimonial,
    pageSectionSpecial,
    pageSectionGroup,
    mainLink,
    mainLinkMenu,
  ]),
});
