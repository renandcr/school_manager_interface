import { HeaderContainer, HeaderNavContainer, LogoContainer } from "./style";
import { useHistory } from "react-router-dom";
import * as React from "react";

export interface IHeader {
  setShowStudentInformation?: React.Dispatch<boolean>;
  setShowAllStudents?: React.Dispatch<boolean>;
  showAllStudents?: boolean;
  hideOptions?: boolean;
}

const Header: React.FC<IHeader> = ({
  setShowStudentInformation,
  setShowAllStudents,
  showAllStudents,
  hideOptions = false,
}) => {
  const history = useHistory();

  return (
    <HeaderContainer>
      <div className="header_box_one">
        <LogoContainer>
          <a href="">
            <span>School Manager CX</span>
          </a>
        </LogoContainer>
        <HeaderNavContainer hideOptions={hideOptions}>
          <nav>
            <ul>
              {showAllStudents && (
                <li
                  onClick={() => {
                    setShowStudentInformation?.(false);
                    setShowAllStudents?.(false);
                  }}
                >
                  Voltar
                </li>
              )}
              <li onClick={() => history.push("/home_page")}>Home</li>
            </ul>
          </nav>
        </HeaderNavContainer>
      </div>
    </HeaderContainer>
  );
};

export default Header;
