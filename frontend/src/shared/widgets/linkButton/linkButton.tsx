import { MyColors } from "@/shared/styles";
import { TextStyle } from "@/shared/styles/MyTypography/textStyles";
import { FiLink2 } from "react-icons/fi";
import { IoLink } from "react-icons/io5";
import { styled } from "styled-components";

const ButtonStyle = styled.button`
  display: flex;
  background-color: rgba(0, 0, 0, 0);
  outline: none;
  border-width: 0px;

  &:hover {
    transition: all 0.3s ease;
    transform: translateY(-5px);
  }
`;

const ButtonIcon = styled.div`
  background-color: ${MyColors.green};
  outline: none;
  border-width: 0px;
  cursor: pointer;
  padding: 1em 1em;
  border-radius: 90px;
  min-width: 4em;
`;

const ButtonMain = styled.div`
  background-color: ${MyColors.green};
  outline: none;
  border-width: 0px;
  cursor: pointer;
  padding: 1.2em 2.5em;
  border-radius: 90px;
  margin-left: -1em;
`;

const CircleButton = styled.div`
  display: flex;
  background-color: ${MyColors.green};
  border-radius: 90px;
  min-width: 4em;
  min-height: 3em;
  justify-content: center;
  align-items: center;
  padding: 1em;
  cursor: pointer;
  box-shadow: 0px 0px 50px ${MyColors.green}50;
`;

export default function LinkButton({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <ButtonStyle onClick={onClick}>
      <div style={{ display: "flex" }}>
        <CircleButton onClick={onClick}>
          <FiLink2 size={"1.5em"} color={MyColors.dark1} />
        </CircleButton>
      </div>
      {/* <ButtonIcon>
        <IoLink color={MyColors.dark1} size={"1.5em"} />
      </ButtonIcon> */}
      <ButtonMain>
        <TextStyle.Button style={{ color: MyColors.dark1 }}>
          {text}
        </TextStyle.Button>
      </ButtonMain>
    </ButtonStyle>
  );
}
