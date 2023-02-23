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
    filter: brightness(65%);
    transition: all ease-in 300ms;
  }
`;

export const HorizontalButtonContainer = styled.div`
  display: flex;
  column-gap: 12px;
  margin-top: 12px;
  button {
    width: 100%;
  }
`;
