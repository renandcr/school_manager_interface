import { HeaderContainer, HeaderNavContainer, LogoContainer } from "./style";
import { useHistory } from "react-router-dom";
import * as React from "react";

export interface IHeader {
  setShowStudentInformation?: React.Dispatch<boolean>;
  setShowUserInformation?: React.Dispatch<boolean>;
  setCoursePage?: React.Dispatch<boolean>;
  showStudentInformation?: boolean;
  showUserInformation?: boolean;
  studentUpdate?: boolean;
  hideOptions?: boolean;
  coursePage?: boolean;
  userUpdate?: boolean;
}

const Header: React.FC<IHeader> = ({
  setShowStudentInformation,
  showStudentInformation,
  setShowUserInformation,
  showUserInformation,
  setCoursePage,
  studentUpdate,
  userUpdate,
  coursePage,
  hideOptions = false,
}) => {
  const history = useHistory();

  return (
    <HeaderContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <div className="header_box_one">
        <LogoContainer>
          <span>School Manager CX</span>
        </LogoContainer>
        <HeaderNavContainer hideOptions={hideOptions}>
          <nav>
            <ul>
              {coursePage && (
                <li
                  onClick={() => {
                    setCoursePage?.(false);
                    history.push("/school_page");
                  }}
                >
                  Voltar
                </li>
              )}
              {showStudentInformation && !studentUpdate && (
                <li
                  onClick={() => {
                    setShowStudentInformation?.(false);
                  }}
                >
                  Voltar
                </li>
              )}
              {showUserInformation && !userUpdate && (
                <li
                  onClick={() => {
                    setShowUserInformation?.(false);
                  }}
                >
                  Voltar
                </li>
              )}
              <li onClick={() => history.push("/home_page")}>Home</li>
              <li
                onClick={() => {
                  history.push("/");
                  localStorage.clear();
                }}
              >
                Sair
              </li>
            </ul>
          </nav>
        </HeaderNavContainer>
      </div>
    </HeaderContainer>
  );
};

export default Header;
