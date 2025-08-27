import { desktopMinWidth } from "@/shared/constants/adaptive";
import { MyColors } from "@/shared/styles";
import { TextStyle } from "@/shared/styles/MyTypography/textStyles";
import { styled } from "styled-components";

const PartnerContainer = styled.div`
  display: flex;
  flex: 1;
  /* flex-grow: 1; */
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1em;
  background-color: ${MyColors.dark3};
  padding: 0.5em;
  /* max-width: 30vw; */
  border-radius: 1em;
  padding-right: 2em;
`;

const PartnerImage = styled.img`
  /* display: flex;
  flex: 1; */
  border-radius: 0.6em;
  max-height: 6em;
  object-fit: cover;
  justify-content: center;
  align-items: center;

  filter: grayscale(100%);
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(0%);
  }
  /* box-shadow: 1px 70px 70px 0px ${MyColors.green}25; */
  /* border-bottom: 0.3em solid ${MyColors.green}; */
`;

const PartnerInfo = styled.div`
  display: flex;
  flex: 1;
  /* flex-grow: 1; */
  flex-direction: column;
  align-items: flex-start;
  padding-top: 0.5em;
  padding-bottom: 1em;
  gap: 0.6em;
  min-width: 40vw;

  @media (min-width: ${desktopMinWidth}px) {
    min-width: 20vw;
  }
`;

export default function PartnerCard({
  img,
  name,
  position,
}: {
  img: string;
  name: string;
  position: string;
}) {
  return (
    <PartnerContainer>
      <PartnerImage src={img}></PartnerImage>
      <PartnerInfo>
        <TextStyle.ProductHeader>{name}</TextStyle.ProductHeader>
        <TextStyle.ProductText>{position}</TextStyle.ProductText>
      </PartnerInfo>
    </PartnerContainer>
  );
}
