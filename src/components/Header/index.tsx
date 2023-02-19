import { HeaderContainer, HeaderNavContainer, LogoContainer } from "./style";
import * as React from "react";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div className="header_box_one">
        <LogoContainer>
          <a href="">
            <span>School Manager CX</span>
          </a>
        </LogoContainer>
        <HeaderNavContainer>
          <nav>
            <ul>
              <li>
                <a href="">Gerenciamento</a>
              </li>
            </ul>
          </nav>
        </HeaderNavContainer>
      </div>
    </HeaderContainer>
  );
};

export default Header;
