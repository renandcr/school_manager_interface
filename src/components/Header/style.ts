import { VARIABLES } from "../../styles/global";
import styled from "styled-components";
import { IHeader } from ".";

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
    width: 90%;
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

export const HeaderNavContainer = styled.div<IHeader>`
  display: ${(props) => (props.hideOptions ? "none" : "flex")};
  nav {
    ul {
      display: flex;
      column-gap: 40px;
      align-items: center;
      li {
        font-size: 18px;
        line-height: 24px;
        font-weight: 400;
        border: solid 1px transparent;
        transition: all ease-in 500ms;
        cursor: pointer;
        :hover {
          transition: all ease-in 300ms;
          border-bottom: solid 1px ${VARIABLES.yellowColor};
          color: ${VARIABLES.yellowColor};
        }
      }
    }
  }
`;
