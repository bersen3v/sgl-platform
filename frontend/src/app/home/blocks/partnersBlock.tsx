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
                "https://mayak1932.kz/wp-content/uploads/2022/11/whatsapp-image-2022-11-16-at-09.18.07-1-1024x1024.jpeg"
              }
              name={"AstanaHub"}
              position={"Крупнейший в мире поставщик трансляций"}
            ></PartnerCard>
            <PartnerCard
              img={
                "https://sun9-2.userapi.com/impf/c852232/v852232476/149dbb/nEa96OiTo0s.jpg?size=604x604&quality=96&sign=7666b5826a60450436bd10e2b5d6e7fc&type=album"
              }
              name={"Blast"}
              position={"Крупнейший в мире поставщик трансляций"}
            ></PartnerCard>
            <PartnerCard
              img={
                "https://img.championat.com/s/1350x900/news/big/o/k/edinaya-liga-opublikovala-podborku-luchshih-momentov-finala-i-serii-za-trete-mesto_1717921201249692841.jpg"
              }
              name={"Единая лига ВТБ"}
              position={"Крупнейший в мире поставщик трансляций"}
            ></PartnerCard>
            <PartnerCard
              img={
                "https://avatars.mds.yandex.net/i?id=757ee0380e3cf36ad4d71050bc12c8cb_sr-13315631-images-thumbs&n=13"
              }
              name={"Relog Media"}
              position={"Крупнейший в мире поставщик трансляций"}
            ></PartnerCard>
          </PlayersLayout>
        </PlayersScroll>
      </BlockContainer>
    </PartnersBlockContainer>
  );
}
