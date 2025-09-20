"use client";
import { MyColors } from "@/shared/styles";
import { styled } from "styled-components";
import GlassHeader from "../home/components/glassHeader";
import FaqBlock from "../home/blocks/faqBlock";
import Footer from "../home/blocks/footer";
import CallToActionBlock from "../home/blocks/callToActionBlock";

import { useIntl } from "react-intl";
import { Item10 } from "../home/components/3d/item10";
import ProductHeaderBlock from "../analytics/components/headerBlock/productHeaderBlock";
import ProductDescriptionBlock from "../analytics/components/descriptionBlock/productDescriptionBlock";
import ProductRoadBlock from "../analytics/components/roadBlock/productRoadBlock";
import ProductDisciplinesBlock from "../analytics/components/disciplinesBlock/productDisciplinesBlock";
import { Item8 } from "../home/components/3d/item8";
import { useRouter } from "next/navigation";

const PageContainer = styled.div`
  background-color: ${MyColors.dark1};
  position: relative;
  overflow: hidden;
`;

export default function MarketplacePage() {
  const intl = useIntl();
  const router = useRouter();
  return (
    <PageContainer>
      <GlassHeader></GlassHeader>
      <ProductHeaderBlock
        productName={intl.formatMessage({ id: "marketplace" })}
        productDescription={intl.formatMessage({
          id: "marketplaceDescription",
        })}
        onClick={() => {
          router.push("/search");
        }}
        obj3d={<Item8></Item8>}
      ></ProductHeaderBlock>
      <ProductDescriptionBlock
        items={[
          {
            header: intl.formatMessage({ id: "marketplaceForWhom" }),
            text: intl.formatMessage({ id: "marketplaceForWhomText" }),
          },
          {
            header: intl.formatMessage({ id: "marketplaceWhatWeDo" }),
            text: intl.formatMessage({ id: "marketplaceWhatWeDoText" }),
          },
          {
            header: intl.formatMessage({ id: "marketplaceBenefits" }),
            text: intl.formatMessage({ id: "marketplaceBenefitsText" }),
          },
        ]}
      ></ProductDescriptionBlock>
      <ProductRoadBlock
        items={[
          {
            header: intl.formatMessage({ id: "marketplaceStep1Header" }),
            text: intl.formatMessage({ id: "marketplaceStep1Text" }),
            counter: "01",
          },
          {
            header: intl.formatMessage({ id: "marketplaceStep2Header" }),
            text: intl.formatMessage({ id: "marketplaceStep2Text" }),
            counter: "02",
          },
          {
            header: intl.formatMessage({ id: "marketplaceStep3Header" }),
            text: intl.formatMessage({ id: "marketplaceStep3Text" }),
            counter: "03",
          },
        ]}
      ></ProductRoadBlock>
      {/* <ProductDisciplinesBlock></ProductDisciplinesBlock> */}
      <CallToActionBlock></CallToActionBlock>
      <FaqBlock
        items={[
          {
            question: intl.formatMessage({ id: "marketplaceFaq1Question" }),
            answer: intl.formatMessage({ id: "marketplaceFaq1Answer" }),
          },
          {
            question: intl.formatMessage({ id: "marketplaceFaq2Question" }),
            answer: intl.formatMessage({ id: "marketplaceFaq2Answer" }),
          },
          {
            question: intl.formatMessage({ id: "marketplaceFaq3Question" }),
            answer: intl.formatMessage({ id: "marketplaceFaq3Answer" }),
          },
          {
            question: intl.formatMessage({ id: "marketplaceFaq4Question" }),
            answer: intl.formatMessage({ id: "marketplaceFaq4Answer" }),
          },
          {
            question: intl.formatMessage({ id: "marketplaceFaq5Question" }),
            answer: intl.formatMessage({ id: "marketplaceFaq5Answer" }),
          },
          {
            question: intl.formatMessage({ id: "marketplaceFaq6Question" }),
            answer: intl.formatMessage({ id: "marketplaceFaq6Answer" }),
          },
          {
            question: intl.formatMessage({ id: "marketplaceFaq7Question" }),
            answer: intl.formatMessage({ id: "marketplaceFaq7Answer" }),
          },
          {
            question: intl.formatMessage({ id: "marketplaceFaq8Question" }),
            answer: intl.formatMessage({ id: "marketplaceFaq8Answer" }),
          },
          {
            question: intl.formatMessage({ id: "marketplaceFaq9Question" }),
            answer: intl.formatMessage({ id: "marketplaceFaq9Answer" }),
          },
          {
            question: intl.formatMessage({ id: "marketplaceFaq10Question" }),
            answer: intl.formatMessage({ id: "marketplaceFaq10Answer" }),
          },
        ]}
      ></FaqBlock>
      <Footer></Footer>
    </PageContainer>
  );
}
