import { styled } from "styled-components";

import { useIntl } from "react-intl";
import MissionBox from "./components/missionBox";

const BlockContainer = styled.div`
  display: flex;
  padding: 2em;
  padding-top: 5em;
  padding-bottom: 5em;
  flex-direction: column;
`;

export default function MissionBlock() {
  const intl = useIntl();
  return (
    <BlockContainer>
      <MissionBox
        header={intl.formatMessage({ id: "missionHeader" })}
        text={intl.formatMessage({ id: "missionText" })}
      ></MissionBox>
    </BlockContainer>
  );
}
