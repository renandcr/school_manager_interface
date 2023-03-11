import { VARIABLES } from "../../../styles/global";
import styled from "styled-components";

export const AddPeopleToCourseContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  gap: 20px;
  p {
    font-size: 18px;
    line-height: 26px;
    font-weight: 300;
    font-family: ${VARIABLES.fontTwo};
    color: ${VARIABLES.grayColor5};
    span {
      font-size: inherit;
      font-weight: 500;
      font-family: inherit;
      color: ${VARIABLES.blueColor};
    }
  }
  .add_input_container {
    width: 100%;
    height: 47px;
    border-radius: 2px;
    border: ${`solid 2px ${VARIABLES.blueColor}`};
    box-sizing: border-box;
    input {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding-left: 10px;
      border: none;
      outline: none;
      color: ${VARIABLES.grayColor2};
      background-color: #f8f8f8;
      ::placeholder {
        color: ${VARIABLES.grayColor2};
      }
    }
  }

  @media only screen and (min-width: 375px) {
    width: 330px;
  }
`;
