import StudentInformationModal from "../../components/Modals/StudentInformationModal";
import CourseInformationModal from "../../components/Modals/CourseInformationModal";
import UserInformationModal from "../../components/Modals/UserInformationModal";
import RegistrationForm from "../../components/Forms/RegistrationForm";
import StudentInformation from "../../components/StudentInformation";
import { IDatabaseSchool } from "../../store/models/school/actions";
import SchoolInformation from "../../components/SchoolInformation";
import CourseInformation from "../../components/CourseInformation";
import WarningModal from "../../components/Modals/WarningModal";
import UserInformation from "../../components/UserInformation";
import StudentForm from "../../components/Forms/StudentForm";
import DefaultButton from "../../components/DefaultButton";
import CourseForm from "../../components/Forms/CourseForm";
import { AnimatePresence } from "framer-motion";
import { useTypedSelector } from "../../store";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useDispatch } from "react-redux";
import api from "../../assets/axios";
import * as React from "react";

import {
  actionDatabaseUsers,
  IDatabaseUser,
  IToken,
} from "../../store/models/user/actions";

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
  UsersContainer,
} from "./style";

import {
  actionDatabaseStudents,
  IDatabaseStudent,
} from "../../store/models/student/actions";

const SchoolPage = () => {
  const [showWarningModalOnSchoolPage, setShowWarningModalOnSchoolPage] =
    React.useState(false);
  const [deleteSchool, setDeleteSchool] = React.useState(false);

  const [showUserInformation, setShowUserInformation] = React.useState(false);
  const [showUserInformationModal, setShowUserInformationModal] =
    React.useState(false);
  const [deleteUser, setDeleteUser] = React.useState(false);
  const [userUpdate, setUserUpdate] = React.useState(false);
  const [
    showRegistrationFormOnSchoolPage,
    setShowRegistrationFormOnSchoolPage,
  ] = React.useState(false);

  const [showStudentForm, setShowStudentForm] = React.useState(false);
  const [showStudentInformationModal, setShowStudentInformationModal] =
    React.useState(false);
  const [studentUpdate, setStudentUpdate] = React.useState(false);
  const [deleteStudent, setDeleteStudent] = React.useState(false);
  const [showStudentInformation, setShowStudentInformation] =
    React.useState(false);

  const [showCourseInformationModal, setShowCourseInformationModal] =
    React.useState(false);
  const [showCourseForm, setShowCourseForm] = React.useState(false);
  const [courseUpdate, setCourseUpdate] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [
    showRegistrationFormOnSchoolPage,
    showStudentInformation,
    showStudentForm,
    showCourseForm,
  ]);

  const users: Array<IDatabaseUser> = useTypedSelector((state) => state.users);
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
  const selectedUser: IDatabaseUser = useTypedSelector(
    (state) => state.selectedUser
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

  React.useEffect(() => {
    api
      .get(`/user/get/${selectedSchool.id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => dispatch(actionDatabaseUsers(response.data)))
      .catch(() => dispatch(actionDatabaseUsers([])));
  }, [showRegistrationFormOnSchoolPage, showUserInformation]);

  return (
    <>
      <AnimatePresence>
        {showWarningModalOnSchoolPage && (
          <WarningModal
            setShowWarningModalOnSchoolPage={setShowWarningModalOnSchoolPage}
            setDeleteStudent={setDeleteStudent}
            setDeleteSchool={setDeleteSchool}
            deleteStudent={deleteStudent}
            setDeleteUser={setDeleteUser}
            deleteSchool={deleteSchool}
            deleteUser={deleteUser}
          >
            {deleteStudent && (
              <p>
                Excluir todos os registros de{" "}
                <span>
                  {selectedStudent.first_name + " " + selectedStudent.last_name}
                  ?
                </span>
              </p>
            )}

            {deleteSchool && (
              <p>
                <span className="warning_red">
                  Tem certeza que deseja continuar?
                </span>{" "}
                Esta ação removerá a <span>{selectedSchool.name}</span> e todos
                os registros relacionados a ela. Isso não pode ser desfeito!
              </p>
            )}
            {deleteUser && (
              <p>
                Excluir todos os registros de{" "}
                <span>
                  {selectedUser.first_name + " " + selectedUser.last_name}?
                </span>
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
        {showUserInformationModal && (
          <UserInformationModal
            setShowWarningModalOnSchoolPage={setShowWarningModalOnSchoolPage}
            setShowUserInformationModal={setShowUserInformationModal}
            setShowRegistrationFormOnSchoolPage={
              setShowRegistrationFormOnSchoolPage
            }
            setUserUpdate={setUserUpdate}
            setDeleteUser={setDeleteUser}
            current={selectedUser}
          />
        )}
      </AnimatePresence>
      <Header
        setShowStudentInformation={setShowStudentInformation}
        showStudentInformation={showStudentInformation}
        setShowUserInformation={setShowUserInformation}
        showUserInformation={showUserInformation}
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
          {showRegistrationFormOnSchoolPage && (
            <RegistrationForm
              setShowRegistrationFormOnSchoolPage={
                setShowRegistrationFormOnSchoolPage
              }
              showRegistrationFormOnSchoolPage={
                showRegistrationFormOnSchoolPage
              }
              setUserUpdate={setUserUpdate}
              userUpdate={userUpdate}
            />
          )}
          {!showRegistrationFormOnSchoolPage &&
            !showStudentInformation &&
            !showUserInformation &&
            !showStudentForm &&
            !showCourseForm && (
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
                    {"Visualizar alunos"}
                  </DefaultButton>
                  <DefaultButton
                    height="47px"
                    onClick={() => {
                      setShowUserInformation(true);
                    }}
                  >
                    {"Visualizar funcionários"}
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
                    height="47px"
                    onClick={() => {
                      setShowRegistrationFormOnSchoolPage(true);
                    }}
                  >
                    {"Cadastrar funcionário"}
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
          {!showRegistrationFormOnSchoolPage &&
            !showStudentInformation &&
            !showUserInformation &&
            !showStudentForm &&
            !showCourseForm && (
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
              <div className="model_container">
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
          {showUserInformation && !showRegistrationFormOnSchoolPage && (
            <UsersContainer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1 } }}
            >
              <h1>{`${selectedSchool.name} - Funcionários`}</h1>
              <div className="model_container">
                {users.length > 0 &&
                  users.map((current) => (
                    <UserInformation
                      key={current.id}
                      first_name={current.first_name}
                      last_name={current.last_name}
                      email={current.email}
                      setShowUserInformationModal={setShowUserInformationModal}
                      editable
                    />
                  ))}
              </div>
            </UsersContainer>
          )}
        </SchoolPageContainer>
      </MainSchoolPageContainer>
      <Footer />
    </>
  );
};

export default SchoolPage;
