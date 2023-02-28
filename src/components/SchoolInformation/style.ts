import { ISchoolInformation } from ".";
import styled from "styled-components";

export const SchoolInformationContainer = styled.ul<ISchoolInformation>`
  max-width: 100%;
  margin-bottom: 12px;
  transition: all ease-in 500ms;
  cursor: ${(props) => props.editable && "pointer"};
  :hover {
    transition: all ease-in 300ms;
    opacity: ${(props) => props.editable && "50%"};
  }

  @media only screen and (min-width: 330px) {
    min-width: 330px;
  }
`;
