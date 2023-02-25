import styled from "styled-components";

export const MainHomePageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-top: 70px;
  width: 90%;
`;

export const HomePageSchoolsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .schools_container {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
`;
