import SchoolInformationModal from "../../components/Modals/SchoolInformationModal";
import { actionDatabaseSchool } from "../../store/models/school/actions";
import { MainSchoolPageContainer, SchoolPageContainer } from "./style";
import { IDatabaseSchool } from "../../store/models/school/actions";
import SchoolInformation from "../../components/SchoolInformation";
import SchoolForm from "../../components/SchoolForm";
import { useTypedSelector } from "../../store";
import { topScreen } from "../../assets/utils";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useDispatch } from "react-redux";
import api from "../../assets/axios";
import * as React from "react";

const SchoolPage = () => {
  topScreen();

  const [showSchoolInformationModal, setShowSchoolInformationModal] =
    React.useState(false);
  const [showFormSchool, setShowFormSchool] = React.useState(false);
  const databaseSchools: Array<IDatabaseSchool> = useTypedSelector(
    (state) => state.schools
  );

  const selectedSchool: IDatabaseSchool = useTypedSelector(
    (state) => state.selectedSchool
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    api
      .get(`/school`, {
        headers: {
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3Mjc1Mjg0LCJpYXQiOjE2NzcxODg4ODQsImp0aSI6Ijk0MTAwMDAzZWEyZjRiNzViMTJhNDg5MTFhOGIzY2ZmIiwidXNlcl9pZCI6IjNjNmYxMzA1LWRmZjItNDlhMS1hMjBmLTM4ZGYxNjQwOTk5OSJ9.H5BbRESjQq98qJdrBkT51y20vUKSSsyoITUaMYZ490E"}`,
        },
      })
      .then((response) => {
        dispatch(actionDatabaseSchool(response.data));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {
        <SchoolInformationModal
          key={selectedSchool.id}
          current={selectedSchool}
          setShowSchoolInformationModal={setShowSchoolInformationModal}
          showSchoolInformationModal={showSchoolInformationModal}
          setShowFormSchool={setShowFormSchool}
        />
      }
      <Header />
      <MainSchoolPageContainer>
        <SchoolPageContainer>
          <SchoolForm
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
            ))}
        </SchoolPageContainer>
      </MainSchoolPageContainer>
      <Footer />
    </>
  );
};

export default SchoolPage;
