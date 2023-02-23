import SchoolInformationModal from "../../components/Modals/SchoolInformationModal";
import { actionDatabaseSchool } from "../../store/models/school/actions";
import { MainSchoolPageContainer, SchoolPageContainer } from "./style";
import { IDatabaseSchool } from "../../store/models/school/actions";
import SchoolInformation from "../../components/SchoolInformation";
import { useTypedSelector } from "../../store";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useDispatch } from "react-redux";
import api from "../../assets/axios";
import * as React from "react";

const SchoolPage = () => {
  const [showSchoolInformationModal, setShowSchoolInformationModal] =
    React.useState(false);
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
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3MjU5MDg0LCJpYXQiOjE2NzcxNzI2ODQsImp0aSI6ImEwY2M3YjVhY2FiMDQ3ZWU4MDFlMzUzYzI5NjJlMDliIiwidXNlcl9pZCI6IjIyMmQ1NmJlLTE0NzItNDQzMC05ZTM1LTU3NGMwZDUyOTVlYyJ9.HVCvBfpqybGBgJYK2Q7eSSzFiozZRQ5LbKLEdiS871g"}`,
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
