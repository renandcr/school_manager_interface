import { VARIABLES } from "../../styles/global";
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
  row-gap: 70px;
  margin-top: 70px;
  width: 90%;
`;

export const SchoolContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 20px;
  width: 100%;
  .school-container {
    max-width: 100%;
  }
  .school_buttons {
    display: flex;
    flex-wrap: wrap;
    column-gap: 12px;
    row-gap: 12px;
    max-width: 100%;
  }
`;

export const StudentsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
  h1 {
    font-size: 28px;
    line-height: 36px;
    font-weight: 400;
    font-family: ${VARIABLES.fontOne};
    color: ${VARIABLES.blueColor1};
  }
  .students_container {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

export const CoursesContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  border-top: ${`solid 1px ${VARIABLES.grayBorder}`};
  gap: 50px;
  h2 {
    font-size: 28px;
    line-height: 36px;
    font-weight: 400;
    font-family: ${VARIABLES.fontOne};
    color: ${VARIABLES.blueColor1};
  }
  .courses_container {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    gap: 30px;
  }
  .course_buttons {
    max-width: 100%;
  }
`;
