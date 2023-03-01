import StudentInformationModal from "../../components/Modals/StudentInformationModal";
import CourseInformationModal from "../../components/Modals/CourseInformationModal";
import StudentInformation from "../../components/StudentInformation";
import { IDatabaseSchool } from "../../store/models/school/actions";
import SchoolInformation from "../../components/SchoolInformation";
import CourseInformation from "../../components/CourseInformation";
import WarningModal from "../../components/Modals/WarningModal";
import StudentForm from "../../components/Forms/StudentForm";
import DefaultButton from "../../components/DefaultButton";
import CourseForm from "../../components/Forms/CourseForm";
import { IToken } from "../../store/models/user/actions";
import { AnimatePresence } from "framer-motion";
import { useTypedSelector } from "../../store";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useDispatch } from "react-redux";
import api from "../../assets/axios";
import * as React from "react";

import {
  actionDatabaseCourses,
  IDatabaseCourse,
} from "../../store/models/course/actions";

import {
  MainSchoolPageContainer,
  SchoolPageContainer,
  StudentsContainer,
  CoursesContainer,
  SchoolContainer,
} from "./style";

import {
  actionDatabaseStudents,
  IDatabaseStudent,
} from "../../store/models/student/actions";

const SchoolPage = () => {
  const [showStudentForm, setShowStudentForm] = React.useState(false);
  const [showStudentInformationModal, setShowStudentInformationModal] =
    React.useState(false);
  const [studentUpdate, setStudentUpdate] = React.useState(false);
  const [showStudentInformation, setShowStudentInformation] =
    React.useState(false);

  const [showWarningModalOnSchoolPage, setShowWarningModalOnSchoolPage] =
    React.useState(false);
  const [showCourseInformationModal, setShowCourseInformationModal] =
    React.useState(false);
  const [showCourseForm, setShowCourseForm] = React.useState(false);
  const [deleteStudent, setDeleteStudent] = React.useState(false);
  const [deleteSchool, setDeleteSchool] = React.useState(false);
  const [courseUpdate, setCourseUpdate] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [showCourseForm, showStudentInformation, showStudentForm]);

  const token: IToken = useTypedSelector((state) => state.token);
  const students: Array<IDatabaseStudent> = useTypedSelector(
    (state) => state.students
  );
  const selectedStudent: IDatabaseStudent = useTypedSelector(
    (state) => state.selectedStudent
  );
  const courses: Array<IDatabaseCourse> = useTypedSelector(
    (state) => state.courses
  );
  const selectedSchool: IDatabaseSchool = useTypedSelector(
    (state) => state.selectedSchool
  );
  const selectedCourse: IDatabaseCourse = useTypedSelector(
    (state) => state.selectedCourse
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    api
      .get(`/student/get/${selectedSchool.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => dispatch(actionDatabaseStudents(response.data)))
      .catch(() => dispatch(actionDatabaseStudents([])));
  }, [showStudentInformation]);

  React.useEffect(() => {
    api
      .get(`/course/get/${selectedSchool.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => dispatch(actionDatabaseCourses(response.data)))
      .catch(() => dispatch(actionDatabaseCourses([])));
  }, [courseUpdate, showStudentInformation, showCourseForm]);

  return (
    <>
      <AnimatePresence>
        {showWarningModalOnSchoolPage && (
          <WarningModal
            setShowWarningModalOnSchoolPage={setShowWarningModalOnSchoolPage}
            setDeleteStudent={setDeleteStudent}
            setDeleteSchool={setDeleteSchool}
            deleteStudent={deleteStudent}
            deleteSchool={deleteSchool}
          >
            {deleteStudent ? (
              <p>
                Excluir todos os registros de{" "}
                <span>
                  {selectedStudent.first_name + " " + selectedStudent.last_name}
                </span>
                ?
              </p>
            ) : (
              <p>
                <span className="warning_red">
                  Tem certeza que deseja continuar?
                </span>{" "}
                Esta ação removerá a <span>{selectedSchool.name}</span> e todos
                os registros relacionados a ela. Isso não pode ser desfeito!
              </p>
            )}
          </WarningModal>
        )}
        {showCourseInformationModal && (
          <CourseInformationModal
            setShowCourseInformationModal={setShowCourseInformationModal}
            setShowCourseForm={setShowCourseForm}
            setCourseUpdate={setCourseUpdate}
            current={selectedCourse}
          />
        )}
        {showStudentInformationModal && (
          <StudentInformationModal
            setShowWarningModalOnSchoolPage={setShowWarningModalOnSchoolPage}
            setShowStudentInformationModal={setShowStudentInformationModal}
            setShowStudentForm={setShowStudentForm}
            setStudentUpdate={setStudentUpdate}
            setDeleteStudent={setDeleteStudent}
            current={selectedStudent}
          />
        )}
      </AnimatePresence>
      <Header
        setShowStudentInformation={setShowStudentInformation}
        showStudentInformation={showStudentInformation}
        studentUpdate={studentUpdate}
      />
      <MainSchoolPageContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
      >
        <SchoolPageContainer>
          {showCourseForm && (
            <CourseForm
              setShowCourseForm={setShowCourseForm}
              setCourseUpdate={setCourseUpdate}
              courseUpdate={courseUpdate}
            />
          )}
          {showStudentForm && (
            <StudentForm
              setShowStudentForm={setShowStudentForm}
              setStudentUpdate={setStudentUpdate}
              studentUpdate={studentUpdate}
            />
          )}
          {!showStudentInformation && !showStudentForm && !showCourseForm && (
            <SchoolContainer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
            >
              <div className="school_container">
                {selectedSchool && (
                  <SchoolInformation
                    id={selectedSchool.id}
                    branch={selectedSchool.branch}
                    name={selectedSchool.name}
                    email={selectedSchool.email}
                    zip_code={selectedSchool.zip_code}
                    state={selectedSchool.state}
                    city={selectedSchool.city}
                    street={selectedSchool.street}
                    district={selectedSchool.district}
                    number={selectedSchool.number}
                    phone={selectedSchool.phone}
                  />
                )}
              </div>
              <div className="school_buttons">
                <DefaultButton
                  height="47px"
                  onClick={() => {
                    setShowStudentInformation(true);
                  }}
                >
                  {"Visualizar Alunos"}
                </DefaultButton>
                <DefaultButton
                  height="47px"
                  onClick={() => {
                    setShowStudentForm(true);
                  }}
                >
                  {"Matricular aluno"}
                </DefaultButton>
                <DefaultButton
                  onClick={() => {
                    setShowWarningModalOnSchoolPage(true);
                    setDeleteSchool(true);
                  }}
                  backgroundcolor="transparent"
                  border={`solid 1px red`}
                  height="47px"
                  color="red"
                >
                  {"Excluir escola"}
                </DefaultButton>
              </div>
            </SchoolContainer>
          )}
          {!showStudentInformation && !showStudentForm && !showCourseForm && (
            <CoursesContainer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
            >
              <div className="courses_container">
                <h1>Cursos</h1>
                {courses.length > 0 &&
                  courses
                    .sort((a, b) => {
                      if (a.name < b.name) return -1;
                      else if (a.name > b.name) return 1;
                      return 0;
                    })
                    .map((current) => (
                      <CourseInformation
                        key={current.id}
                        current={current}
                        setShowCourseInformationModal={
                          setShowCourseInformationModal
                        }
                        editable
                      />
                    ))}
              </div>
              <div className="courses_buttons">
                <DefaultButton
                  height="47px"
                  onClick={() => {
                    setShowCourseForm(true);
                  }}
                >
                  {"Adicionar novo curso"}
                </DefaultButton>
              </div>
            </CoursesContainer>
          )}
          {showStudentInformation && !showStudentForm && (
            <StudentsContainer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
            >
              <h1>{`${selectedSchool.name} - Alunos`}</h1>
              <div className="students_container">
                {students.length > 0 &&
                  students
                    .sort((a, b) => {
                      if (a.first_name < b.first_name) return -1;
                      else if (a.first_name > b.first_name) return 1;
                      return 0;
                    })
                    .map((current) => (
                      <StudentInformation
                        key={current.id}
                        first_name={current.first_name}
                        last_name={current.last_name}
                        email={current.email}
                        showStudentInformation={showStudentInformation}
                        setShowStudentInformationModal={
                          setShowStudentInformationModal
                        }
                        editable
                      />
                    ))}
              </div>
            </StudentsContainer>
          )}
        </SchoolPageContainer>
      </MainSchoolPageContainer>
      <Footer />
    </>
  );
};

export default SchoolPage;
