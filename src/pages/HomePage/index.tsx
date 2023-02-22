import { HomePageContainer, MainHomePageContainer } from "./style";
import OptionsModal from "../../components/OptionsModal";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as React from "react";

const HomePage = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <OptionsModal showModal={showModal} setShowModal={setShowModal} />
      <Header setShowModal={setShowModal} />
      <MainHomePageContainer>
        <HomePageContainer></HomePageContainer>
      </MainHomePageContainer>
      <Footer />
    </>
  );
};

export default HomePage;
