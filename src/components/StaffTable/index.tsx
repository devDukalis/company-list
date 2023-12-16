import { useAppSelector } from "@/redux/hooks";
import { selectedCompaniesInState } from "@/redux/selectors";

import Table from "@/components/Table";
import StaffHeader from "@/components/StaffTable/StaffHeader";
import StaffRow from "@/components/StaffTable/StaffRow";
import Row from "@/components/Table/Row";
import Cell from "@/components/Table/Cell";

const StaffTable = () => {
  const selectedCompanies = useAppSelector(selectedCompaniesInState);

  return (
    <Table>
      <StaffHeader />

      {selectedCompanies.map((company) => (
        <tbody key={company.id}>
          <Row>
            <Cell />
            <Cell>{company.title}</Cell>
          </Row>
          {company?.staff?.map((employee) => (
            <StaffRow
              employee={employee}
              companyId={company.id}
              key={`${employee.id}-${company.id}-main`}
            />
          ))}
          <StaffRow companyId={company.id} />
        </tbody>
      ))}
    </Table>
  );
};

export default StaffTable;
