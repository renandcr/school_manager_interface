import styled from "styled-components";

export const MainSchoolPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const SchoolPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  width: 90%;
`;

export const SchoolContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 20px;
  .school_buttons {
    display: flex;
    flex-wrap: wrap;
    column-gap: 12px;
    row-gap: 12px;
    min-width: fit-content;
  }
`;
