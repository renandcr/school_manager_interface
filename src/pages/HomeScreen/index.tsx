import { HomeScreenContainer, MainHomeScreenContainer } from "./style";
import RegistrationForm from "../../components/Forms/RegistrationForm";
import LoginForm from "../../components/Forms/LoginForm";
import { topScreen } from "../../assets/utils";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as React from "react";

const HomeScreen = () => {
  topScreen();

  const [showRegistrationForm, setShowRegistrationForm] = React.useState(false);

  return (
    <>
      <Header hideOptions />
      <MainHomeScreenContainer>
        <HomeScreenContainer>
          <RegistrationForm
            showRegistrationForm={showRegistrationForm}
            setShowRegistrationForm={setShowRegistrationForm}
          />
          <LoginForm
            showRegistrationForm={showRegistrationForm}
            setShowRegistrationForm={setShowRegistrationForm}
          />
        </HomeScreenContainer>
      </MainHomeScreenContainer>
      <Footer />
    </>
  );
};

export default HomeScreen;
