import styled, { keyframes } from "styled-components";

// Определяем цвета
const COLORS = {
  green: "#555D22",
  dark1: "#1C1C1C",
};

// Анимации
const moveInCircle = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const moveVertical = keyframes`
  0% {
    transform: translateY(-50%);
  }
  50% {
    transform: translateY(50%);
  }
  100% {
    transform: translateY(-50%);
  }
`;

const moveHorizontal = keyframes`
  0% {
    transform: translateX(-50%) translateY(-10%);
  }
  50% {
    transform: translateX(50%) translateY(10%);
  }
  100% {
    transform: translateX(-50%) translateY(-10%);
  }
`;

// Стилизованные компоненты
const TextContainer = styled.div`
  z-index: 100;
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  font-size: 96px;
  color: white;
  opacity: 0.8;
  user-select: none;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.1);
  font-family: sans-serif; // Заменил 'Dongle' на общий шрифт
`;

const GradientBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(40deg, ${COLORS.dark1}, ${COLORS.dark1});

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
`;

const SVG = styled.svg`
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
`;

const GradientsContainer = styled.div`
  filter: url(#goo) blur(40px);
  width: 100%;
  height: 100%;
`;

// Базовый стиль для всех градиентных кругов
const GradientCircle = styled.div`
  position: absolute;
  mix-blend-mode: hard-light;
  width: 80%;
  height: 80%;
  top: calc(50% - 80% / 2);
  left: calc(50% - 80% / 2);
  opacity: 1;
`;

const G1 = styled(GradientCircle)`
  background: radial-gradient(
      circle at center,
      ${COLORS.green}80 0,
      ${COLORS.green}00 50%
    )
    no-repeat;
  transform-origin: center center;
  animation: ${moveVertical} 30s ease infinite;
`;

const G2 = styled(GradientCircle)`
  background: radial-gradient(
      circle at center,
      ${COLORS.green}80 0,
      ${COLORS.green}00 50%
    )
    no-repeat;
  transform-origin: calc(50% - 400px);
  animation: ${moveInCircle} 20s reverse infinite;
`;

const G3 = styled(GradientCircle)`
  background: radial-gradient(
      circle at center,
      ${COLORS.green}80 0,
      ${COLORS.green}00 50%
    )
    no-repeat;
  top: calc(50% - 80% / 2 + 200px);
  left: calc(50% - 80% / 2 - 500px);
  transform-origin: calc(50% + 400px);
  animation: ${moveInCircle} 40s linear infinite;
`;

const G4 = styled(GradientCircle)`
  background: radial-gradient(
      circle at center,
      ${COLORS.green}80 0,
      ${COLORS.green}00 50%
    )
    no-repeat;
  transform-origin: calc(50% - 200px);
  animation: ${moveHorizontal} 40s ease infinite;
  opacity: 0.7;
`;

const G5 = styled(GradientCircle)`
  background: radial-gradient(
      circle at center,
      ${COLORS.green}80 0,
      ${COLORS.green}00 50%
    )
    no-repeat;
  width: 160%;
  height: 160%;
  top: calc(50% - 80%);
  left: calc(50% - 80%);
  transform-origin: calc(50% - 800px) calc(50% + 200px);
  animation: ${moveInCircle} 20s ease infinite;
`;

const Interactive = styled.div`
  position: absolute;
  background: radial-gradient(
      circle at center,
      ${COLORS.green}80 0,
      ${COLORS.green}00 50%
    )
    no-repeat;
  mix-blend-mode: hard-light;
  width: 100%;
  height: 100%;
  top: -50%;
  left: -50%;
  opacity: 0.7;
`;

// Основной компонент
const GradientBubbles = () => {
  return (
    <>
      {/* <TextContainer>Bubbles</TextContainer> */}
      <GradientBackground>
        <SVG xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </SVG>
        <GradientsContainer>
          <G1 />
          <G2 />
          <G3 />
          <G4 />
          <G5 />
          <Interactive />
        </GradientsContainer>
      </GradientBackground>
    </>
  );
};

export default GradientBubbles;
