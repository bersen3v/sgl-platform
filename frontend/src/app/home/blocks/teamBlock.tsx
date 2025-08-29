import { TextStyle } from "@/shared/styles/MyTypography/textStyles";
import { styled } from "styled-components";
import PlayerCard from "../components/playerCard";
import { useIntl } from "react-intl";

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
  const intl = useIntl();
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
        {intl.formatMessage({ id: "team" })}
      </TextStyle.ProductHeader>
      <BlockContainer>
        <PlayersScroll>
          <PlayersLayout>
            <PlayerCard
              img={"icons/dmitri_pislevich.jpg"}
              name={intl.formatMessage({ id: "dmitry_pislevich" })}
              position={intl.formatMessage({ id: "founder" })}
            ></PlayerCard>
            <PlayerCard
              img={"icons/magzhan.jpg"}
              name={intl.formatMessage({ id: "magzhan_myazov" })}
              position={intl.formatMessage({ id: "ceo" })}
            ></PlayerCard>
            <PlayerCard
              img={"icons/arsentev.jpg"}
              name={intl.formatMessage({ id: "arsentev" })}
              position={intl.formatMessage({ id: "developer" })}
            ></PlayerCard>
            <PlayerCard
              img={"icons/shukanov.jpg"}
              name={intl.formatMessage({ id: "shukanov" })}
              position={intl.formatMessage({ id: "prmanager" })}
            ></PlayerCard>
          </PlayersLayout>
        </PlayersScroll>
      </BlockContainer>
    </>
  );
}
