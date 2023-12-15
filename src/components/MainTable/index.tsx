import styledComponent from "styled-components";

const TableWrapper = styledComponent.div`
  width: 100%;
  height: 100%;
  background: gray;
`;

const MainTable = () => {
  return <TableWrapper></TableWrapper>;
};

export default MainTable;
