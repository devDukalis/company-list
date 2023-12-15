import { useAppSelector } from "@/redux/hooks";
import { allCompaniesInState } from "@/redux/selectors";

import CompanyRow from "@/components/CompaniesTable/CompanyRow";
import Table from "@/components/Table";
import CompanyHeader from "@/components/CompaniesTable/CompanyHeader";

const CompaniesTable = () => {
  const companiesArray = useAppSelector(allCompaniesInState);

  return (
    <Table>
      <CompanyHeader />
      <tbody>
        {companiesArray.map((company) => (
          <CompanyRow company={company} key={`${company.id}-main`} />
        ))}
        <CompanyRow />
      </tbody>
    </Table>
  );
};

export default CompaniesTable;
