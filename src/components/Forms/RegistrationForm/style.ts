import { VARIABLES } from "../../../styles/global";
import styled from "styled-components";

export const RegistrationFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 98%;
  max-width: 420px;
  h2 {
    margin-bottom: 20px;
    font-size: 26px;
    line-height: 30px;
    font-weight: 500;
    font-family: ${VARIABLES.fontTwo};
  }
  .text_field {
    div {
      border-radius: 2px;
      input {
        color: ${VARIABLES.grayColor2};
      }
    }
  }
  .text_area {
    div {
      .MuiInputBase-input {
        color: ${VARIABLES.grayColor2};
      }
    }
  }
  p {
    margin: -5px 0 5px 0;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    color: red;
  }
`;

export const LoginOptionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0 5px 0;
  span {
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
  }
  span:last-child {
    text-decoration: underline;
    color: ${VARIABLES.blueColor};
    cursor: pointer;
    transition: all ease-in 500ms;
    :hover {
      transition: all ease-in 300ms;
      color: ${VARIABLES.yellowColor};
    }
  }
`;
