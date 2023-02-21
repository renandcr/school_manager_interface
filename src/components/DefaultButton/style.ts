import { VARIABLES } from "../../styles/global";
import styled from "styled-components";
import { IDefaultButton } from ".";

export const DefaultButtonContainer = styled.button<IDefaultButton>`
  padding: 5px;
  border-radius: 2px;
  font-weight: 400;
  background-color: ${VARIABLES.blueColor};
  color: #ffffff;
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  transition: all ease-in 500ms;
  :hover {
    filter: brightness(75%);
    transition: all ease-in 300ms;
  }
`;
