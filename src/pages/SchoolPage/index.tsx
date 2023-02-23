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
  const databaseSchools: Array<IDatabaseSchool> = useTypedSelector(
    (state) => state.school
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    api
      .get(`/school`, {
        headers: {
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3MTcxOTA4LCJpYXQiOjE2NzcwODU1MDgsImp0aSI6Ijc5MWQyNTc2YjgzYjRjODc4MzhhMmYzOGRhZjdkNDhlIiwidXNlcl9pZCI6IjIyMmQ1NmJlLTE0NzItNDQzMC05ZTM1LTU3NGMwZDUyOTVlYyJ9.cASApv7dizkSNcXO0XNVV4lLzw6bchnUaKwD7GBOLJY"}`,
        },
      })
      .then((response) => {
        dispatch(actionDatabaseSchool(response.data));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <MainSchoolPageContainer>
        <SchoolPageContainer>
          {databaseSchools.length > 0 &&
            databaseSchools.map((current) => (
              <SchoolInformation
                key={current.id}
                name={current.name}
                email={current.email}
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
