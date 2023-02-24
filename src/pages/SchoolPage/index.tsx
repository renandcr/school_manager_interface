import SchoolInformationModal from "../../components/Modals/SchoolInformationModal";
import { MainSchoolPageContainer, SchoolPageContainer } from "./style";
import { IDatabaseSchool } from "../../store/models/school/actions";
import SchoolInformation from "../../components/SchoolInformation";
import SchoolForm from "../../components/SchoolForm";
import { useTypedSelector } from "../../store";
import { topScreen } from "../../assets/utils";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import * as React from "react";

const SchoolPage = () => {
  topScreen();

  // const [showSchoolInformationModal, setShowSchoolInformationModal] =
  //   React.useState(false);
  // const [showFormSchool, setShowFormSchool] = React.useState(false);
  // const databaseSchools: Array<IDatabaseSchool> = useTypedSelector(
  //   (state) => state.schools
  // );

  // const selectedSchool: IDatabaseSchool = useTypedSelector(
  //   (state) => state.selectedSchool
  // );

  return (
    <>
      {
        // <SchoolInformationModal
        //   key={selectedSchool.id}
        //   current={selectedSchool}
        //   setShowSchoolInformationModal={setShowSchoolInformationModal}
        //   showSchoolInformationModal={showSchoolInformationModal}
        //   setShowFormSchool={setShowFormSchool}
        // />
      }
      <Header />
      <MainSchoolPageContainer>
        <SchoolPageContainer>
          {/* <SchoolForm
            setShowFormSchool={setShowFormSchool}
            showFormSchool={showFormSchool}
          />
          {databaseSchools.length > 0 &&
            !showFormSchool &&
            databaseSchools.map((current) => (
              <SchoolInformation
                key={current.id}
                id={current.id}
                name={current.name}
                email={current.email}
                setShowSchoolInformationModal={setShowSchoolInformationModal}
                editable
              />
            ))} */}
        </SchoolPageContainer>
      </MainSchoolPageContainer>
      <Footer />
    </>
  );
};

export default SchoolPage;
