import { MyColors } from "@/shared/styles";
import { TextStyle } from "@/shared/styles/MyTypography/textStyles";
import { styled } from "styled-components";

const CustomButtonStyle = styled.button`
  background-color: ${MyColors.dark3};
  outline: none;
  border-width: 0px;
  cursor: pointer;
  padding: 1.2em 2.5em;
  border-radius: 90px;

  position: relative;
  z-index: 2;

  &:hover {
    transition: all 0.3s ease;
    transform: translateY(-5px);
    border: 2px solid ${MyColors.green}80;
  }

  color: ${MyColors.green};
`;

export default function CustomBlackButton({
  placeholder,
  onClick,
}: {
  placeholder: string;
  onClick: () => void;
}) {
  return (
    <CustomButtonStyle>
      <TextStyle.Button onClick={onClick}>{placeholder}</TextStyle.Button>
    </CustomButtonStyle>
  );
}
