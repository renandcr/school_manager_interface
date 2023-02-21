import { HomePageContainer, MainHomePageContainer } from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as React from "react";

const HomePage = () => {
  return (
    <>
      <Header />
      <MainHomePageContainer>
        <HomePageContainer></HomePageContainer>
      </MainHomePageContainer>
      <Footer />
    </>
  );
};

export default HomePage;
