import { MyColors } from "@/shared/styles";
import { TextStyle } from "@/shared/styles/MyTypography/textStyles";
import { styled } from "styled-components";
import { FiLink2 } from "react-icons/fi";
import ProductCard from "../components/productCard";
import { useIntl } from "react-intl";

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
  const intl = useIntl();
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
          {intl.formatMessage({ id: "products" })}
        </TextStyle.ProductHeader>
        <ProductsLayout>
          <ProductCard
            header={intl.formatMessage({ id: "analytics" })}
            text={intl.formatMessage({ id: "analyticsDescription" })}
            link={""}
            type={"analytics"}
          ></ProductCard>

          <ProductCard
            header={intl.formatMessage({ id: "marketplace" })}
            text={intl.formatMessage({ id: "marketplaceDescription" })}
            link={""}
            type={"marketplace"}
          ></ProductCard>

          <ProductCard
            header={intl.formatMessage({ id: "walking" })}
            text={intl.formatMessage({ id: "walkingDescription" })}
            link={""}
            type={"walking"}
          ></ProductCard>
        </ProductsLayout>
      </ProductsContainer>
    </BlockContainer>
  );
}
