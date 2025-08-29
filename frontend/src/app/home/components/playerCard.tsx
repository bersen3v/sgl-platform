import { MyColors } from "@/shared/styles";
import { TextStyle } from "@/shared/styles/MyTypography/textStyles";
import { styled } from "styled-components";
// import { Saturate } from "react-native-color-matrix-image-filters";

const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  max-width: 15em;
`;

const PlayerImageContainer = styled.div`
  border-radius: 900px;
  max-height: 15em;
  width: 15em;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 70px 70px 0px ${MyColors.green}25;
  border-bottom: 0.3em solid ${MyColors.green};
  /* filter: saturate(0%); */
`;

const PlayerImage = styled.img`
  border-radius: 900px;
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: saturate(0%);
`;

const PlayerInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 4em;
  padding-top: 0px;
  padding-bottom: 0px;
  gap: 0.6em;
`;

export default function PlayerCard({
  img,
  name,
  position,
}: {
  img: string;
  name: string;
  position: string;
}) {
  return (
    <PlayerContainer>
      <PlayerImageContainer>
        <PlayerImage src={img}></PlayerImage>
      </PlayerImageContainer>

      <PlayerInfo>
        <TextStyle.ProductHeader style={{ textAlign: "center" }}>
          {name}
        </TextStyle.ProductHeader>
        <TextStyle.ProductText style={{ textAlign: "center" }}>
          {position}
        </TextStyle.ProductText>
      </PlayerInfo>
    </PlayerContainer>
  );
}
