import React from "react";
import styled from "styled-components";
import General from "./GeneralSection";
import Special from "./SpecialSection";
const SectionSwitcher = ({ section }) => {
  const getSection = () => {
    switch (section._type) {
      case "pageSectionGeneral": {
        return <General {...{ section }} />;
      }
      case "pageSectionSpecial": {
        return <Special {...{ section }} />;
      }
      default:
        return <div>missing _id</div>;
    }
  };
  return <div>{getSection()}</div>;
};

export default SectionSwitcher;
