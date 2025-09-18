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
        header={"Наша миссия"}
        text={
          "Мы стремимся формировать будущее киберспорта, создавая современные IT-решения и объединяя игроков, зрителей и бизнес на одной платформе. Наша цель – развивать индустрию киберспорта в регионе и на международном уровне, обеспечивая новые возможности для роста, сотрудничества и монетизации."
        }
      ></MissionBox>
    </BlockContainer>
  );
}
