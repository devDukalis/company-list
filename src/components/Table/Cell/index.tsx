import { default as styled } from "styled-components";

const Cell = styled("td")`
  min-width: 100px;
  padding: 20px 25px;
  text-align: ${(props) => props.align || "center"};
`;

export default Cell;
