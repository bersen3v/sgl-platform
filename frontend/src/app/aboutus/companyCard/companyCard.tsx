import { styled } from "styled-components";
import { useIntl } from "react-intl";
import { MyColors } from "@/shared/styles";
import { TextStyle } from "@/shared/styles/MyTypography/textStyles";
const CompanyInfoContainer = styled.div`
  padding: 2rem;
  padding-top: 0px;
  max-width: 800px;
  margin: 0 auto;
  font-family: "Inter", sans-serif;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
  background: ${MyColors.dark3};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  background: ${MyColors.bg2};
  padding: 0;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const InfoLabel = styled.div`
  padding: 1rem 1.5rem;
  font-weight: 600;
  color: ${MyColors.green};
  background-color: ${MyColors.dark2};
  font-family: "helvetica";
  font-size: 1.2em;
  text-align: left;
  font-weight: 450;
  color: ${MyColors.green};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  line-height: 1.2;

  @media (min-width: 769px) {
    width: 35%;
    border-right: 1px solid ${MyColors.dark3};
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

const InfoValue = styled.div`
  padding: 1rem 1.5rem;
  color: ${MyColors.white};
  line-height: 1.5;
  flex: 1;
  font-family: "helvetica";
  font-size: 1em;
  font-weight: 450;
  color: #ffffff;
  line-height: 1.2;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem 1rem;
  }
`;

// Обновленный компонент
export default function CompanyInfo() {
  const intl = useIntl();

  const companyData = {
    fullName: intl.formatMessage({ id: "fullNameValue" }),
    shortName: intl.formatMessage({ id: "shortNameValue" }),
    bin: "220440042034",
    registrationDate: intl.formatMessage({ id: "registrationDateValue" }),
    director: intl.formatMessage({ id: "directorValue" }),
    address: intl.formatMessage({ id: "address" }),
    download: intl.formatMessage({ id: "download" }),
  };

  return (
    <CompanyInfoContainer>
      <InfoGrid>
        <InfoItem>
          <InfoLabel>{intl.formatMessage({ id: "fullName" })}</InfoLabel>
          <InfoValue>{companyData.fullName}</InfoValue>
        </InfoItem>

        <InfoItem>
          <InfoLabel>{intl.formatMessage({ id: "shortName" })}</InfoLabel>
          <InfoValue>{companyData.shortName}</InfoValue>
        </InfoItem>

        <InfoItem>
          <InfoLabel>{intl.formatMessage({ id: "bin" })}</InfoLabel>
          <InfoValue>{companyData.bin}</InfoValue>
        </InfoItem>

        <InfoItem>
          <InfoLabel>
            {intl.formatMessage({ id: "registrationDate" })}
          </InfoLabel>
          <InfoValue>{companyData.registrationDate}</InfoValue>
        </InfoItem>

        <InfoItem>
          <InfoLabel>{intl.formatMessage({ id: "director" })}</InfoLabel>
          <InfoValue>{companyData.director}</InfoValue>
        </InfoItem>

        <InfoItem>
          <InfoLabel>{intl.formatMessage({ id: "location" })}</InfoLabel>
          <InfoValue>{companyData.address}</InfoValue>
        </InfoItem>

        <InfoItem>
          <InfoLabel>{intl.formatMessage({ id: "ustav" })}</InfoLabel>
          <a href="/toosglrules.pdf" download>
            <InfoValue style={{ textDecoration: "underline" }}>
              {companyData.download}
            </InfoValue>
          </a>
        </InfoItem>

        <InfoItem>
          <InfoLabel>{intl.formatMessage({ id: "astana_member" })}</InfoLabel>
          <a href="/astanahub_membership.pdf" download>
            <InfoValue style={{ textDecoration: "underline" }}>
              {companyData.download}
            </InfoValue>
          </a>
        </InfoItem>
      </InfoGrid>
    </CompanyInfoContainer>
  );
}
