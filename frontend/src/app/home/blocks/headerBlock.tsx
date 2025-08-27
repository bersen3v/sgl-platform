import { styled } from "styled-components";
import { AuroraEffect } from "../components/auroraEffect";
import { TextStyle } from "@/shared/styles/MyTypography/textStyles";
import CustomBlackButton from "../components/customBlackButton";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import GradientBubbles from "../components/bubbles";

const FirstBlockContainer = styled.div`
  display: flex;
  padding: 2.5em;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
  /* height: 60vh; */
  padding-top: 10em;
  min-height: 100vh;

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

export default function HeaderBlock() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

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

      // Анимация для параграфа с переносом целых слов
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
        <GradientBubbles></GradientBubbles>
        <ContentWrapper>
          <TextStyle.Header ref={headingRef}>
            организация и digital-сопровождение киберспортивных турниров
          </TextStyle.Header>
          <TextStyle.Header2 ref={paragraphRef}>
            продаём права на киберспортивные события и обеспечиваем полную
            поддержку трансляций
          </TextStyle.Header2>
          <CustomBlackButton placeholder={"связаться"}></CustomBlackButton>
        </ContentWrapper>
      </FirstBlockContainer>
    </>
  );
}
