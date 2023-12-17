import { default as styled } from "styled-components";

import MainTable from "@/components/MainTable";
import Heading from "@/components/Heading";

const PageWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 50px;
  background-color: rgb(45, 129, 224);
`;

const Main = () => {
  return (
    <>
      <Heading />
      <PageWrapper>
        <MainTable />
      </PageWrapper>
    </>
  );
};

export default Main;
