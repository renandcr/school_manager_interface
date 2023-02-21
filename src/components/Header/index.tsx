import { HeaderContainer, HeaderNavContainer, LogoContainer } from "./style";
import * as React from "react";

interface IHeader {
  setShowModal?: React.Dispatch<boolean>;
}

const Header: React.FC<IHeader> = ({ setShowModal }) => {
  return (
    <HeaderContainer id="header">
      <div className="header_box_one">
        <LogoContainer>
          <a href="">
            <span>School Manager CX</span>
          </a>
        </LogoContainer>
        <HeaderNavContainer>
          <nav>
            <ul>
              <li onClick={() => setShowModal?.(true)}>Gerenciamento</li>
            </ul>
          </nav>
        </HeaderNavContainer>
      </div>
    </HeaderContainer>
  );
};

export default Header;
