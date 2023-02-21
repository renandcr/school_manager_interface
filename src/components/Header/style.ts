import { VARIABLES } from "../../styles/global";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${VARIABLES.grayColor4};
  .header_box_one {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0 10px 0;
    height: 75px;
    width: 85%;
    max-width: 1400px;

    @media only screen and (min-width: 500px) {
      flex-direction: row;
    }
  }
`;

export const LogoContainer = styled.div`
  a {
    text-decoration: none;
    span {
      font-size: 24px;
      line-height: 31px;
      font-weight: 700;
      font-family: ${VARIABLES.fontFour};
      color: ${VARIABLES.blueColor};
    }
  }
`;

export const HeaderNavContainer = styled.div`
  nav {
    ul {
      width: fit-content;
      li {
        border: solid 1px transparent;
        transition: all ease-in 500ms;
        :hover {
          transition: all ease-in 300ms;
          border-bottom: solid 1px ${VARIABLES.yellowColor};
          color: ${VARIABLES.yellowColor};
        }
        a {
          font-size: 18px;
          line-height: 24px;
          color: inherit;
          text-decoration: none;
          font-weight: 400;
        }
      }
    }
  }
`;
