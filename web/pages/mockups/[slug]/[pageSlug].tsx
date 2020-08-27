import React from "react";
import { GetServerSideProps } from "next";
import pageQuery from "@queries/pageQuery";
import homeQuery from "@queries/homeQuery";
import JView from "@utils/JView";
import client from "../../../client";
import { ContentCtxProvider } from "@context/ContentContext";
import { TemplateProvider } from "@context/TemplateContext";
import BleyLayout from "@screens/BleyLayout";
import { Container, Grid } from "semantic-ui-react";

const SpecialtyPage = ({ pageProps, siteProps }) => {
  console.log("specialtypage props", { pageProps, siteProps });
  const { templateName, specialties = [], slug = {} } = siteProps;
  return (
    <ContentCtxProvider allProps={siteProps}>
      <TemplateProvider templateSlug={templateName?.slug}>
        <BleyLayout
          buttons={specialties.map((sp) => ({
            text: sp.specialtyName,
            href: `/mockups/[slug]/[specialtySlug]`,
            as: `/mockups/${slug.current}/${sp.specialtySlug?.current}`,
          }))}
        >
          <Container>
            <h1>{pageProps.title}</h1>
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

// *[_type=='dummyWebsite' && slug.current == 'bley-and-evans']{
//   "specialty": specialties[] -> [specialtySlug.current == $specialtySlug]
// }

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug, pageSlug } = context.params;
  console.log({ slug, pageSlug });
  const pageProps = await client.fetch(pageQuery, { pageSlug });
  const siteProps = await client.fetch(homeQuery, { slug });
  console.log("props in getSSP", { pageProps, siteProps });

  return { props: { pageProps, siteProps } };
};

export default SpecialtyPage;
