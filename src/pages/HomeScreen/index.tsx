import { HomeScreenContainer, MainHomeScreenContainer } from "./style";
import RegistrationForm from "../../components/Forms/RegistrationForm";
import LoginForm from "../../components/Forms/LoginForm";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as React from "react";

const HomeScreen = () => {
  const [showRegistrationForm, setShowRegistrationForm] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [showRegistrationForm]);

  return (
    <>
      <Header hideOptions />
      <MainHomeScreenContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
      >
        <HomeScreenContainer>
          {showRegistrationForm && (
            <RegistrationForm
              setShowRegistrationForm={setShowRegistrationForm}
            />
          )}
          {!showRegistrationForm && (
            <LoginForm setShowRegistrationForm={setShowRegistrationForm} />
          )}
        </HomeScreenContainer>
      </MainHomeScreenContainer>
      <Footer />
    </>
  );
};

export default HomeScreen;
