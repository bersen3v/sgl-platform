import { TextStyle } from "@/shared/styles/MyTypography/textStyles";
import { styled } from "styled-components";
import PlayerCard from "../components/playerCard";

const BlockContainer = styled.div`
  display: flex;
  padding: 2em;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5em;
  width: 100vw;
  position: relative;
  overflow-x: scroll;
  scrollbar-width: none;
  padding-bottom: 5em;
`;

const PlayersScroll = styled.div`
  display: flex;
  gap: 1em;
  /* width: 100vw; */
  overflow-y: visible;
  margin-right: 1em;
`;

const PlayersLayout = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 1em;
  /* overflow-y: visible; */
`;

export default function TeamBlock() {
  return (
    <>
      <TextStyle.ProductHeader
        style={{
          paddingLeft: "0.5em",
          paddingTop: "0.2em",
          fontWeight: 500,
          padding: "2em",
          paddingBottom: 0,
        }}
      >
        Команда
      </TextStyle.ProductHeader>
      <BlockContainer>
        <PlayersScroll>
          <PlayersLayout>
            <PlayerCard
              img={"icons/dmitri_pislevich.jpg"}
              name={"Дмитрий Пислевич"}
              position={"CEO"}
            ></PlayerCard>
            <PlayerCard
              img={"icons/dmitri_pislevich.jpg"}
              name={"Магжан Мязов"}
              position={"CEO"}
            ></PlayerCard>
            <PlayerCard
              img={"icons/dmitri_pislevich.jpg"}
              name={"Магжан Мязов"}
              position={"CEO"}
            ></PlayerCard>
          </PlayersLayout>
        </PlayersScroll>
      </BlockContainer>
    </>
  );
}
