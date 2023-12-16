import { useAppSelector } from "@/redux/hooks";
import { allCompaniesInState } from "@/redux/selectors";

import styledComponent from "styled-components";

import CompanyRow from "@/components/CompaniesTable/CompanyRow";
import Table from "@/components/Table";
import CompanyHeader from "@/components/CompaniesTable/CompanyHeader";

const LastRowWrapper = styledComponent.tbody`
  position: sticky;
  bottom: 0px;
  background-color: rgb(252, 251, 248);
`;

const CompaniesTable = () => {
  const companiesArray = useAppSelector(allCompaniesInState);

  return (
    <Table>
      <CompanyHeader />
      <tbody>
        {companiesArray.map((company) => (
          <CompanyRow company={company} key={`${company.id}-main`} />
        ))}
      </tbody>
      <LastRowWrapper>
        <CompanyRow />
      </LastRowWrapper>
    </Table>
  );
};

export default CompaniesTable;
