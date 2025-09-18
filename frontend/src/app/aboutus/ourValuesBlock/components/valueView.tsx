import { styled } from "styled-components";
import { TextStyle } from "@/shared/styles/MyTypography/textStyles";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText";

import { useIntl } from "react-intl";
import { scrollToSection } from "@/shared/tools/scrollToSection";

const ContentWrapper = styled.div`
  /* position: relative; */
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2em;
`;

export default function ValueView({
  header,
  text,
}: {
  header: string;
  text: string;
}) {
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
    <ContentWrapper>
      <TextStyle.Header ref={headingRef}>{header}</TextStyle.Header>
      <TextStyle.Header2 ref={paragraphRef}>{text}</TextStyle.Header2>
    </ContentWrapper>
  );
}
