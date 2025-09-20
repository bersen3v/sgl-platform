import { styled } from "styled-components";

import { TextStyle } from "@/shared/styles/MyTypography/textStyles";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText";

import { useIntl } from "react-intl";
import { scrollToSection } from "@/shared/tools/scrollToSection";

const FirstBlockContainer = styled.div`
  display: flex;

  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
  /* height: 60vh; */
  /* min-height: 100vh; */

  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2em;
`;

export default function ContactusHeader() {
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
    <>
      <FirstBlockContainer>
        <ContentWrapper>
          <TextStyle.Header2 ref={paragraphRef}>
            Оставьте свои данные и мы свяжемся с вами
          </TextStyle.Header2>
        </ContentWrapper>
      </FirstBlockContainer>
    </>
  );
}
