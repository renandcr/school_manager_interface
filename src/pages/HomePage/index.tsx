import { IDatabaseSchool } from "../../store/models/school/actions";
import SchoolInformation from "../../components/SchoolInformation";
import { HomePageContainer, MainHomePageContainer } from "./style";
import OptionsModal from "../../components/Modals/OptionsModal";
import { useTypedSelector } from "../../store";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as React from "react";

const HomePage = () => {
  const [showOptionsModal, setShowOptionsModal] = React.useState(false);

  const databaseSchools: Array<IDatabaseSchool> = useTypedSelector(
    (state) => state.schools
  );

  return (
    <>
      <OptionsModal
        showOptionsModal={showOptionsModal}
        setShowOptionsModal={setShowOptionsModal}
      />
      <Header setShowOptionsModal={setShowOptionsModal} />
      <MainHomePageContainer>
        <HomePageContainer>
          {databaseSchools.length > 0 &&
            databaseSchools.map(
              (current) =>
                current.id === "6e7642c7-bd7d-47c6-b4d0-adbb39d735be" && (
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
                )
            )}
        </HomePageContainer>
      </MainHomePageContainer>
      <Footer />
    </>
  );
};

export default HomePage;
