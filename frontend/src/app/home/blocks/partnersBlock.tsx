import { MyColors } from "@/shared/styles";
import { TextStyle } from "@/shared/styles/MyTypography/textStyles";
import { styled } from "styled-components";
import { FiLink2 } from "react-icons/fi";
import ProductCard from "../components/productCard";
import PartnerCard from "../components/partnerCard";

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

const PartnersBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${MyColors.dark2};
`;

export default function PartnersBlock() {
  return (
    <PartnersBlockContainer>
      <TextStyle.ProductHeader
        style={{
          paddingLeft: "0.5em",
          paddingTop: "0.2em",
          fontWeight: 500,
          padding: "2em",
          paddingBottom: 0,
        }}
      >
        Партнеры
      </TextStyle.ProductHeader>
      <BlockContainer>
        <PlayersScroll>
          <PlayersLayout>
            <PartnerCard
              img={
                "https://avatars.mds.yandex.net/i?id=aa950cdb0955ff88059bdd793ca94d23_sr-5829296-images-thumbs&n=13"
              }
              name={"HellTv"}
              position={"Крупнейший в мире поставщик трансляций"}
            ></PartnerCard>
            <PartnerCard
              img={
                "https://avatars.mds.yandex.net/i?id=aa950cdb0955ff88059bdd793ca94d23_sr-5829296-images-thumbs&n=13"
              }
              name={"HellTv"}
              position={"Крупнейший в мире поставщик трансляций"}
            ></PartnerCard>
            <PartnerCard
              img={
                "https://avatars.mds.yandex.net/i?id=aa950cdb0955ff88059bdd793ca94d23_sr-5829296-images-thumbs&n=13"
              }
              name={"HellTv"}
              position={"Крупнейший в мире поставщик трансляций"}
            ></PartnerCard>
            <PartnerCard
              img={
                "https://avatars.mds.yandex.net/i?id=aa950cdb0955ff88059bdd793ca94d23_sr-5829296-images-thumbs&n=13"
              }
              name={"HellTv"}
              position={"Крупнейший в мире поставщик трансляций"}
            ></PartnerCard>
            <PartnerCard
              img={
                "https://avatars.mds.yandex.net/i?id=aa950cdb0955ff88059bdd793ca94d23_sr-5829296-images-thumbs&n=13"
              }
              name={"HellTv"}
              position={"Крупнейший в мире поставщик трансляций"}
            ></PartnerCard>
          </PlayersLayout>
        </PlayersScroll>
      </BlockContainer>
    </PartnersBlockContainer>
  );
}
