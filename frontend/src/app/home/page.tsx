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
import Footer from "./blocks/footer";
import { useIntl } from "react-intl";

const HomePageContainer = styled.div`
  background-color: ${MyColors.dark1};
  position: relative;
  overflow: hidden;
`;

export default function Home() {
  const intl = useIntl();
  return (
    <HomePageContainer>
      <GlassHeader></GlassHeader>
      <HeaderBlock></HeaderBlock>
      <MotivationBlock></MotivationBlock>
      <ProductsBlock></ProductsBlock>
      <TeamBlock></TeamBlock>
      <PartnersBlock></PartnersBlock>
      <CallToActionBlock></CallToActionBlock>
      <FaqBlock
        items={[
          {
            question: intl.formatMessage({ id: "question1" }),
            answer: intl.formatMessage({ id: "answer1" }),
          },
          {
            question: intl.formatMessage({ id: "question2" }),
            answer: intl.formatMessage({ id: "answer2" }),
          },
          {
            question: intl.formatMessage({ id: "question3" }),
            answer: intl.formatMessage({ id: "answer3" }),
          },
          {
            question: intl.formatMessage({ id: "question4" }),
            answer: intl.formatMessage({ id: "answer4" }),
          },
          {
            question: intl.formatMessage({ id: "question5" }),
            answer: intl.formatMessage({ id: "answer5" }),
          },
          {
            question: intl.formatMessage({ id: "question6" }),
            answer: intl.formatMessage({ id: "answer6" }),
          },
          {
            question: intl.formatMessage({ id: "question7" }),
            answer: intl.formatMessage({ id: "answer7" }),
          },
          {
            question: intl.formatMessage({ id: "question8" }),
            answer: intl.formatMessage({ id: "answer8" }),
          },
        ]}
      ></FaqBlock>
      <Footer></Footer>
    </HomePageContainer>
  );
}

//  <QuestionRow
//           question={intl.formatMessage({ id: "question1" })}
//           answer={intl.formatMessage({ id: "answer1" })}
//         ></QuestionRow>
//         <QuestionRow
//           question={intl.formatMessage({ id: "question2" })}
//           answer={intl.formatMessage({ id: "answer2" })}
//         ></QuestionRow>
//         <QuestionRow
//           question={intl.formatMessage({ id: "question3" })}
//           answer={intl.formatMessage({ id: "answer3" })}
//         ></QuestionRow>
//         <QuestionRow
//           question={intl.formatMessage({ id: "question4" })}
//           answer={intl.formatMessage({ id: "answer4" })}
//         ></QuestionRow>
//         <QuestionRow
//           question={intl.formatMessage({ id: "question5" })}
//           answer={intl.formatMessage({ id: "answer5" })}
//         ></QuestionRow>
//         <QuestionRow
//           question={intl.formatMessage({ id: "question6" })}
//           answer={intl.formatMessage({ id: "answer6" })}
//         ></QuestionRow>
//         <QuestionRow
//           question={intl.formatMessage({ id: "question7" })}
//           answer={intl.formatMessage({ id: "answer7" })}
//         ></QuestionRow>
//         <QuestionRow
//           question={intl.formatMessage({ id: "question8" })}
//           answer={intl.formatMessage({ id: "answer8" })}
//         ></QuestionRow>
