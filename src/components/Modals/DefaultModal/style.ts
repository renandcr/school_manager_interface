import { VARIABLES } from "../../../styles/global";
import styled from "styled-components";
import { IDefaultModal } from ".";

export const DefaultModalContainer = styled.div<IDefaultModal>`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  position: fixed;
  z-index: 999;
  padding: 20px;
  border-radius: 2px;
  background-color: ${VARIABLES.grayColor7};
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border};
`;

export const CloseModalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-size: 16px;
    line-height: 26px;
    font-weight: 600;
    font-family: ${VARIABLES.fontFive};
    color: ${VARIABLES.grayColor3};
    text-transform: uppercase;
    text-decoration: underline;
  }
  .icon_close {
    font-size: 28px;
    transition: all ease-in 500ms;
    cursor: pointer;
    :hover {
      transition: all ease-in 300ms;
      opacity: 50%;
    }
  }
`;
