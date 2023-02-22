import { MainSchoolPageContainer, SchoolPageContainer } from "./style";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import * as React from "react";

const SchoolPage = () => {
  return (
    <>
      <Header />
      <MainSchoolPageContainer>
        <SchoolPageContainer></SchoolPageContainer>
      </MainSchoolPageContainer>
      <Footer />
    </>
  );
};

export default SchoolPage;
