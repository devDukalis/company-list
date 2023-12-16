import { useAppSelector } from "@/redux/hooks";
import { selectedCompaniesInState } from "@/redux/selectors";

import { default as styled } from "styled-components";

import Table from "@/components/Table";
import StaffHeader from "@/components/StaffTable/StaffHeader";
import StaffRow from "@/components/StaffTable/StaffRow";
import { Fragment } from "react";

const LastRowWrapper = styled.tbody`
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

const StaffTable = () => {
  const selectedCompanies = useAppSelector(selectedCompaniesInState);

  if (!selectedCompanies.length) return null;

  return (
    <Table>
      <Caption>Сотрудники</Caption>
      <StaffHeader />

      {selectedCompanies.map((company) => (
        <Fragment key={company.id}>
          <tbody>
            {company?.staff?.map((employee) => (
              <StaffRow
                employee={employee}
                companyId={company.id}
                key={`${employee.id}-${company.id}-main`}
              />
            ))}
          </tbody>

          <LastRowWrapper>
            <StaffRow companyId={company.id} />
          </LastRowWrapper>
        </Fragment>
      ))}
    </Table>
  );
};

export default StaffTable;
