import { MyColors } from "@/shared/styles";
import { TextStyle } from "@/shared/styles/MyTypography/textStyles";
import { FiChevronUp } from "react-icons/fi";
import { styled } from "styled-components";
import QuestionRow from "../components/questionRow";

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
  return (
    <BlockContainer>
      <QuestionsLayout>
        <QuestionRow question={"Вопрос"} answer={"Ответ"}></QuestionRow>
        <QuestionRow question={"Вопрос"} answer={"Ответ"}></QuestionRow>
        <QuestionRow question={"Вопрос"} answer={"Ответ"}></QuestionRow>
        <QuestionRow question={"Вопрос"} answer={"Ответ"}></QuestionRow>
        <QuestionRow question={"Вопрос"} answer={"Ответ"}></QuestionRow>
        <QuestionRow question={"Вопрос"} answer={"Ответ"}></QuestionRow>
        <QuestionRow question={"Вопрос"} answer={"Ответ"}></QuestionRow>
      </QuestionsLayout>
    </BlockContainer>
  );
}
