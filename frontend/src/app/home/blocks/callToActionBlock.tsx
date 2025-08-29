import { styled } from "styled-components";
import CallToActionComponent from "../components/callToActionComponent";
import { useIntl } from "react-intl";

const BlockContainer = styled.div`
  display: flex;
  padding: 2em;
  padding-top: 5em;
  padding-bottom: 5em;
  flex-direction: column;
`;

export default function CallToActionBlock() {
  const intl = useIntl();
  return (
    <BlockContainer>
      <CallToActionComponent
        header={intl.formatMessage({ id: "prBlockHeader" })}
        text={intl.formatMessage({ id: "prBlockDescription" })}
      ></CallToActionComponent>
    </BlockContainer>
  );
}
