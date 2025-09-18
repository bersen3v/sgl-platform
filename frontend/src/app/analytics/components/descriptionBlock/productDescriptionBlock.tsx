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

export default function ProductDescriptionBlock() {
  return (
    <FirstBlockContainer>
      <GradientBubbles></GradientBubbles>
      <LinearHeader></LinearHeader>
      <TimelineStyle>
        <TimeLinePoint
          header={"Для кого?"}
          text={
            "Наши клиенты - правообладатели киберспортивного медиаконтента, которым необходимо получать быструю и качественную оцифровку матчей"
          }
        ></TimeLinePoint>
        <TimeLinePoint
          header={"Что мы делаем?"}
          text={
            "Получаем на вход голый видеопоток, автоматически обрабатываем и отдаём готовый набор метрик киберспортивного матча. Всё это в реальном времени"
          }
        ></TimeLinePoint>
        <TimeLinePoint
          header={"Какую пользу это приносит?"}
          text={
            "Больше не нужно вручную считать голы, киллы и прочие необходимые для трансляции метрики. Теперь это делают технологии компьютерного зрения. Автоматически. Без cна, отдыха и дорогостояющих ошибок. "
          }
        ></TimeLinePoint>
      </TimelineStyle>
      <LinearFooter></LinearFooter>
    </FirstBlockContainer>
  );
}
