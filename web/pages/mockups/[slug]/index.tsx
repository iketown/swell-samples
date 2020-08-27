import React from "react";
import groq from "groq";
import { GetServerSideProps } from "next";
import client from "../../../client";
import styled from "styled-components";
import { TemplateProvider } from "@context/TemplateContext";
import dynamic from "next/dynamic";
import ButtonRow from "@components/sections/buttonRow/ButtonRow";
import BleyLayout from "@screens/BleyLayout";
import { ContentCtxProvider } from "@context/ContentContext";
import homeQuery from "@queries/homeQuery";
import JView from "@utils/JView";
import BannerImage from "@components/sections/bannerImage/BannerImage";
const JsonView = dynamic(() => import("react-json-view"), { ssr: false });

const SiteMockup = ({ siteProps }) => {
  console.log("props", siteProps);
  console.log("sitemockup props", siteProps);
  const {
    templateName,
    specialties = [],
    slug = {},
    bannerImageMain = {},
  } = siteProps;
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
          <BannerImage image={bannerImageMain.image} />
          <div>
            <JView src={siteProps} collapsed name="siteProps" />
          </div>
          {Array.from({ length: 3 }, (x, i) => (
            <div key={i} style={{ padding: "10rem" }}>
              space
            </div>
          ))}
        </BleyLayout>
      </TemplateProvider>
    </ContentCtxProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug = "" } = context.params;
  const siteProps = await client.fetch(homeQuery, { slug });
  return { props: { siteProps } };
};

export default SiteMockup;
