import { styled } from "styled-components";

import { TextStyle } from "@/shared/styles/MyTypography/textStyles";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText";

import { useIntl } from "react-intl";
import { MyColors } from "@/shared/styles";
import { FiLink2 } from "react-icons/fi";
import EcosystemTile from "./components/ecosystemTile";
import { desktopMinWidth } from "@/shared/constants/adaptive";

const FirstBlockContainer = styled.div`
  display: flex;
  padding: 2.5em;
  padding-bottom: 4em;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
  margin-top: 2em;

  position: relative;
  overflow: hidden;
  background-color: ${MyColors.dark2};
`;

const EcosystemTiles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const EcosystemBlockHeader = styled.div`
  padding: 1em 1em;
  @media (min-width: ${desktopMinWidth}px) {
    padding: 2em 10em;
  }
`;

export default function EcosystemBlock() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const intl = useIntl();

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(SplitText);

      gsap.set(headingRef.current, { opacity: 1 });
      const headingSplit = new SplitText(headingRef.current, {
        type: "words,chars",
        wordsClass: "word",
        charsClass: "char",
      });

      gsap.from(headingSplit.chars, {
        y: 20,
        autoAlpha: 0,
        stagger: 0.02,
      });

      gsap.set(paragraphRef.current, { opacity: 0.5 });
      const paragraphSplit = new SplitText(paragraphRef.current, {
        type: "words",
        wordsClass: "word",
      });

      gsap.from(paragraphSplit.words, {
        y: 20,
        autoAlpha: 0,
        stagger: 0.05,
        delay: 0.5,
      });
    }
  }, []);

  return (
    <FirstBlockContainer>
      <EcosystemBlockHeader>
        <TextStyle.ProductHeader
          style={{
            fontSize: "1.2em",
            fontWeight: 450,
            textAlign: "center",
            opacity: 1,
          }}
          ref={paragraphRef}
        >
          {intl.formatMessage({ id: "ecosystemTitle" })}
        </TextStyle.ProductHeader>
      </EcosystemBlockHeader>
      <EcosystemTiles>
        <EcosystemTile
          name={intl.formatMessage({ id: "ecosystemService1" })}
          link={"/analytics"}
        ></EcosystemTile>
        <EcosystemTile
          name={intl.formatMessage({ id: "ecosystemService2" })}
          link={"/marketplace"}
        ></EcosystemTile>
        <EcosystemTile
          name={intl.formatMessage({ id: "ecosystemService3" })}
          link={"/support"}
        ></EcosystemTile>
      </EcosystemTiles>
    </FirstBlockContainer>
  );
}
