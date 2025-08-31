import { MyColors } from "@/shared/styles";
import { TextStyle } from "@/shared/styles/MyTypography/textStyles";
import { FiChevronUp } from "react-icons/fi";
import { styled } from "styled-components";
import QuestionRow from "../components/questionRow";
import { useIntl } from "react-intl";

const BlockContainer = styled.div`
  display: flex;
  padding: 2em;
  padding-top: 0px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
  overflow: hidden;
`;

const QuestionsLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  width: 100%;
`;

export default function FaqBlock() {
  const intl = useIntl();
  return (
    <BlockContainer>
      <QuestionsLayout>
        <QuestionRow
          question={intl.formatMessage({ id: "question1" })}
          answer={intl.formatMessage({ id: "answer1" })}
        ></QuestionRow>
        <QuestionRow
          question={intl.formatMessage({ id: "question2" })}
          answer={intl.formatMessage({ id: "answer2" })}
        ></QuestionRow>
        <QuestionRow
          question={intl.formatMessage({ id: "question3" })}
          answer={intl.formatMessage({ id: "answer3" })}
        ></QuestionRow>
        <QuestionRow
          question={intl.formatMessage({ id: "question4" })}
          answer={intl.formatMessage({ id: "answer4" })}
        ></QuestionRow>
        <QuestionRow
          question={intl.formatMessage({ id: "question5" })}
          answer={intl.formatMessage({ id: "answer5" })}
        ></QuestionRow>
        <QuestionRow
          question={intl.formatMessage({ id: "question6" })}
          answer={intl.formatMessage({ id: "answer6" })}
        ></QuestionRow>
        <QuestionRow
          question={intl.formatMessage({ id: "question7" })}
          answer={intl.formatMessage({ id: "answer7" })}
        ></QuestionRow>
        <QuestionRow
          question={intl.formatMessage({ id: "question8" })}
          answer={intl.formatMessage({ id: "answer8" })}
        ></QuestionRow>
      </QuestionsLayout>
    </BlockContainer>
  );
}
