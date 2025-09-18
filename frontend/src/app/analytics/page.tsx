"use client";
import { MyColors } from "@/shared/styles";
import { styled } from "styled-components";
import GlassHeader from "../home/components/glassHeader";
import FaqBlock from "../home/blocks/faqBlock";
import Footer from "../home/blocks/footer";
import CallToActionBlock from "../home/blocks/callToActionBlock";
import ProductHeaderBlock from "./components/headerBlock/productHeaderBlock";
import ProductDescriptionBlock from "./components/descriptionBlock/productDescriptionBlock";
import ProductRoadBlock from "./components/roadBlock/productRoadBlock";
import ProductDisciplinesBlock from "./components/disciplinesBlock/productDisciplinesBlock";

const PageContainer = styled.div`
  background-color: ${MyColors.dark1};
  position: relative;
  overflow: hidden;
`;

export default function AnalyticsPage() {
  return (
    <PageContainer>
      <GlassHeader></GlassHeader>
      <ProductHeaderBlock></ProductHeaderBlock>
      <ProductDescriptionBlock></ProductDescriptionBlock>
      <ProductRoadBlock></ProductRoadBlock>
      <ProductDisciplinesBlock></ProductDisciplinesBlock>
      <CallToActionBlock></CallToActionBlock>
      <FaqBlock></FaqBlock>
      <Footer></Footer>
    </PageContainer>
  );
}
