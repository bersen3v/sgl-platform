import { styled } from "styled-components";

import ValueView from "./components/valueView";
import GradientBubbles from "@/app/home/components/bubbles";
import { MyColors } from "@/shared/styles";

const FirstBlockContainer = styled.div`
  display: flex;
  padding: 2.5em;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
  /* height: 60vh; */
  /* padding-top: 10em; */
  /* min-height: 100vh; */

  position: relative;
  overflow: hidden;
  padding-bottom: 8em;
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

export default function OurValuesBlock() {
  return (
    <FirstBlockContainer>
      {/* <GradientBubbles></GradientBubbles> */}
      {/* <LinearHeader></LinearHeader> */}
      <ValueView
        header={"[ Инновации ]"}
        text={
          "мы внедряем современные технологии и стремимся быть на шаг впереди."
        }
      ></ValueView>
      <ValueView
        header={"[ Открытость ]"}
        text={
          "создаем удобные решения для всех участников киберспортивной индустрии."
        }
      ></ValueView>
      <ValueView
        header={"[ Партнерство ]"}
        text={
          "строим долгосрочные отношения с международными и локальными компаниями."
        }
      ></ValueView>
      <ValueView
        header={"[ Развитие ]"}
        text={
          "способствуем росту киберспорта как массового явления и профессиональной отрасли."
        }
      ></ValueView>
      {/* <LinearFooter></LinearFooter> */}
    </FirstBlockContainer>
  );
}
