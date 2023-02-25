import { IDatabaseSchool } from "../../store/models/school/actions";
import SchoolInformation from "../../components/SchoolInformation";
import StudentlForm from "../../components/Forms/StudentForm";
import DefaultButton from "../../components/DefaultButton";
import { VARIABLES } from "../../styles/global";
import { useTypedSelector } from "../../store";
import { topScreen } from "../../assets/utils";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import * as React from "react";

import {
  MainSchoolPageContainer,
  SchoolPageContainer,
  SchoolContainer,
} from "./style";

const SchoolPage = () => {
  topScreen();

  const selectedSchool: IDatabaseSchool = useTypedSelector(
    (state) => state.selectedSchool
  );
  const [showFormStudent, setShowFormStudent] = React.useState(false);

  return (
    <>
      <Header />
      <MainSchoolPageContainer>
        <SchoolPageContainer>
          <StudentlForm
            showFormStudent={showFormStudent}
            setShowFormStudent={setShowFormStudent}
          />
          {!showFormStudent && (
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
                <DefaultButton height="47px" width="140px">
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
        </SchoolPageContainer>
      </MainSchoolPageContainer>
      <Footer />
    </>
  );
};

export default SchoolPage;
