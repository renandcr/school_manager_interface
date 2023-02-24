import SchoolInformationModal from "../../components/Modals/SchoolInformationModal";
import { MainSchoolPageContainer, SchoolPageContainer } from "./style";
import SchoolInformation from "../../components/SchoolInformation";
import { IToken } from "../../store/models/user/actions";
import { useTypedSelector } from "../../store";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useDispatch } from "react-redux";
import api from "../../assets/axios";
import * as React from "react";

import {
  actionDatabaseSchool,
  IDatabaseSchool,
} from "../../store/models/school/actions";

const SchoolPage = () => {
  const [showSchoolInformationModal, setShowSchoolInformationModal] =
    React.useState(false);
  const databaseSchools: Array<IDatabaseSchool> = useTypedSelector(
    (state) => state.schools
  );

  const selectedSchool: IDatabaseSchool = useTypedSelector(
    (state) => state.selectedSchool
  );

  const token: IToken = useTypedSelector((state) => state.token);

  const dispatch = useDispatch();

  React.useEffect(() => {
    api
      .get(`/school`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => dispatch(actionDatabaseSchool(response.data)))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {
        <SchoolInformationModal
          key={selectedSchool.id}
          current={selectedSchool}
          showSchoolInformationModal={showSchoolInformationModal}
          setShowSchoolInformationModal={setShowSchoolInformationModal}
        />
      }
      <Header />
      <MainSchoolPageContainer>
        <SchoolPageContainer>
          {databaseSchools.length > 0 &&
            databaseSchools.map((current) => (
              <SchoolInformation
                key={current.id}
                id={current.id}
                name={current.name}
                email={current.email}
                editable
                setShowSchoolInformationModal={setShowSchoolInformationModal}
              />
            ))}
        </SchoolPageContainer>
      </MainSchoolPageContainer>
      <Footer />
    </>
  );
};

export default SchoolPage;
