import { desktopMinWidth } from "@/shared/constants/adaptive";
import { styled } from "styled-components";
import { MyColors } from "../MyColors/MyColors";

const Header = styled.h1`
  font-family: "helvetica";
  font-size: 2em;
  text-align: center;
  font-weight: 400;
  color: #ffffff;

  /* Для мобильных устройств - шире */
  max-width: 90%;

  /* Для десктопов - уже */
  @media (min-width: ${desktopMinWidth}px) {
    max-width: 60%;
  }
`;

const ProductHeader = styled.h1`
  font-family: "helvetica";
  font-size: 1.5em;
  font-weight: 400;
  color: #ffffff;
`;

const ProductText = styled.h1`
  font-family: "helvetica";
  font-size: 1em;
  font-weight: 450;
  color: #ffffff;
  opacity: 0.5;
`;

const HeaderLeft = styled.h1`
  font-family: "helvetica";
  font-size: 2em;
  text-align: left;
  font-weight: 400;
  color: #ffffff;

  /* Для мобильных устройств - шире */
  max-width: 90%;

  /* Для десктопов - уже */
  @media (min-width: ${desktopMinWidth}px) {
    max-width: 60%;
  }
`;

const Header2 = styled.h2`
  font-family: "helvetica";
  font-size: 1.2em;
  text-align: center;
  font-weight: 450;
  color: #e0e0e0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  opacity: 0.5;

  /* Для мобильных устройств - шире */
  max-width: 90%;

  /* Для десктопов - уже */
  @media (min-width: ${desktopMinWidth}px) {
    max-width: 60%;
  }
`;

const Header2Left = styled.h2`
  font-family: "helvetica";
  font-size: 1.2em;
  text-align: left;
  font-weight: 450;
  color: #e0e0e0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  opacity: 0.5;

  /* Для мобильных устройств - шире */
  /* max-width: 90%; */

  /* Для десктопов - уже */
  /* @media (min-width: ${desktopMinWidth}px) {
    max-width: 60%;
  } */
`;

const Button = styled.h3`
  font-family: "helvetica";
  font-size: 1.5em;
  text-align: center;
  font-weight: 500;
`;

const FooterText = styled.h3`
  font-family: "helvetica";
  font-size: 1.5em;
  text-align: center;
  font-weight: 500;
  color: ${MyColors.green};
`;

const HeaderMenuText = styled.h3`
  font-family: "helvetica";
  font-size: 1em;
  text-align: center;
  font-weight: 500;
  cursor: pointer;
  color: "white";
  opacity: 0.5;

  &:hover {
    opacity: 1;
    color: white;
  }
`;

export const TextStyle = {
  Header,
  Header2,
  Button,
  HeaderMenuText,
  Header2Left,
  HeaderLeft,
  ProductHeader,
  ProductText,
  FooterText,
};
