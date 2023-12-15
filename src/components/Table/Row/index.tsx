import styledComponent from "styled-components";

const Row = styledComponent("tr")<{ selected?: boolean }>`
  background-color: ${(props) => (props.selected ? "green" : "white")};
  border-top: 1px solid grey;
`;

export default Row;
