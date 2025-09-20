import GradientBubbles from "@/app/home/components/bubbles";
import { MyColors } from "@/shared/styles";
import { styled } from "styled-components";
import { TimeLinePoint } from "./components/timelinePoint";

const FirstBlockContainer = styled.div`
  display: flex;
  /* padding: 2.5em; */

  flex-direction: column;
  gap: 1.5em;
  /* padding-top: 10em; */

  position: relative;
  overflow: hidden;
`;

const TimelineStyle = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 2px solid ${MyColors.green};
  z-index: 3;
  gap: 2em;
  margin: 2.5em;
  margin-top: -2em;
  margin-left: 4em;
`;

const LinearHeader = styled.div`
  display: flex;
  background: linear-gradient(
    to bottom,
    ${MyColors.dark1} 0%,
    rgba(240, 248, 255, 0) 100%
  );
  height: 6em;
  z-index: 1000;
`;

const LinearFooter = styled.div`
  display: flex;
  background: linear-gradient(
    to top,
    ${MyColors.dark1} 0%,
    rgba(240, 248, 255, 0) 100%
  );
  height: 6em;
  z-index: 2;
  margin-top: -4em;
`;

export default function ProductDescriptionBlock({
  items,
}: {
  items: {
    header: string;
    text: string;
  }[];
}) {
  return (
    <FirstBlockContainer>
      <GradientBubbles></GradientBubbles>
      <LinearHeader></LinearHeader>

      <TimelineStyle>
        {items.map((val) => (
          <TimeLinePoint
            key={val.header}
            header={val.header}
            text={val.text}
          ></TimeLinePoint>
        ))}
      </TimelineStyle>
      <LinearFooter></LinearFooter>
    </FirstBlockContainer>
  );
}
