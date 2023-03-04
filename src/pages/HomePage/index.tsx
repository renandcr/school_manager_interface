import SchoolInformationModal from "../../components/Modals/SchoolInformationModal";
import { actionDatabaseSchool } from "../../store/models/school/actions";
import { IDatabaseSchool } from "../../store/models/school/actions";
import SchoolInformation from "../../components/SchoolInformation";
import DefaultButton from "../../components/DefaultButton";
import SchoolForm from "../../components/Forms/SchoolForm";
import { IToken } from "../../store/models/user/actions";
import { AnimatePresence } from "framer-motion";
import { useTypedSelector } from "../../store";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useDispatch } from "react-redux";
import api from "../../assets/axios";
import * as React from "react";

import {
  HomePageSchoolsContainer,
  MainHomePageContainer,
  HomePageContainer,
} from "./style";

const HomePage = () => {
  const [showSchoolInformationModal, setShowSchoolInformationModal] =
    React.useState(false);
  const [showFormSchool, setShowFormSchool] = React.useState(false);
  const token: IToken = useTypedSelector((state) => state.token);
  const [schoolUpdate, setSchoolUpdate] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [showFormSchool]);

  const databaseSchools: Array<IDatabaseSchool> = useTypedSelector(
    (state) => state.schools
  );
  const selectedSchool: IDatabaseSchool = useTypedSelector(
    (state) => state.selectedSchool
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    api
      .get(`/school`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => dispatch(actionDatabaseSchool(response.data)))
      .catch((error) => console.log(error));
  }, [showFormSchool]);

  return (
    <>
      <Header />
      <AnimatePresence>
        {showSchoolInformationModal && (
          <SchoolInformationModal
            key={selectedSchool.id}
            current={selectedSchool}
            setShowSchoolInformationModal={setShowSchoolInformationModal}
            setShowFormSchool={setShowFormSchool}
            setSchoolUpdate={setSchoolUpdate}
          />
        )}
      </AnimatePresence>
      <MainHomePageContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
      >
        <HomePageContainer>
          {showFormSchool && (
            <SchoolForm
              setShowFormSchool={setShowFormSchool}
              setSchoolUpdate={setSchoolUpdate}
              schoolUpdate={schoolUpdate}
            />
          )}
          {!showFormSchool && (
            <>
              <h1>Instituição de Ensino Cristóvão Colombo</h1>
              <HomePageSchoolsContainer>
                <div className="schools_container">
                  {databaseSchools.length > 0 &&
                    !showFormSchool &&
                    databaseSchools.map((current) => (
                      <SchoolInformation
                        key={current.id}
                        id={current.id}
                        branch={current.branch}
                        name={current.name}
                        email={current.email}
                        setShowSchoolInformationModal={
                          setShowSchoolInformationModal
                        }
                        editable
                      />
                    ))}
                </div>
                <div className="buttons_container">
                  {!showFormSchool && (
                    <DefaultButton
                      height="47px"
                      width="150px"
                      onClick={() => {
                        setShowFormSchool(true);
                        setSchoolUpdate(false);
                      }}
                    >
                      {"Adicionar escola"}
                    </DefaultButton>
                  )}
                </div>
              </HomePageSchoolsContainer>
            </>
          )}
        </HomePageContainer>
      </MainHomePageContainer>
      <Footer />
    </>
  );
};

export default HomePage;
