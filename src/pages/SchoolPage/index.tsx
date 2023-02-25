import { MainSchoolPageContainer, SchoolPageContainer } from "./style";
import { IDatabaseSchool } from "../../store/models/school/actions";
import SchoolInformation from "../../components/SchoolInformation";
import DefaultButton from "../../components/DefaultButton";
import { VARIABLES } from "../../styles/global";
import { useTypedSelector } from "../../store";
import { topScreen } from "../../assets/utils";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import * as React from "react";

const SchoolPage = () => {
  topScreen();

  const selectedSchool: IDatabaseSchool = useTypedSelector(
    (state) => state.selectedSchool
  );

  return (
    <>
      <Header />
      <MainSchoolPageContainer>
        <SchoolPageContainer>
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
            <DefaultButton height="47px" width="135px">
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
        </SchoolPageContainer>
      </MainSchoolPageContainer>
      <Footer />
    </>
  );
};

export default SchoolPage;
