import { LogoContainer } from "../Header/style";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 200px;
  div {
    display: flex;
    align-items: flex-end;
    padding: 20px;
    @media only screen and (min-width: 768px) {
      width: 33%;
    }
  }
  span {
    font-size: 14px;
  }
  .empty_box {
    display: none;

    @media only screen and (min-width: 768px) {
      display: flex;
    }
  }
  .middle_box {
    justify-content: center;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

export const FooterLogoContainer = styled(LogoContainer)`
  justify-content: center;
  a {
    span {
      font-size: 18px;
    }
  }

  @media only screen and (min-width: 768px) {
    justify-content: flex-end;
  }
`;
