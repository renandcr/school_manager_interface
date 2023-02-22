import { IDatabaseSchool } from "../../components/SchoolInformation";
import SchoolInformation from "../../components/SchoolInformation";
import { HomePageContainer, MainHomePageContainer } from "./style";
import OptionsModal from "../../components/OptionsModal";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import api from "../../assets/axios";
import * as React from "react";

const HomePage = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [school, setSchool] = React.useState<IDatabaseSchool[]>();

  React.useEffect(() => {
    api
      .get(`/school/${"6e7642c7-bd7d-47c6-b4d0-adbb39d735be"}`, {
        headers: {
          Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc3MTcxOTA4LCJpYXQiOjE2NzcwODU1MDgsImp0aSI6Ijc5MWQyNTc2YjgzYjRjODc4MzhhMmYzOGRhZjdkNDhlIiwidXNlcl9pZCI6IjIyMmQ1NmJlLTE0NzItNDQzMC05ZTM1LTU3NGMwZDUyOTVlYyJ9.cASApv7dizkSNcXO0XNVV4lLzw6bchnUaKwD7GBOLJY"}`,
        },
      })
      .then((response) => {
        setSchool([response.data]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <OptionsModal showModal={showModal} setShowModal={setShowModal} />
      <Header setShowModal={setShowModal} />
      <MainHomePageContainer>
        <HomePageContainer>
          {school &&
            school.map((current) => (
              <SchoolInformation
                key={current.id}
                name={current.name}
                email={current.email}
                street={current.street}
                number={current.number}
                district={current.district}
                city={current.city}
                state={current.state}
                zip_code={current.zip_code}
                phone={current.phone}
              />
            ))}
        </HomePageContainer>
      </MainHomePageContainer>
      <Footer />
    </>
  );
};

export default HomePage;
