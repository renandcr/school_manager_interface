import AddStudentToCourseModal from "../../components/Modals/AddStudentToCourseModal";
import StudentInformation from "../../components/StudentInformation";
import { IDatabaseCourse } from "../../store/models/course/actions";
import CourseInformation from "../../components/CourseInformation";
import WarningModal from "../../components/Modals/WarningModal";
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
  const [showAddStudentModal, setShowAddStudentModal] = React.useState(false);
  const selectedCourse: IDatabaseCourse = useTypedSelector(
    (state) => state.selectedCourse
  );
  const [showWarningModal, setShowWarningModal] = React.useState(false);
  const [coursePage, setCoursePage] = React.useState(true);

  return (
    <>
      <AddStudentToCourseModal
        setShowAddStudentModal={setShowAddStudentModal}
        showAddStudentModal={showAddStudentModal}
      />
      <WarningModal
        setShowWarningModal={setShowWarningModal}
        showWarningModal={showWarningModal}
      >
        <span className="warning_red">Tem certeza que deseja continuar?</span>{" "}
        Você está para remover o curso <span>{selectedCourse.name}</span> e
        todos os arquivos relacionados a ele. Isso não pode ser desfeito!
      </WarningModal>
      <Header coursePage={coursePage} setCoursePage={setCoursePage} />
      <MainCoursePageContainer>
        <CoursePageContainer>
          <CourseContainer>
            <div className="course_container">
              <CourseInformation current={selectedCourse} />
            </div>
            <div className="course_buttons">
              <DefaultButton
                height="47px"
                onClick={() => setShowAddStudentModal(true)}
              >
                {"Adicionar aluno"}
              </DefaultButton>
              <DefaultButton
                border={`solid 1px ${VARIABLES.blueColor}`}
                onClick={() => setShowWarningModal(true)}
                backgroundColor="transparent"
                color={VARIABLES.blueColor}
                height="47px"
              >
                {"Excluir curso"}
              </DefaultButton>
            </div>
          </CourseContainer>
          <StudentsContainer>
            <h1>Alunos inscritos no curso</h1>
            <div>
              {selectedCourse.students.length > 0 &&
                selectedCourse.students.map((current) => (
                  <StudentInformation
                    first_name={current.first_name}
                    last_name={current.last_name}
                    email={current.email}
                    key={current.id}
                  />
                ))}
            </div>
          </StudentsContainer>
        </CoursePageContainer>
      </MainCoursePageContainer>
      <Footer />
    </>
  );
};

export default CoursePage;
