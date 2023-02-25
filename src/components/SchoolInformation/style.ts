import { ISchoolInformation } from ".";
import styled from "styled-components";

export const SchoolInformationContainer = styled.ul<ISchoolInformation>`
  width: fit-content;
  transition: all ease-in 500ms;
  margin-bottom: 12px;
  cursor: ${(props) => props.editable && "pointer"};
  :hover {
    transition: all ease-in 300ms;
    opacity: ${(props) => props.editable && "50%"};
  }
`;
