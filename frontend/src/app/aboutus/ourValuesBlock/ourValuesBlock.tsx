import { styled } from "styled-components";

import ValueView from "./components/valueView";
import GradientBubbles from "@/app/home/components/bubbles";
import { MyColors } from "@/shared/styles";
import { useIntl } from "react-intl";

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
  const intl = useIntl();
  return (
    <FirstBlockContainer>
      {/* <GradientBubbles></GradientBubbles> */}
      {/* <LinearHeader></LinearHeader> */}
      <ValueView
        header={intl.formatMessage({ id: "value1Header" })}
        text={intl.formatMessage({ id: "value1Text" })}
      ></ValueView>
      <ValueView
        header={intl.formatMessage({ id: "value2Header" })}
        text={intl.formatMessage({ id: "value2Text" })}
      ></ValueView>
      <ValueView
        header={intl.formatMessage({ id: "value3Header" })}
        text={intl.formatMessage({ id: "value3Text" })}
      ></ValueView>
      <ValueView
        header={intl.formatMessage({ id: "value4Header" })}
        text={intl.formatMessage({ id: "value4Text" })}
      ></ValueView>
      {/* <LinearFooter></LinearFooter> */}
    </FirstBlockContainer>
  );
}
