import { desktopMinWidth } from "@/shared/constants/adaptive";
import { MyColors } from "@/shared/styles";
import { TextStyle } from "@/shared/styles/MyTypography/textStyles";
import { useRouter } from "next/navigation";
import { FiLink2 } from "react-icons/fi";
import { styled } from "styled-components";

const ProductCircleStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 70vw;
  height: 70vw;

  @media (min-width: ${desktopMinWidth}px) {
    width: 25vw;
    height: 25vw;
  }

  border: solid 2px ${MyColors.green};
  border-radius: 900px;
  gap: 1em;
`;

const CircleButton = styled.div`
  display: flex;
  background-color: ${MyColors.green};
  border-radius: 90px;
  min-width: 3em;
  min-height: 3em;
  justify-content: center;
  align-items: center;
  padding: 0.6em;
  cursor: pointer;
  box-shadow: 0px 0px 50px ${MyColors.green}50;
`;

export default function EcosystemTile({
  name,
  link,
}: {
  name: string;
  link: string;
}) {
  const router = useRouter();
  return (
    <ProductCircleStyle>
      <TextStyle.ProductHeader
        style={{
          fontSize: "1.2em",
          fontWeight: 450,
          textAlign: "center",
          opacity: 1,
          padding: "0em 3em",
        }}
      >
        {name}
      </TextStyle.ProductHeader>
      <CircleButton
        onClick={() => {
          router.push(link);
        }}
      >
        <FiLink2 size={"1.2em"} color={MyColors.dark1} />
      </CircleButton>
    </ProductCircleStyle>
  );
}
