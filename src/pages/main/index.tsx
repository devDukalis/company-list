import styledComponent from "styled-components";

import MainTable from "@/components/MainTable";

const PageWrapper = styledComponent.section`
  padding: 50px;
  width: 100vw;
  height: 100vh;
`;

const Main = () => {
  return (
    <PageWrapper>
      <MainTable />
    </PageWrapper>
  );
};

export default Main;
