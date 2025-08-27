import { MyColors } from "@/shared/styles";
import { FaPlay } from "react-icons/fa";
import { styled } from "styled-components";

const VideoPreviewContainer = styled.div`
  flex: 1;
  border-radius: 1.5em;
  overflow: hidden;
  border: 0.2em solid ${MyColors.green};
  position: relative;
  /* box-shadow: outer;  */
  box-shadow: 4px 4px 70px ${MyColors.green}30;
`;

const PlayButtonContainer = styled.div`
  display: flex;
  flex: 1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${MyColors.dark1}60;
  justify-content: center;
  align-items: center;
`;

const PlayButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 2em;
  height: 2em; */
  background-color: ${MyColors.green};
  padding: 1em;
  border-radius: 900px;
  box-shadow: 0px 0px 30px ${MyColors.green};
  cursor: pointer;
`;

export default function VideoPreview() {
  return (
    <VideoPreviewContainer>
      <img src={"/sglvideopreview.jpg"} style={{ width: "100%" }}></img>
      <PlayButtonContainer>
        <PlayButton>
          <FaPlay
            color={MyColors.dark1}
            size={"1.5em"}
            style={{ paddingLeft: "0.2em" }}
          />
        </PlayButton>
      </PlayButtonContainer>
    </VideoPreviewContainer>
  );
}
