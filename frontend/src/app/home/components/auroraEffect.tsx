import { MyColors } from "@/shared/styles";
import { keyframes, styled } from "styled-components";

// Анимация для северного сияния - более интенсивная
const auroraAnimation = keyframes`
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.8;
  }
  33% {
    transform: translateY(-15px) scale(1.05);
    opacity: 0.9;
  }
  66% {
    transform: translateY(10px) scale(0.95);
    opacity: 0.7;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 0.8;
  }
`;

// Анимация движения волн
const waveAnimation = keyframes`
  0% {
    background-position: 30% 500%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 30% 50%;
  }
`;

const AuroraEffectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  mask-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 30%
  );
`;

// Основные полосы северного сияния
const AuroraStrip = styled.div<{
  $color: string;
  $height: string;
  $delay: string;
}>`
  width: 150%;
  position: absolute;
  bottom: ${(props) => props.$height};
  left: 0;
  right: 0;
  height: 40%;
  background: ${(props) => props.$color};
  animation: ${auroraAnimation} 8s ease-in-out infinite;
  animation-delay: ${(props) => props.$delay};
  border-radius: 50% 50% 0 0;
  opacity: 1;
  filter: blur(15px);
`;

// Фоновое свечение
const AuroraGlow = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 90%;
  background: linear-gradient(
    0deg,
    ${MyColors.dark1} 0%,
    ${MyColors.dark1} 25%,
    ${MyColors.dark1} 90%,
    transparent 100%
  );
  animation: ${waveAnimation} 10s ease infinite;
  opacity: 1;
`;

// Компонент северного сияния как на скриншоте
export const AuroraEffect = () => (
  <AuroraEffectContainer>
    <AuroraGlow />
    <AuroraStrip
      $color={`linear-gradient(90deg, ${MyColors.green}70, ${MyColors.green}90)`}
      $height="0%"
      $delay="3s"
    />
    <AuroraStrip
      $color={`linear-gradient(90deg, ${MyColors.green}70, ${MyColors.green}60)`}
      $height="15%"
      $delay="1s"
    />
    <AuroraStrip
      $color={`linear-gradient(90deg, ${MyColors.green}70, ${MyColors.green}90)`}
      $height="30%"
      $delay="2s"
    />
  </AuroraEffectContainer>
);
