import { MyColors } from "@/shared/styles";
import { TextStyle } from "@/shared/styles/MyTypography/textStyles";
import { styled } from "styled-components";
import { FiLink2 } from "react-icons/fi";
import { useIntl } from "react-intl";
import { useRouter } from "next/navigation";
import ProductCard from "@/app/home/components/productCard";
import ProductRoadTile from "./components/roadTile";

const BlockContainer = styled.div`
  display: flex;
  padding: 2em;
  padding-top: 0px;
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
  flex-direction: column;
  width: 100%;
  gap: 1em;
  /* flex-wrap: wrap; */
`;

export default function ProductRoadBlock() {
  const intl = useIntl();
  const router = useRouter();
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
          Как это работает?
          {/* {intl.formatMessage({ id: "products" })} */}
        </TextStyle.ProductHeader>
        <ProductsLayout>
          <ProductRoadTile
            header={
              "Вы загружаете готовое видео или передаёте ссылку на трансляцию"
            }
            text={"От вас нужен только ваш медиаконтент. Больше ничего!"}
            onClick={() => {
              router.push("/search");
            }}
            type={"marketplace"}
            counter={"01"}
          ></ProductRoadTile>

          <ProductRoadTile
            header={"Система обрабатывает видеопоток"}
            text={
              "С помощью алгоритмов компьютерного зрения мы в тот же момент получаем необходимую статистику и отдаём в виде API, JSON или текста"
            }
            onClick={() => {
              router.push("/search");
            }}
            type={"marketplace"}
            counter={"02"}
          ></ProductRoadTile>

          <ProductRoadTile
            header={"Вы получаете аналитику вашего киберспортивного события"}
            text={
              "Далее вы можете воспользоваться другими нашими сервисами для того, чтобы на основе статистики добавить поверх вашего видеопотока кастомные худы. "
            }
            onClick={() => {
              router.push("https://sgl.one/");
            }}
            type={"walking"}
            counter={"03"}
          ></ProductRoadTile>
        </ProductsLayout>
      </ProductsContainer>
    </BlockContainer>
  );
}
