import { FC } from "react";
import { default as styled } from "styled-components";

interface Props {
  value?: string;
}

const HeadingWrapper = styled("div")`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: large;
  background-color: #2a7cc4;
  color: #ffffff;
`;

const Heading: FC<Props> = ({ value = "Список компаний" }) => {
  return (
    <HeadingWrapper>
      <h1>{value}</h1>
    </HeadingWrapper>
  );
};

export default Heading;
