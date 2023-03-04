import AddStudentToCourseModal from "../../components/Modals/AddStudentToCourseModal";
import { IDatabaseStudent } from "../../store/models/student/actions";
import StudentInformation from "../../components/StudentInformation";
import { IDatabaseCourse } from "../../store/models/course/actions";
import CourseInformation from "../../components/CourseInformation";
import WarningModal from "../../components/Modals/WarningModal";
import DefaultButton from "../../components/DefaultButton";
import { AnimatePresence } from "framer-motion";
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
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [showWarningModalOnCoursePage, setShowWarningModalOnCoursePage] =
    React.useState(false);
  const [removeStudentFromCourse, setRemoveStudentFromCourse] =
    React.useState(false);
  const selectedStudent: IDatabaseStudent = useTypedSelector(
    (state) => state.selectedStudent
  );
  const selectedCourse: IDatabaseCourse = useTypedSelector(
    (state) => state.selectedCourse
  );
  const [showAddStudentModal, setShowAddStudentModal] = React.useState(false);
  const [deleteCourse, setDeleteCourse] = React.useState(false);
  const [coursePage, setCoursePage] = React.useState(true);

  return (
    <>
      <AnimatePresence>
        {showAddStudentModal && (
          <AddStudentToCourseModal
            setShowAddStudentModal={setShowAddStudentModal}
          />
        )}
        {showWarningModalOnCoursePage && (
          <WarningModal
            setShowWarningModalOnCoursePage={setShowWarningModalOnCoursePage}
            removeStudentFromCourse={removeStudentFromCourse}
            setDeleteCourse={setDeleteCourse}
            deleteCourse={deleteCourse}
          >
            {deleteCourse ? (
              <p>
                <span className="warning_red">
                  Tem certeza que deseja continuar?
                </span>{" "}
                Esta ação removerá o curso <span>{selectedCourse.name}</span> e
                todos os registros relacionados a ele. Isso não pode ser
                desfeito!
              </p>
            ) : (
              <p>
                Remover{" "}
                <span>
                  {selectedStudent.first_name + " " + selectedStudent.last_name}
                </span>{" "}
                do curso {selectedCourse.name}?
              </p>
            )}
          </WarningModal>
        )}
      </AnimatePresence>
      <Header coursePage={coursePage} setCoursePage={setCoursePage} />
      <MainCoursePageContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
      >
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
                onClick={() => {
                  setShowWarningModalOnCoursePage(true);
                  setDeleteCourse(true);
                }}
                backgroundcolor="transparent"
                border="solid 1px red"
                height="47px"
                color="red"
              >
                {"Excluir curso"}
              </DefaultButton>
            </div>
          </CourseContainer>
          <StudentsContainer>
            <h1>Alunos inscritos no curso</h1>
            <div>
              {selectedCourse.students.length > 0 &&
                selectedCourse.students
                  .sort((a, b) => {
                    if (a.first_name < b.first_name) return -1;
                    if (a.first_name > b.first_name) return 1;
                    return 0;
                  })
                  .map((current) => (
                    <StudentInformation
                      first_name={current.first_name}
                      last_name={current.last_name}
                      email={current.email}
                      key={current.id}
                      setRemoveStudentFromCourse={setRemoveStudentFromCourse}
                      setShowWarningModalOnCoursePage={
                        setShowWarningModalOnCoursePage
                      }
                      removeOption
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
