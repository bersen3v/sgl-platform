import { MyColors } from "@/shared/styles";
import { TextStyle } from "@/shared/styles/MyTypography/textStyles";
import { styled } from "styled-components";
import { FiLink2 } from "react-icons/fi";
import ProductCard from "../components/productCard";

const BlockContainer = styled.div`
  display: flex;
  padding: 2em;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
  /* height: 100vh; */
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  background-color: ${MyColors.dark2};
  padding: 1em;
  gap: 1em;
  border-radius: 1em;
  flex-direction: column;
`;

const ProductsLayout = styled.div`
  display: flex;
  width: 100%;
  gap: 1em;
  flex-wrap: wrap;
`;

export default function ProductsBlock() {
  return (
    <BlockContainer>
      <ProductsContainer>
        <TextStyle.ProductHeader
          style={{
            paddingLeft: "0.5em",
            paddingTop: "0.2em",
            opacity: 0.7,
            fontWeight: 500,
          }}
        >
          Продукты
        </TextStyle.ProductHeader>
        <ProductsLayout>
          <ProductCard
            header={"Аналитика"}
            text={
              "умная realtime аналитика видеопотока, обученная под отдельные киберспортивные дисциплины"
            }
            link={""}
            type={"analytics"}
          ></ProductCard>

          <ProductCard
            header={"Маркетплейс"}
            text={
              "площадка для удобной продажи и покупки прав на крупнейшие киберспортивные события"
            }
            link={""}
            type={"marketplace"}
          ></ProductCard>

          <ProductCard
            header={"Сопровождение"}
            text={
              "полный цикл создания киберспортивного мероприятия - от организации события до работы над видеопотоком"
            }
            link={""}
            type={"walking"}
          ></ProductCard>
        </ProductsLayout>
      </ProductsContainer>
    </BlockContainer>
  );
}
