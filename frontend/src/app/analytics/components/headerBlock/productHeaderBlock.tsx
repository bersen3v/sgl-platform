import { MyBordersRadius, MyColors } from "@/shared/styles";
import { TextStyle } from "@/shared/styles/MyTypography/textStyles";
import { ReactNode, useEffect, useRef } from "react";
import { useIntl } from "react-intl";
import { styled } from "styled-components";
import { gsap } from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import { IoLink } from "react-icons/io5";
import LinkButton from "@/shared/widgets/linkButton/linkButton";
import { Item10 } from "@/app/home/components/3d/item10";
import { Canvas } from "@react-three/fiber";

const BlockContainer = styled.div`
  display: flex;
  padding: 2em;
  padding-top: 5em;
  padding-bottom: 5em;
  margin: 2em;
  margin-top: 6em;
  margin-bottom: 0em;
  border-radius: ${MyBordersRadius.r20}px;
  flex-direction: column;
  background-color: ${MyColors.dark2};
  justify-content: center;
  align-items: center;
`;

const InfoPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  justify-content: center;
  align-items: center;
`;

const CanvasContainer = styled.div`
  width: 10em;
  height: 10em;
  align-items: center;
`;

export default function ProductHeaderBlock({
  productName,
  productDescription,
  onClick,
  obj3d,
}: {
  productName: string;
  productDescription: string;
  onClick: () => void;
  obj3d: ReactNode;
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
    <BlockContainer>
      <CanvasContainer>
        <Canvas>{obj3d}</Canvas>
      </CanvasContainer>

      <InfoPart>
        <TextStyle.Header ref={headingRef}>{productName}</TextStyle.Header>
        <TextStyle.Header2 ref={paragraphRef}>
          {productDescription}
        </TextStyle.Header2>
        <LinkButton text="сайт продукта" onClick={onClick}></LinkButton>
      </InfoPart>
    </BlockContainer>
  );
}
