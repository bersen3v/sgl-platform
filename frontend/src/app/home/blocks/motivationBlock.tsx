import { styled } from "styled-components";
import { TextStyle } from "@/shared/styles/MyTypography/textStyles";
import { MyColors } from "@/shared/styles";
import { desktopMinWidth } from "@/shared/constants/adaptive";
import VideoPreview from "../components/videoPreview";
import { useIntl } from "react-intl";

const BlockContainer = styled.div`
  position: relative;
  z-index: 10; /* выше, чтобы быть над Spline */
  display: flex;
  padding: 2em;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  gap: 2em;
  background-color: ${MyColors.dark2};

  /* Для мобильных устройств - шире */
  padding-left: 2em;

  /* Для десктопов - уже */
  @media (min-width: ${desktopMinWidth}px) {
    padding-left: 4em;
    flex-direction: row;
  }

  margin-bottom: 2em;
  padding-bottom: 4em;

  /* height: 100vh; */
  /* width: 100vw; */
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1em;
`;

const AnimationContainer = styled.div`
  flex: 1;
`;

export default function MotivationBlock() {
  const intl = useIntl();
  return (
    <BlockContainer>
      <TextContainer>
        <TextStyle.ProductHeader>
          {intl.formatMessage({ id: "block2first" })}
        </TextStyle.ProductHeader>

        <TextStyle.Header2Left>
          {intl.formatMessage({ id: "block2second" })}
        </TextStyle.Header2Left>

        <TextStyle.Header2Left>
          {intl.formatMessage({ id: "block2third" })}
        </TextStyle.Header2Left>
      </TextContainer>

      <AnimationContainer>
        <VideoPreview></VideoPreview>
      </AnimationContainer>
    </BlockContainer>
  );
}
