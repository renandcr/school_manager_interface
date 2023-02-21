import { HomeScreenContainer, MainHomeScreenContainer } from "./style";
import RegistrationForm from "../../components/RegistrationForm";
import LoginForm from "../../components/LoginForm";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as React from "react";

const HomeScreen = () => {
  const [showRegistrationForm, setShowRegistrationForm] = React.useState(false);

  return (
    <>
      <Header />
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
