import { IDatabaseCourse } from "../../store/models/course/actions";
import CourseInformation from "../../components/CourseInformation";
import DefaultButton from "../../components/DefaultButton";
import { VARIABLES } from "../../styles/global";
import { useTypedSelector } from "../../store";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as React from "react";

import {
  MainCoursePageContainer,
  CoursePageContainer,
  StudentsContainer,
  CourseContainer,
} from "./style";

const CoursePage = () => {
  const selectedCourse: IDatabaseCourse = useTypedSelector(
    (state) => state.selectedCourse
  );

  return (
    <>
      <Header />
      <MainCoursePageContainer>
        <CoursePageContainer>
          <CourseContainer>
            <div className="course_container">
              <CourseInformation current={selectedCourse} />
            </div>
            <div className="course_buttons">
              <DefaultButton height="47px">{"Adicionar aluno"}</DefaultButton>
              <DefaultButton
                height="47px"
                backgroundColor="transparent"
                color={VARIABLES.blueColor}
                border={`solid 1px ${VARIABLES.blueColor}`}
              >
                {"Excluir curso"}
              </DefaultButton>
            </div>
          </CourseContainer>
          <StudentsContainer>
            <h1>Alunos inscritos no curso</h1>
          </StudentsContainer>
        </CoursePageContainer>
      </MainCoursePageContainer>
      <Footer />
    </>
  );
};

export default CoursePage;
