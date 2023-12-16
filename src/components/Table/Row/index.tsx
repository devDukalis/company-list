import { default as styled } from "styled-components";

const Row = styled.tr<{ selected?: boolean }>`
  background-color: ${({ selected }) => (selected ? "#81adfa" : "inherit")};
  border-top: 1px solid grey;
`;

export default Row;
