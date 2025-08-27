import { MyColors } from "@/shared/styles";
import { TextStyle } from "@/shared/styles/MyTypography/textStyles";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { styled } from "styled-components";

const QuestionRowLayout = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  background-color: ${MyColors.dark2};
  padding: 1em;
  border-radius: 0.8em;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 1em;
  cursor: pointer;
`;

const QuestionRowButton = styled.div`
  display: flex;
  background-color: ${MyColors.green};
  padding: 0.5em;
  border-radius: 900em;
  cursor: pointer;
`;

const HeaderFloor = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export default function QuestionRow({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <QuestionRowLayout
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <HeaderFloor>
        <TextStyle.Header2Left style={{ opacity: 1 }}>
          {question}
        </TextStyle.Header2Left>
        <QuestionRowButton
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? (
            <FiChevronUp
              color={MyColors.dark1}
              size={"1.3em"}
              style={{ paddingBottom: "0.1em" }}
            />
          ) : (
            <FiChevronDown
              color={MyColors.dark1}
              size={"1.3em"}
              style={{ paddingTop: "0.1em" }}
            />
          )}
        </QuestionRowButton>
      </HeaderFloor>
      {isOpen && <TextStyle.ProductText>{answer}</TextStyle.ProductText>}
    </QuestionRowLayout>
  );
}
