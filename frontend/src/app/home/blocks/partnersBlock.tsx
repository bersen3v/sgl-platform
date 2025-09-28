import { MyColors } from "@/shared/styles";
import { TextStyle } from "@/shared/styles/MyTypography/textStyles";
import { styled } from "styled-components";
import { FiLink2 } from "react-icons/fi";
import ProductCard from "../components/productCard";
import PartnerCard from "../components/partnerCard";
import { useCallback, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { desktopMinWidth } from "@/shared/constants/adaptive";

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

const ScrollButtonStyle = styled.div`
  display: none;
  padding: 1em;
  background-color: ${MyColors.dark3};
  border-radius: 900px;
  cursor: pointer;

  &:hover {
    border: 1px solid ${MyColors.green};
  }

  @media (min-width: ${desktopMinWidth}px) {
    display: flex;
  }
`;

export default function PartnersBlock() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollByContainerWidth = useCallback((direction: "left" | "right") => {
    const element = scrollContainerRef.current;
    if (!element) return;

    const containerWidth = element.clientWidth;

    element.scrollTo({
      left:
        direction === "left"
          ? element.scrollLeft - containerWidth
          : element.scrollLeft + containerWidth,
      behavior: "smooth",
    });
  }, []);

  return (
    <PartnersBlockContainer>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
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
        <div
          style={{
            gap: "0.5em",
            display: "flex",
            padding: "2em",
            paddingBottom: 0,
          }}
        >
          <ScrollButtonStyle onClick={() => scrollByContainerWidth("left")}>
            <FaArrowLeft />
          </ScrollButtonStyle>
          <ScrollButtonStyle onClick={() => scrollByContainerWidth("right")}>
            <FaArrowRight />
          </ScrollButtonStyle>
        </div>
      </div>

      {/* <div onClick={() => scrollByContainerWidth("left")}>left</div>
      <div onClick={() => scrollByContainerWidth("right")}>right</div> */}

      <BlockContainer ref={scrollContainerRef}>
        <PlayersScroll>
          <PlayersLayout>
            <PartnerCard
              img={
                "https://mayak1932.kz/wp-content/uploads/2022/11/whatsapp-image-2022-11-16-at-09.18.07-1-1024x1024.jpeg"
              }
              name={"AstanaHub"}
              position={"Международный технопарк IT-стартапов"}
            ></PartnerCard>
            <PartnerCard
              img={
                "https://sun9-2.userapi.com/impf/c852232/v852232476/149dbb/nEa96OiTo0s.jpg?size=604x604&quality=96&sign=7666b5826a60450436bd10e2b5d6e7fc&type=album"
              }
              name={"Blast"}
              position={"Киберспортивная лига"}
            ></PartnerCard>
            <PartnerCard
              img={
                "https://img.championat.com/s/1350x900/news/big/o/k/edinaya-liga-opublikovala-podborku-luchshih-momentov-finala-i-serii-za-trete-mesto_1717921201249692841.jpg"
              }
              name={"Единая лига ВТБ"}
              position={"Крупнейший в РФ баскетбольный турнир"}
            ></PartnerCard>
            <PartnerCard
              img={
                "https://avatars.mds.yandex.net/i?id=757ee0380e3cf36ad4d71050bc12c8cb_sr-13315631-images-thumbs&n=13"
              }
              name={"Relog Media"}
              position={"Организатор турниров по киберспорту"}
            ></PartnerCard>
          </PlayersLayout>
        </PlayersScroll>
      </BlockContainer>
    </PartnersBlockContainer>
  );
}
