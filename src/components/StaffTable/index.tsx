import { useAppSelector } from "@/redux/hooks";
import { allCompaniesInState } from "@/redux/selectors";

import CompanyRow from "@/components/CompaniesTable/CompanyRow";
import Table from "@/components/Table";
import StaffHeader from "@/components/StaffTable/StaffHeader";
import StaffRow from "@/components/StaffTable/StaffRow";

const StaffTable = () => {
  const companiesArray = useAppSelector(allCompaniesInState);

  return (
    <Table>
      <StaffHeader />
      <tbody>
        {companiesArray.map((company) => (
          <StaffRow company={company} key={`${company.id}-main`} />
        ))}
        <CompanyRow />
      </tbody>
    </Table>
  );
};

export default StaffTable;
