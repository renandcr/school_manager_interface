import { VARIABLES } from "../../styles/global";
import styled from "styled-components";

export const BackgroundLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: -999;
  width: 100%;
  height: 100%;
  span {
    font-size: 40vw;
    font-weight: 800;
    font-family: ${VARIABLES.fontFour};
    color: ${VARIABLES.grayColor6};
    opacity: 20%;
  }
`;
