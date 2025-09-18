import { styled } from "styled-components";
import { TextStyle } from "@/shared/styles/MyTypography/textStyles";

import { MyColors } from "@/shared/styles";
import { scrollToSection } from "@/shared/tools/scrollToSection";
import GradientBubbles from "@/app/home/components/bubbles";

const FirstBlockContainer = styled.div`
  display: flex;
  padding: 5em 3em;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
  /* height: 60vh; */

  position: relative;
  overflow: hidden;
  /* box-shadow: 0px 30px 100px ${MyColors.green}20; */
  border-radius: 1em;
  border: 0.1em solid ${MyColors.green}20;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2em;
`;

export default function MissionBox({
  header,
  text,
}: {
  header: string;
  text: string;
}) {
  return (
    <>
      <FirstBlockContainer>
        <GradientBubbles></GradientBubbles>
        <ContentWrapper>
          <TextStyle.Header>{header}</TextStyle.Header>
          <TextStyle.Header2>{text}</TextStyle.Header2>
        </ContentWrapper>
      </FirstBlockContainer>
    </>
  );
}
