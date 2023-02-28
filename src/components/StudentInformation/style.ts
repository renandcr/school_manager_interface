import { SchoolInformationContainer } from "../SchoolInformation/style";
import { VARIABLES } from "../../styles/global";
import { IStudentInformation } from ".";
import styled from "styled-components";

export const StudentInformationContainer = styled(
  SchoolInformationContainer
)<IStudentInformation>`
  .remove_option {
    display: ${(props) => (props.removeOption ? "flex" : "none")};
    span {
      font-size: 12px;
      text-decoration: underline;
      cursor: pointer;
      transition: all ease-in 500ms;
      :hover {
        color: ${VARIABLES.blueColor};
        transition: all ease-in 300ms;
      }
    }
  }
`;
