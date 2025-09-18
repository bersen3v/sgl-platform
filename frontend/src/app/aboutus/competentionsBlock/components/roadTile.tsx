import { MyColors } from "@/shared/styles";
import { TextStyle } from "@/shared/styles/MyTypography/textStyles";
import { FiLink2 } from "react-icons/fi";
import { styled } from "styled-components";

import { Canvas } from "@react-three/fiber";
import { desktopMinWidth } from "@/shared/constants/adaptive";

const ProductContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${MyColors.dark3};
  border-radius: 0.5em;
  padding: 1em;
  justify-content: flex-start;
  gap: 2em;
  align-items: flex-start;
  min-width: 48%;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-right: 1em;
`;

export default function ProductRoadTile({
  counter,
  header,
}: {
  counter: string;
  type: "analytics" | "marketplace" | "walking";
  header: string;
  onClick: () => void;
}) {
  return (
    <ProductContainer>
      <TextStyle.ProductHeader
        style={{
          color: MyColors.green,
        }}
      >
        {counter}
      </TextStyle.ProductHeader>
      <ProductInfo>
        <TextStyle.ProductHeader style={{ fontSize: "1.2em", fontWeight: 450 }}>
          {header}
        </TextStyle.ProductHeader>
      </ProductInfo>
    </ProductContainer>
  );
}
