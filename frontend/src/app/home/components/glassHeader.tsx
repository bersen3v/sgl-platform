import { MyColors } from "@/shared/styles";
import { TextStyle } from "@/shared/styles/MyTypography/textStyles";
import { styled } from "styled-components";

const HeaderMenuLayout = styled.div`
  display: flex;
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  margin: 1em;
  justify-content: center;
  align-items: center;
`;

const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(41, 41, 41, 0.5);
  border-radius: 90px;
  max-width: 50%;
  padding: 1em 1.5em;
  flex-direction: row;
  gap: 1em;

  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(10px);

  box-shadow: 4px 4px 20px rgba(255, 255, 255, 0.03),
    inset -3px -3px 10px rgba(255, 255, 255, 0.05);

  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -30%;
    left: -30%;
    width: 160%;
    height: 160%;
    background: linear-gradient(
      135deg,
      /* -45 градусов = 135deg для линейного градиента */ ${MyColors.green}10 0%,
      ${MyColors.green}10 60%,
      transparent 100%
    );
    filter: blur(20px);
    pointer-events: none;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

export default function GlassHeader() {
  return (
    <HeaderMenuLayout>
      <HeaderMenu>
        <img
          onClick={() => {}}
          src="/icons/logo.png"
          style={{
            height: 25,
            objectFit: "cover",
          }}
        ></img>
        <TextStyle.HeaderMenuText>главная</TextStyle.HeaderMenuText>
        <TextStyle.HeaderMenuText>продукты</TextStyle.HeaderMenuText>
        <TextStyle.HeaderMenuText>о нас</TextStyle.HeaderMenuText>
      </HeaderMenu>
    </HeaderMenuLayout>
  );
}
