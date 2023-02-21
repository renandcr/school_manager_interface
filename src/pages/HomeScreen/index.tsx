import { HomeScreenContainer, MainHomeScreenContainer } from "./style";
import RegistrationForm from "../../components/RegistrationForm";
import BackgroundLogo from "../../components/BackgroundLogo";
import LoginForm from "../../components/LoginForm";
import Header from "../../components/Header";
import * as React from "react";

const HomeScreen = () => {
  const [showRegistrationForm, setShowRegistrationForm] = React.useState(false);

  return (
    <>
      <Header />
      <BackgroundLogo />
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
    </>
  );
};

export default HomeScreen;
