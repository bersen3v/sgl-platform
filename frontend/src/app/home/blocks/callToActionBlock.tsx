import { styled } from "styled-components";
import CallToActionComponent from "../components/callToActionComponent";

const BlockContainer = styled.div`
  display: flex;
  padding: 2em;
  padding-top: 5em;
  padding-bottom: 5em;
  flex-direction: column;
`;

export default function CallToActionBlock() {
  return (
    <BlockContainer>
      <CallToActionComponent
        header={"хедер"}
        text={"текст"}
      ></CallToActionComponent>
    </BlockContainer>
  );
}
