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
import { useIntl } from "react-intl";
import { Item10 } from "../home/components/3d/item10";

const PageContainer = styled.div`
  background-color: ${MyColors.dark1};
  position: relative;
  overflow: hidden;
`;

export default function AnalyticsPage() {
  const intl = useIntl();
  return (
    <PageContainer>
      <GlassHeader></GlassHeader>
      <ProductHeaderBlock
        productName={intl.formatMessage({ id: "analytics" })}
        productDescription={intl.formatMessage({ id: "analyticsDescription" })}
        onClick={() => {}}
        obj3d={<Item10></Item10>}
      ></ProductHeaderBlock>
      <ProductDescriptionBlock
        items={[
          {
            header: intl.formatMessage({ id: "forWhom" }),
            text: intl.formatMessage({ id: "forWhomText" }),
          },
          {
            header: intl.formatMessage({ id: "whatWeDo" }),
            text: intl.formatMessage({ id: "whatWeDoText" }),
          },
          {
            header: intl.formatMessage({ id: "whatBenefits" }),
            text: intl.formatMessage({ id: "whatBenefitsText" }),
          },
        ]}
      ></ProductDescriptionBlock>
      <ProductRoadBlock
        items={[
          {
            header: intl.formatMessage({ id: "step1Header" }),
            text: intl.formatMessage({ id: "step1Text" }),
            counter: "01",
          },
          {
            header: intl.formatMessage({ id: "step2Header" }),
            text: intl.formatMessage({ id: "step2Text" }),
            counter: "02",
          },
          {
            header: intl.formatMessage({ id: "step3Header" }),
            text: intl.formatMessage({ id: "step3Text" }),
            counter: "03",
          },
        ]}
      ></ProductRoadBlock>
      <ProductDisciplinesBlock></ProductDisciplinesBlock>
      <CallToActionBlock></CallToActionBlock>
      <FaqBlock
        items={[
          {
            question: intl.formatMessage({ id: "faq1Question" }),
            answer: intl.formatMessage({ id: "faq1Answer" }),
          },
          {
            question: intl.formatMessage({ id: "faq2Question" }),
            answer: intl.formatMessage({ id: "faq2Answer" }),
          },
          {
            question: intl.formatMessage({ id: "faq3Question" }),
            answer: intl.formatMessage({ id: "faq3Answer" }),
          },
          {
            question: intl.formatMessage({ id: "faq4Question" }),
            answer: intl.formatMessage({ id: "faq4Answer" }),
          },
        ]}
      ></FaqBlock>
      <Footer></Footer>
    </PageContainer>
  );
}
