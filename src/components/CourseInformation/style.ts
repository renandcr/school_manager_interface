import { SchoolInformationContainer } from "../SchoolInformation/style";
import { VARIABLES } from "../../styles/global";
import styled from "styled-components";
import { ICourseInformation } from ".";

export const CourseInformationContainer = styled(
  SchoolInformationContainer
)<ICourseInformation>`
  .ci_name {
    font-size: ${(props) => props.fontsize};
  }

  .ci_instructors {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    margin-top: 12px;
  }
  .ci_remove_option {
    display: ${(props) => (props.removeOption ? "flex" : "none")};
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    transition: all ease-in 500ms;
    :hover {
      color: ${VARIABLES.blueColor};
      transition: all ease-in 300ms;
    }
  }
`;
