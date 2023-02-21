import { HomeScreenContainer, MainHomeScreenContainer } from "./style";
import RegistrationForm from "../../components/RegistrationForm";
import BackgroundLogo from "../../components/BackgroundLogo";
import LoginForm from "../../components/LoginForm";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as React from "react";
import { FooterContainer } from "../../components/Footer/style";

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
      <Footer />
    </>
  );
};

export default HomeScreen;
