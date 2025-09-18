import { desktopMinWidth } from "@/shared/constants/adaptive";
import { MyColors } from "@/shared/styles";
import { TextStyle } from "@/shared/styles/MyTypography/textStyles";
import { styled } from "styled-components";

const TimelinePointStyle = styled.div`
  display: flex;
  z-index: 2;
  gap: 0.8em;
  margin-left: -0.55em;
  justify-content: flex-start;
  align-items: flex-start;
`;

const TimelinePointDot = styled.div`
  min-width: 1em;
  min-height: 1em;
  background-color: ${MyColors.green};
  border-radius: 90px;
`;

const TimelinePointInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7em;

  @media (min-width: ${desktopMinWidth}px) {
    max-width: 50%;
  }
`;

export const TimeLinePoint = ({
  header,
  text,
}: {
  header: string;
  text: string;
}) => {
  return (
    <TimelinePointStyle>
      <TimelinePointDot></TimelinePointDot>
      <TimelinePointInfo>
        <TextStyle.ProductHeader>{header}</TextStyle.ProductHeader>
        <TextStyle.ProductText>{text}</TextStyle.ProductText>
      </TimelinePointInfo>
    </TimelinePointStyle>
  );
};
