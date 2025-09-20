"use client";
import { MyColors } from "@/shared/styles";
import { styled } from "styled-components";
import GlassHeader from "../home/components/glassHeader";
import FaqBlock from "../home/blocks/faqBlock";

import CallToActionBlock from "../home/blocks/callToActionBlock";
import AboutHeaderBlock from "./headerBlock/aboutHeaderBlock";
import CompetentionsBlock from "./competentionsBlock/competentionsBlock";
import EcosystemBlock from "./ecosystem/ecosystemBlock";
import MissionBlock from "./missionBlock/missionBlock";
import OurValuesBlock from "./ourValuesBlock/ourValuesBlock";
import Footer from "../home/blocks/footer";

const PageContainer = styled.div`
  background-color: ${MyColors.dark1};
  position: relative;
  overflow: hidden;
`;

export default function AboutUsPage() {
  return (
    <PageContainer>
      <GlassHeader></GlassHeader>
      <AboutHeaderBlock></AboutHeaderBlock>
      <CompetentionsBlock></CompetentionsBlock>
      <EcosystemBlock></EcosystemBlock>
      <MissionBlock></MissionBlock>
      <OurValuesBlock></OurValuesBlock>
      <FaqBlock items={[]}></FaqBlock>
      <Footer></Footer>
    </PageContainer>
  );
}
