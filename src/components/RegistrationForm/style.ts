import { VARIABLES } from "../../styles/global";
import styled from "styled-components";

export const RegistrationFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 98%;
  max-width: 400px;
  .text_field {
    div {
      border-radius: 2px;
    }
  }
  p {
    display: flex;
    align-self: flex-start;
    align-items: center;
    margin: -5px 0 5px 0;
    column-gap: 5px;
    font-size: 12px;
    font-weight: 400;
    color: red;
  }
  button {
    margin-top: 10px;
  }
`;
