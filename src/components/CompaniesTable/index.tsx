import { useAppSelector } from "@/redux/hooks";
import { allCompaniesInState } from "@/redux/selectors";

import { default as styled } from "styled-components";

import CompanyRow from "@/components/CompaniesTable/CompanyRow";
import Table from "@/components/Table";
import CompanyHeader from "@/components/CompaniesTable/CompanyHeader";

const LastRowWrapper = styled.tbody`
  position: sticky;
  bottom: 0px;
  background-color: #2a7cc4;
  min-height: 100px;
`;

const Caption = styled.caption`
  padding: 20px;
  background-color: #2a7cc4;
  font-size: 20px;
  color: white;
  border-bottom: 1px solid white;
`;

const CompaniesTable = () => {
  const companiesArray = useAppSelector(allCompaniesInState);

  return (
    <Table>
      <Caption>Компании</Caption>

      <CompanyHeader />
      <tbody>
        {companiesArray.map((company) => (
          <CompanyRow company={company} key={`${company.id}-main`} id={company.id} />
        ))}
      </tbody>

      <LastRowWrapper>
        <CompanyRow />
      </LastRowWrapper>
    </Table>
  );
};

export default CompaniesTable;
