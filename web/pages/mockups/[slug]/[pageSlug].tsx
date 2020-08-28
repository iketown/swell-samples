import React from "react";
import { GetServerSideProps } from "next";
import pageQuery, { newPageQuery } from "@queries/pageQuery";
import homeQuery from "@queries/homeQuery";
import JView from "@utils/JView";
import client from "../../../client";
import { ContentCtxProvider } from "@context/ContentContext";
import { TemplateProvider } from "@context/TemplateContext";
import BleyLayout from "@screens/BleyLayout";
import { bleyEvansColors } from "@utils/themes/bley/BleyColors";
import { Container, Grid } from "semantic-ui-react";
import BannerImage from "@components/sections/bannerImage/BannerImage.tsx";
import SectionSwitcher from "@components/sections/content/SectionSwitcher";
const PageMockup: React.FC<{ pageProps: PageData; siteProps: ContentCtx }> = ({
  pageProps,
  siteProps,
}) => {
  console.log("specialtypage props", { pageProps, siteProps });
  const { templateName, specialties = [], slug = {} } = siteProps;
  const { pageSectionGroups } = pageProps;
  return (
    <ContentCtxProvider allProps={siteProps}>
      <TemplateProvider templateSlug={templateName?.slug}>
        <BleyLayout>
          <BannerImage height={250} image={pageProps.bannerImage?.image} />
          <div style={{ padding: "1rem" }} />

          <Container>
            <Grid container stackable>
              {pageProps.pageSectionGroups?.map(({ header, sections }) => {
                return (
                  <>
                    {header && (
                      <Grid.Column width={16}>
                        <h1
                          style={{
                            color: bleyEvansColors.darkNavyBG,
                            fontFamily: "Montserrat",
                            fontSize: "40px",
                            fontWeight: 500,
                            lineHeight: 1,
                          }}
                        >
                          {header}
                        </h1>
                      </Grid.Column>
                    )}
                    {sections?.map((section) => {
                      const { gridValue } = section;
                      return (
                        <Grid.Column key={section._key} width={8}>
                          <SectionSwitcher {...{ section }} />
                        </Grid.Column>
                      );
                    })}
                  </>
                );
              })}
            </Grid>
            <div>
              <JView src={pageProps} collapsed name="pageProps" />
            </div>
            {Array.from({ length: 3 }, (x, i) => (
              <div key={i} style={{ padding: "10rem" }}>
                space
              </div>
            ))}
          </Container>
        </BleyLayout>
      </TemplateProvider>
    </ContentCtxProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug, pageSlug } = context.params;
  const siteProps = await client.fetch(homeQuery, { slug });
  const newPageProps = await client.fetch(newPageQuery, { slug });
  let foundPage;
  newPageProps[0] &&
    newPageProps[0].mainMenu?.forEach((menuItem) => {
      if (menuItem.slug === pageSlug) {
        foundPage = menuItem;
        return;
      }
      if (menuItem.subLinks) {
        menuItem.subLinks.forEach((subLink) => {
          if (subLink.slug === pageSlug) {
            foundPage = subLink;
          }
        });
      }
    });
  return { props: { pageProps: foundPage.page, siteProps } };
};

export default PageMockup;
