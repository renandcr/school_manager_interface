import { actionDatabaseStudents } from "../../store/models/student/actions";
import { IDatabaseStudent } from "../../store/models/student/actions";
import StudentInformation from "../../components/StudentInformation";
import { IDatabaseSchool } from "../../store/models/school/actions";
import SchoolInformation from "../../components/SchoolInformation";
import StudentForm from "../../components/Forms/StudentForm";
import DefaultButton from "../../components/DefaultButton";
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
  MainSchoolPageContainer,
  SchoolPageContainer,
  StudentsContainer,
  SchoolContainer,
} from "./style";

const SchoolPage = () => {
  topScreen();

  const [showFormStudent, setShowFormStudent] = React.useState(false);
  const [showStudentInformation, setShowStudentInformation] =
    React.useState(false);

  const token: IToken = useTypedSelector((state) => state.token);
  const students: Array<IDatabaseStudent> = useTypedSelector(
    (state) => state.students
  );
  const selectedSchool: IDatabaseSchool = useTypedSelector(
    (state) => state.selectedSchool
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

  return (
    <>
      <Header />
      <MainSchoolPageContainer>
        <SchoolPageContainer>
          <StudentForm
            showFormStudent={showFormStudent}
            setShowFormStudent={setShowFormStudent}
          />
          {!showFormStudent && !showStudentInformation && (
            <SchoolContainer>
              <div>
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
                  width="135px"
                  onClick={() => setShowFormStudent(true)}
                >
                  {"Matricular aluno"}
                </DefaultButton>
                <DefaultButton
                  height="47px"
                  width="140px"
                  onClick={() => setShowStudentInformation(true)}
                >
                  {"Visualizar Alunos"}
                </DefaultButton>
                <DefaultButton
                  height="47px"
                  width="125px"
                  backgroundColor="transparent"
                  color={VARIABLES.blueColor}
                  border={`solid 1px ${VARIABLES.blueColor}`}
                >
                  {"Excluir escola"}
                </DefaultButton>
              </div>
            </SchoolContainer>
          )}
          {showStudentInformation && (
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
                      showStudentInformation={showStudentInformation}
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
