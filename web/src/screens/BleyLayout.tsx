import React from "react";
import ButtonRow from "@components/sections/buttonRow/ButtonRow";
import Button from "@components/ui/ButtonXX";
import Button2 from "../components/buttons/BleyButton2";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import BleyHeader from "@components/sections/header/BleyHeader";
import { useContentCtx } from "@context/ContentContext";
const BleyLayout: React.FC<{
  buttons: ButtonInfo[];
}> = ({ buttons, children }) => {
  useScrollPosition(({ prevPos, currPos }) => {});

  return (
    <div>
      <BleyHeader />
      <ButtonRow {...{ buttons }} />
      {children}
    </div>
  );
};

export default BleyLayout;
