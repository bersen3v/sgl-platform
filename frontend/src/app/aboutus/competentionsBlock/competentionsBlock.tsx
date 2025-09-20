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
  width: 100%;
  gap: 1em;
  flex-wrap: wrap;
`;

export default function CompetentionsBlock() {
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
          {intl.formatMessage({ id: "ourcompetentions" })}
        </TextStyle.ProductHeader>
        <ProductsLayout>
          <ProductRoadTile
            header={intl.formatMessage({ id: "service1Header" })}
            onClick={() => {
              router.push("/search");
            }}
            type={"marketplace"}
            counter={"01"}
          ></ProductRoadTile>

          <ProductRoadTile
            header={intl.formatMessage({ id: "service2Header" })}
            onClick={() => {
              router.push("/search");
            }}
            type={"marketplace"}
            counter={"02"}
          ></ProductRoadTile>

          <ProductRoadTile
            header={intl.formatMessage({ id: "service3Header" })}
            onClick={() => {
              router.push("https://sgl.one/");
            }}
            type={"walking"}
            counter={"03"}
          ></ProductRoadTile>

          <ProductRoadTile
            header={intl.formatMessage({ id: "service4Header" })}
            onClick={() => {
              router.push("https://sgl.one/");
            }}
            type={"walking"}
            counter={"04"}
          ></ProductRoadTile>
        </ProductsLayout>
      </ProductsContainer>
    </BlockContainer>
  );
}
