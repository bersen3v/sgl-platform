"use client";
import { MyColors } from "@/shared/styles";
import { styled } from "styled-components";
import GlassHeader from "../home/components/glassHeader";
import FaqBlock from "../home/blocks/faqBlock";

import CallToActionBlock from "../home/blocks/callToActionBlock";

import { useIntl } from "react-intl";

import ProductHeaderBlock from "../analytics/components/headerBlock/productHeaderBlock";
import ProductDescriptionBlock from "../analytics/components/descriptionBlock/productDescriptionBlock";
import ProductRoadBlock from "../analytics/components/roadBlock/productRoadBlock";

import { Item9 } from "../home/components/3d/item9";
import { useRouter } from "next/navigation";
import Footer from "../home/blocks/footer";

const PageContainer = styled.div`
  background-color: ${MyColors.dark1};
  position: relative;
  overflow: hidden;
`;

export default function SupportPage() {
  const intl = useIntl();
  const router = useRouter();
  return (
    <PageContainer>
      <GlassHeader></GlassHeader>
      <ProductHeaderBlock
        productName={intl.formatMessage({ id: "walking" })}
        productDescription={intl.formatMessage({
          id: "walkingDescription",
        })}
        onClick={() => {
          router.push("https://sgl.one/");
        }}
        obj3d={<Item9></Item9>}
      ></ProductHeaderBlock>
      <ProductDescriptionBlock
        items={[
          {
            header: intl.formatMessage({ id: "supportForWhom" }),
            text: intl.formatMessage({ id: "supportForWhomText" }),
          },
          {
            header: intl.formatMessage({ id: "supportWhatWeDo" }),
            text: intl.formatMessage({ id: "supportWhatWeDoText" }),
          },
          {
            header: intl.formatMessage({ id: "supportBenefits" }),
            text: intl.formatMessage({ id: "supportBenefitsText" }),
          },
        ]}
      ></ProductDescriptionBlock>
      <ProductRoadBlock
        items={[
          {
            header: intl.formatMessage({ id: "supportStep1Header" }),
            text: intl.formatMessage({ id: "supportStep1Text" }),
            counter: "01",
          },
          {
            header: intl.formatMessage({ id: "supportStep2Header" }),
            text: intl.formatMessage({ id: "supportStep2Text" }),
            counter: "02",
          },
          {
            header: intl.formatMessage({ id: "supportStep3Header" }),
            text: intl.formatMessage({ id: "supportStep3Text" }),
            counter: "03",
          },
        ]}
      ></ProductRoadBlock>
      {/* <ProductDisciplinesBlock></ProductDisciplinesBlock> */}
      <CallToActionBlock></CallToActionBlock>
      <FaqBlock
        items={[
          {
            question: intl.formatMessage({ id: "supportFaq1Question" }),
            answer: intl.formatMessage({ id: "supportFaq1Answer" }),
          },
          {
            question: intl.formatMessage({ id: "supportFaq2Question" }),
            answer: intl.formatMessage({ id: "supportFaq2Answer" }),
          },
          {
            question: intl.formatMessage({ id: "supportFaq3Question" }),
            answer: intl.formatMessage({ id: "supportFaq3Answer" }),
          },
          {
            question: intl.formatMessage({ id: "supportFaq4Question" }),
            answer: intl.formatMessage({ id: "supportFaq4Answer" }),
          },
          {
            question: intl.formatMessage({ id: "supportFaq5Question" }),
            answer: intl.formatMessage({ id: "supportFaq5Answer" }),
          },
          {
            question: intl.formatMessage({ id: "supportFaq6Question" }),
            answer: intl.formatMessage({ id: "supportFaq6Answer" }),
          },
          {
            question: intl.formatMessage({ id: "supportFaq7Question" }),
            answer: intl.formatMessage({ id: "supportFaq7Answer" }),
          },
          {
            question: intl.formatMessage({ id: "supportFaq9Question" }),
            answer: intl.formatMessage({ id: "supportFaq9Answer" }),
          },
          {
            question: intl.formatMessage({ id: "supportFaq10Question" }),
            answer: intl.formatMessage({ id: "supportFaq10Answer" }),
          },
        ]}
      ></FaqBlock>
      <Footer></Footer>
    </PageContainer>
  );
}
