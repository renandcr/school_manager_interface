import { VARIABLES } from "../../styles/global";
import styled from "styled-components";
import { IDefaultModal } from ".";

export const DefaultModalContainer = styled.div<IDefaultModal>`
  position: fixed;
  z-index: 999;
  padding: 15px;
  border-radius: 2px;
  background-color: ${VARIABLES.grayColor4};
  background: ${(props) => props.background};
  border: ${(props) => props.border};
`;
