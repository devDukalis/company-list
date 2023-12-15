import styledComponent from "styled-components";

import CompaniesTable from "@/components/CompaniesTable";
import StaffTable from "@/components/StaffTable";

const TableWrapper = styledComponent.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 20px;
  max-width: 90vw;
  overflow: auto;
  margin: auto;
  align-items: flex-start;
`;

const MainTable = () => {
  return (
    <TableWrapper>
      <CompaniesTable />
      <StaffTable />
    </TableWrapper>
  );
};

export default MainTable;
