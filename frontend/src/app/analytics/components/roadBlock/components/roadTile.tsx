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
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media (min-width: ${desktopMinWidth}px) {
    max-width: 50%;
  }
`;

export default function ProductRoadTile({
  counter,
  type,
  header,
  text,
  onClick,
}: {
  counter: string;
  type: "analytics" | "marketplace" | "walking";
  header: string;
  text: string;
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
        <TextStyle.ProductHeader style={{ fontSize: "1.2em" }}>
          {header}
        </TextStyle.ProductHeader>
        <TextStyle.ProductText>{text}</TextStyle.ProductText>
      </ProductInfo>
    </ProductContainer>
  );
}
