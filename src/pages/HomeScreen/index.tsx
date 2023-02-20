import { HomeScreenContainer, MainHomeScreenContainer } from "./style";
import BackgroundLogo from "../../components/BackgroundLogo";
import Header from "../../components/Header";
import * as React from "react";

const HomeScreen = () => {
  return (
    <>
      <Header />
      <BackgroundLogo />
      <MainHomeScreenContainer>
        <HomeScreenContainer></HomeScreenContainer>
      </MainHomeScreenContainer>
    </>
  );
};

export default HomeScreen;
