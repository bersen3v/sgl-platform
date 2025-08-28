import { MyColors } from "@/shared/styles";
import { TextStyle } from "@/shared/styles/MyTypography/textStyles";
import { FiLink2 } from "react-icons/fi";
import { styled } from "styled-components";
import { Item10 } from "./3d/item10";
import { Canvas } from "@react-three/fiber";
import { Item3 } from "./3d/item3";
import { Item8 } from "./3d/item8";
import { Item9 } from "./3d/item9";
import { useRouter } from "next/navigation";

const ProductContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${MyColors.dark3};
  border-radius: 0.5em;
  padding: 1em;
  justify-content: space-between;
  gap: 1em;
  align-items: center;
`;

const CanvasContainer = styled.div`
  width: 10em;
  height: 10em;
  align-items: center;
`;

const CircleButton = styled.div`
  display: flex;
  background-color: ${MyColors.green};
  border-radius: 90px;
  min-width: 3em;
  min-height: 3em;
  justify-content: center;
  align-items: center;
  padding: 1em;
  cursor: pointer;
  box-shadow: 0px 0px 50px ${MyColors.green}50;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ProductMid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export default function ProductCard({
  type,
  header,
  text,
  link,
}: {
  type: "analytics" | "marketplace" | "walking";
  header: string;
  text: string;
  link: string;
}) {
  const router = useRouter();
  const getIcon = () => {
    switch (type) {
      case "analytics":
        return <Item10></Item10>;
      case "marketplace":
        return <Item8></Item8>;
      case "walking":
        return <Item9></Item9>;
    }
  };
  return (
    <ProductContainer>
      <CanvasContainer>
        <Canvas>{getIcon()}</Canvas>
      </CanvasContainer>

      <ProductMid>
        <ProductInfo>
          <TextStyle.ProductHeader>{header}</TextStyle.ProductHeader>
          <TextStyle.ProductText>{text}</TextStyle.ProductText>
        </ProductInfo>

        <div style={{ display: "flex" }}>
          <CircleButton
            onClick={() => {
              router.push("/search");
            }}
          >
            <FiLink2 size={20} color={MyColors.dark1} />
          </CircleButton>
        </div>
      </ProductMid>
    </ProductContainer>
  );
}
