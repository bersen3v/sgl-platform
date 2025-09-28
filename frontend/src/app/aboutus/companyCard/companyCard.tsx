import { styled } from "styled-components";
import { useIntl } from "react-intl";
import { MyColors } from "@/shared/styles";

// Styled Components
const CompanyInfoContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  font-family: "Inter", sans-serif;
`;

const CompanyTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: ${MyColors.bg2};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid ${MyColors.dark3};

  &:last-child {
    border-bottom: none;
  }

  &:nth-child(even) {
    background-color: ${MyColors.dark3};
  }
`;

const TableHeader = styled.th`
  padding: 1rem 1.5rem;
  text-align: left;
  font-weight: 600;
  color: ${MyColors.green};
  background-color: ${MyColors.dark2};
  width: 35%;
  /* border-right: 1px solid #e5e7eb; */
`;

const TableCell = styled.td`
  padding: 1rem 1.5rem;
  color: ${MyColors.white};
  line-height: 1.5;
`;

const CompanySection = styled.div`
  margin-bottom: 2rem;
`;

export default function CompanyInfo() {
  const intl = useIntl();

  const companyData = {
    fullName: intl.formatMessage({ id: "fullNameValue" }),
    shortName: intl.formatMessage({ id: "shortNameValue" }),
    bin: "220440042034",
    registrationDate: intl.formatMessage({ id: "registrationDateValue" }),
    director: intl.formatMessage({ id: "directorValue" }),
    address: intl.formatMessage({ id: "address" }),
  };
  return (
    <CompanyInfoContainer>
      <CompanySection>
        <CompanyTable>
          <tbody>
            <TableRow>
              <TableHeader>
                {intl.formatMessage({ id: "fullName" })}
              </TableHeader>
              <TableCell>{companyData.fullName}</TableCell>
            </TableRow>

            <TableRow>
              <TableHeader>
                {intl.formatMessage({ id: "shortName" })}
              </TableHeader>
              <TableCell>{companyData.shortName}</TableCell>
            </TableRow>

            <TableRow>
              <TableHeader>{intl.formatMessage({ id: "bin" })}</TableHeader>
              <TableCell>{companyData.bin}</TableCell>
            </TableRow>

            <TableRow>
              <TableHeader>
                {intl.formatMessage({ id: "registrationDate" })}
              </TableHeader>
              <TableCell>{companyData.registrationDate}</TableCell>
            </TableRow>

            <TableRow>
              <TableHeader>
                {intl.formatMessage({ id: "director" })}
              </TableHeader>
              <TableCell>{companyData.director}</TableCell>
            </TableRow>

            <TableRow>
              <TableHeader>
                {intl.formatMessage({ id: "location" })}
              </TableHeader>
              <TableCell>{companyData.address}</TableCell>
            </TableRow>
          </tbody>
        </CompanyTable>
      </CompanySection>
    </CompanyInfoContainer>
  );
}
