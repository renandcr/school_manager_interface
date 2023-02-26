import StudentInformationModal from "../../components/Modals/StudentInformationModal";
import StudentInformation from "../../components/StudentInformation";
import { IDatabaseSchool } from "../../store/models/school/actions";
import SchoolInformation from "../../components/SchoolInformation";
import CourseInformation from "../../components/CourseInformation";
import StudentForm from "../../components/Forms/StudentForm";
import DefaultButton from "../../components/DefaultButton";
import CourseForm from "../../components/Forms/CourseForm";
import { IToken } from "../../store/models/user/actions";
import { VARIABLES } from "../../styles/global";
import { useTypedSelector } from "../../store";
import { topScreen } from "../../assets/utils";
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
  topScreen();

  const [showAllStudents, setShowAllStudents] = React.useState(false);
  const [showFormStudent, setShowFormStudent] = React.useState(false);
  const [showFormCourse, setShowFormCourse] = React.useState(false);
  const [showStudentInformationModal, setShowStudentInformationModal] =
    React.useState(false);
  const [showStudentInformation, setShowStudentInformation] =
    React.useState(false);
  const [studentUpdate, setStudentUpdate] = React.useState(false);
  const [courseUpdate, setCourseUpdate] = React.useState(false);

  const token: IToken = useTypedSelector((state) => state.token);
  const students: Array<IDatabaseStudent> = useTypedSelector(
    (state) => state.students
  );
  const courses: Array<IDatabaseCourse> = useTypedSelector(
    (state) => state.courses
  );
  const selectedSchool: IDatabaseSchool = useTypedSelector(
    (state) => state.selectedSchool
  );
  const selectedStudent: IDatabaseStudent = useTypedSelector(
    (state) => state.selectedStudent
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
      .catch((error) => console.log(error));
  }, [showStudentInformation]);

  React.useEffect(() => {
    api
      .get(`/course/get/${selectedSchool.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        dispatch(actionDatabaseCourses(response.data));
        console.log("response -", response);
      })
      .catch((error) => {
        console.log("error -", error);
      });
  }, [courseUpdate]);

  return (
    <>
      <StudentInformationModal
        key={selectedStudent.id}
        setShowStudentInformationModal={setShowStudentInformationModal}
        showStudentInformationModal={showStudentInformationModal}
        setShowFormStudent={setShowFormStudent}
        setStudentUpdate={setStudentUpdate}
        current={selectedStudent}
      />
      <Header
        setShowStudentInformation={setShowStudentInformation}
        setShowAllStudents={setShowAllStudents}
        showAllStudents={showAllStudents}
      />
      <MainSchoolPageContainer>
        <SchoolPageContainer>
          <CourseForm
            setShowFormCourse={setShowFormCourse}
            setCourseUpdate={setCourseUpdate}
            showFormCourse={showFormCourse}
            courseUpdate={courseUpdate}
          />
          <StudentForm
            setShowFormStudent={setShowFormStudent}
            setStudentUpdate={setStudentUpdate}
            showFormStudent={showFormStudent}
            studentUpdate={studentUpdate}
          />
          {!showFormStudent && !showStudentInformation && !showFormCourse && (
            <SchoolContainer>
              <div className="school-container">
                {selectedSchool && (
                  <SchoolInformation
                    key={selectedSchool.id}
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
                    setShowAllStudents(true);
                  }}
                >
                  {"Visualizar Alunos"}
                </DefaultButton>
                <DefaultButton
                  height="47px"
                  onClick={() => setShowFormStudent(true)}
                >
                  {"Matricular aluno"}
                </DefaultButton>
                <DefaultButton
                  height="47px"
                  backgroundColor="transparent"
                  color={VARIABLES.blueColor}
                  border={`solid 1px ${VARIABLES.blueColor}`}
                >
                  {"Excluir escola"}
                </DefaultButton>
              </div>
            </SchoolContainer>
          )}
          {!showFormStudent && !showStudentInformation && !showFormCourse && (
            <CoursesContainer>
              <div className="courses_container">
                <h1>Cursos</h1>
                {courses.map((current) => (
                  <CourseInformation
                    key={current.id}
                    current={current}
                    editable
                  />
                ))}
              </div>
              <div className="courses_buttons">
                <DefaultButton
                  height="47px"
                  onClick={() => setShowFormCourse(true)}
                >
                  {"Adicionar novo curso"}
                </DefaultButton>
              </div>
            </CoursesContainer>
          )}
          {showStudentInformation && !showFormStudent && (
            <StudentsContainer>
              <h1>{`${selectedSchool.name} - Alunos`}</h1>
              <div className="students_container">
                {students.length > 0 &&
                  students.map((current) => (
                    <StudentInformation
                      key={current.id}
                      first_name={current.first_name}
                      last_name={current.last_name}
                      email={current.email}
                      setShowStudentInformationModal={
                        setShowStudentInformationModal
                      }
                      showStudentInformation={showStudentInformation}
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
