"use client";
import { useWindowSize } from "react-use";
import { desktopMinWidth } from "@/shared/constants/adaptive";
import DesktopHomeView from "./views/desktopHomeView";
import MobileHomeView from "./views/mobileHomeView";
import CustomFooter from "@/shared/widgets/customFooter/customFooter";
import styled, { keyframes } from "styled-components";
import { MyColors } from "@/shared/styles";
import { CustomButton } from "@/shared/widgets/customButton";
import { AuroraEffect } from "./components/auroraEffect";
import CustomBlackButton from "./components/customBlackButton";
import { TextStyle } from "@/shared/styles/MyTypography/textStyles";
import GlassHeader from "./components/glassHeader";
import HeaderBlock from "./blocks/headerBlock";
import MotivationBlock from "./blocks/motivationBlock";
import ProductsBlock from "./blocks/productsBlock";
import TeamBlock from "./blocks/teamBlock";
import GradientBubbles from "./components/bubbles";
import PartnersBlock from "./blocks/partnersBlock";
import CallToActionBlock from "./blocks/callToActionBlock";
import FaqBlock from "./blocks/faqBlock";

const HomePageContainer = styled.div`
  background-color: ${MyColors.dark1};
  position: relative;
  overflow: hidden;
`;

export default function Home() {
  return (
    <HomePageContainer>
      <GlassHeader></GlassHeader>
      <HeaderBlock></HeaderBlock>
      <MotivationBlock></MotivationBlock>
      <ProductsBlock></ProductsBlock>
      <TeamBlock></TeamBlock>
      <PartnersBlock></PartnersBlock>
      <CallToActionBlock></CallToActionBlock>
      <FaqBlock></FaqBlock>
    </HomePageContainer>
  );
}
