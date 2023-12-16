import styledComponent from "styled-components";

import MainTable from "@/components/MainTable";

const PageWrapper = styledComponent.section`
  padding: 50px;
  width: 100vw;
  height: 100vh;
  background-color: rgb(244, 241, 232);
`;

const Main = () => {
  return (
    <PageWrapper>
      <MainTable />
    </PageWrapper>
  );
};

export default Main;
