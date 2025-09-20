import { MyColors } from "@/shared/styles";
import { TextStyle } from "@/shared/styles/MyTypography/textStyles";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { useIntl } from "react-intl";
import { styled } from "styled-components";
import { RiTelegramLine } from "react-icons/ri";

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
    <BlockContainer id="footer">
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
        <TextStyle.FooterText>sglonekz@gmail.com</TextStyle.FooterText>
        <TextStyle.FooterText>8 776 419 99 01</TextStyle.FooterText>
        <div>
          <RiTelegramLine />
          <FaInstagram />
          <FaWhatsapp />
        </div>
        <div style={{ height: "5em" }}></div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6em" }}>
          <TextStyle.ProductText style={{ textAlign: "right" }}>
            {intl.formatMessage({ id: "too" })}
          </TextStyle.ProductText>
          <TextStyle.ProductText style={{ textAlign: "right" }}>
            Политика конфиденциальности
          </TextStyle.ProductText>
          <TextStyle.ProductText style={{ textAlign: "right" }}>
            Согласие на обработку персональных данных
          </TextStyle.ProductText>
        </div>
      </FooterHalfPartRight>
    </BlockContainer>
  );
}
