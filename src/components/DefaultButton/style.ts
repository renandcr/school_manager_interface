import { VARIABLES } from "../../styles/global";
import styled from "styled-components";
import { IDefaultButton } from ".";

export const DefaultButtonContainer = styled.button<IDefaultButton>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${VARIABLES.blueColor};
  font-weight: 400;
  padding: 5px;
  color: #ffffff;
  border-radius: 2px;
  transition: all ease-in 300ms;
  :hover {
    filter: brightness(75%);
    transition: all ease-in 300ms;
  }
`;
