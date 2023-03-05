import { VARIABLES } from "../../styles/global";
import styled from "styled-components";
import { motion } from "framer-motion";

export const MainSchoolPageContainer = styled(motion.main)`
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

export const SchoolContainer = styled(motion.section)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 20px;
  width: 100%;
  .school_container {
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

export const CoursesContainer = styled(motion.section)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 40px;
  border-top: ${`solid 1px ${VARIABLES.grayBorder}`};
  gap: 20px;
  .courses_container {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    gap: 30px;
    h1 {
      margin-bottom: 20px;
      font-size: 28px;
      line-height: 36px;
      font-weight: 400;
      font-family: ${VARIABLES.fontOne};
      color: ${VARIABLES.blueColor1};
    }
  }
  .course_buttons {
    max-width: 100%;
  }
`;

export const StudentsContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 28px;
    line-height: 36px;
    font-weight: 400;
    font-family: ${VARIABLES.fontOne};
    color: ${VARIABLES.blueColor1};
    border-bottom: ${`solid 1px ${VARIABLES.grayBorder}`};
    padding-bottom: 50px;
  }
  .model_container {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    width: fit-content;
    gap: 30px;
    padding-top: 40px;
  }
`;

export const UsersContainer = styled(StudentsContainer)``;
