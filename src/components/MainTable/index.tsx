import { default as styled } from "styled-components";

import CompaniesTable from "@/components/CompaniesTable";
import StaffTable from "@/components/StaffTable";

const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  max-width: 95vw;
  margin: auto;
  align-items: flex-start;
  background-color: rgb(45, 129, 224);
  overflow: hidden;
  gap: 20px;
`;

const TableScrollWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
  position: relative;
  flex: 0 0 50%;
  background-color: #fff;
  border-radius: 10px;
`;

const MainTable = () => {
  return (
    <TableWrapper>
      <TableScrollWrapper>
        <CompaniesTable />
      </TableScrollWrapper>
      <TableScrollWrapper>
        <StaffTable />
      </TableScrollWrapper>
    </TableWrapper>
  );
};

export default MainTable;
