import { useContentCtx } from "@context/ContentContext";
import { useTemplate } from "@context/TemplateContext";
import { bleyEvansColors } from "@utils/themes";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { useMedia } from "react-media";

import BleyButton1 from "../../buttons/BleyButton1";
import BleyButton2 from "../../buttons/BleyButton2";
import BleyDropdown from "../../buttons/BleyDropdown";
import {
  Segment,
  Container,
  Grid,
  GridRow,
  Icon,
  Modal,
  Button,
  List,
} from "semantic-ui-react";
import JView from "@utils/JView";

const StyledButtonRow = styled.div`
  width: 100vw;
  opacity: 0.95;
  background: ${bleyEvansColors.darkNavyBG};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 2;
  .navButtons {
    display: flex;
  }
`;

const StyledModalNav = styled(Modal.Content)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonRow: React.FC<{
  fixedButton?: JSX.Element;
}> = ({}) => {
  const { templateSlug } = useTemplate();

  switch (templateSlug) {
    case "bleyEvans":
      return <BleyEvansButtonRow />;
    default:
      return <StyledButtonRow>Button row</StyledButtonRow>;
  }
};

export default ButtonRow;

const BleyEvansButtonRow: React.FC = () => {
  const {
    slug: { current: siteSlug },
  } = useContentCtx();
  const [modalOpen, setModalOpen] = useState(true);
  const router = useRouter();
  const GLOBAL_MEDIA_QUERIES = {
    small: "(max-width: 699px)",
    medium: "(min-width: 700px) and (max-width: 1007px)",
    large: "(min-width: 1007px)",
  };
  const { small, medium, large } = useMedia({
    queries: GLOBAL_MEDIA_QUERIES,
  });
  const { clientNumber, mainMenu } = useContentCtx();
  const homeAs = `/mockups/${siteSlug}`;
  return (
    <>
      {/* <JView src={mainMenu} name="mainMenu" collapsed /> */}
      <StyledButtonRow>
        {(medium || large) && (
          <>
            <div className="navButtons">
              {mainMenu.map(
                (
                  { page, title, subLinks, buttonText, slug: pageSlug },
                  index
                ) => {
                  const displayText = title || page?.title || "ERROR";
                  return (
                    <div key={index}>
                      {subLinks ? (
                        <BleyDropdown {...{ subLinks, buttonText }} />
                      ) : (
                        <BleyButton1
                          key={displayText}
                          text={displayText}
                          href="/mockups/[slug]/[pageSlug]"
                          as={`/mockups/${siteSlug}/${pageSlug}`}
                          selected={false}
                        />
                      )}
                    </div>
                  );
                }
              )}
            </div>
            <BleyButton2
              href={`tel://${clientNumber}`}
              text={clientNumber || "123-456-7890"}
            ></BleyButton2>
          </>
        )}
        {small && <div style={{ color: "white" }}>MOBILE MENU</div>}
      </StyledButtonRow>
    </>
  );
};
