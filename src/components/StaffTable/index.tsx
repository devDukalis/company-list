import { useAppSelector } from "@/redux/hooks";
import { selectedCompaniesInState } from "@/redux/selectors";

import styledComponent from "styled-components";

import Table from "@/components/Table";
import StaffHeader from "@/components/StaffTable/StaffHeader";
import StaffRow from "@/components/StaffTable/StaffRow";
import Row from "@/components/Table/Row";
import Cell from "@/components/Table/Cell";

const CellForCompanyTitle = styledComponent(Cell)`
  font-size: 25px;
  font-weight: 500;
`;

const StaffTable = () => {
  const selectedCompanies = useAppSelector(selectedCompaniesInState);

  if (!selectedCompanies.length) return null;

  return (
    <Table>
      <StaffHeader />

      {selectedCompanies.map((company) => (
        <tbody key={company.id}>
          <Row>
            <CellForCompanyTitle>Компания: {company.title}</CellForCompanyTitle>
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
