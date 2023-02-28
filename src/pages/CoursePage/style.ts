import { VARIABLES } from "../../styles/global";
import styled from "styled-components";
import { motion } from "framer-motion";

export const MainCoursePageContainer = styled(motion.main)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const CoursePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 70px;
  margin-top: 70px;
  width: 90%;
`;

export const CourseContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 20px;
  width: 100%;
  .course_container {
    max-width: 100%;
  }
  .course_buttons {
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
  padding-top: 40px;
  border-top: ${`solid 1px ${VARIABLES.grayBorder}`};
  gap: 40px;
  width: 100%;
  h1 {
    font-size: 28px;
    line-height: 36px;
    font-weight: 400;
    font-family: ${VARIABLES.fontOne};
    color: ${VARIABLES.blueColor1};
  }
  div {
    display: flex;
    flex-direction: column;
    row-gap: 35px;
  }
`;
