import { FooterLogoContainer, FooterContainer } from "./style";
import * as React from "react";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogoContainer>
        <span>School Manager CX</span>
      </FooterLogoContainer>
      <div className="middle_box">
        <span>&copy; Developed by Renan Ribeiro</span>
      </div>
      <div className="empty_box"></div>
    </FooterContainer>
  );
};

export default Footer;
