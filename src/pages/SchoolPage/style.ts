import styled from "styled-components";

export const MainSchoolPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const SchoolPageContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 20px;
  div {
    /* width: 100%; */
    /* border: solid 1px blue; */
    ul {
      /* border: solid 1px green; */
      /* width: 100%;
    width: 500px; */
    }
  }

  /* flex-direction: column; */
  /* align-items: center; */
  margin-top: 70px;
  width: 90%;

  .school_buttons {
    display: flex;
    /* justify-content: flex-end; */
    flex-wrap: wrap;
    column-gap: 12px;
    row-gap: 12px;

    /* border: solid 1px; */
    min-width: fit-content;
  }

  /* border: solid 1px red; */
`;
