import { MyColors } from "@/shared/styles";
import { TextStyle } from "@/shared/styles/MyTypography/textStyles";
import { useIntl } from "react-intl";
import { styled } from "styled-components";

const BlockContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2em;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${MyColors.dark2};
`;

const FooterHalfPart = styled.div`
  display: flex;
  flex: 1;
  /* justify-content: flex-end; */
  align-items: flex-end;
  height: 100%;
`;
const FooterHalfPartRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.5em;
  align-items: flex-end;
`;

export default function Footer() {
  const intl = useIntl();
  return (
    <BlockContainer>
      <FooterHalfPart>
        <img
          onClick={() => {
            // router.push("/");
          }}
          src="/icons/logo.png"
          style={{
            height: 30,
            objectFit: "cover",
          }}
        ></img>
      </FooterHalfPart>
      <FooterHalfPartRight>
        <TextStyle.FooterText>hello@sgl.com</TextStyle.FooterText>
        <TextStyle.FooterText>+79991234556</TextStyle.FooterText>
        <div style={{ height: "5em" }}></div>
        <TextStyle.ProductText>
          {intl.formatMessage({ id: "too" })}
        </TextStyle.ProductText>
      </FooterHalfPartRight>
    </BlockContainer>
  );
}
