import { VARIABLES } from "../../styles/global";
import styled from "styled-components";

export const DefaultTextBoxContainer = styled.div`
  width: 100%;
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 15px;
    h2 {
      width: fit-content;
      font-size: 24px;
      line-height: 28px;
      font-weight: 600;
      font-family: ${VARIABLES.fontTwo};
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: ${VARIABLES.grayColor3};
    }
    li {
      width: fit-content;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      span {
        font-size: 22px;
        line-height: 26px;
        font-weight: 400;
        font-family: ${VARIABLES.fontThree};
        color: ${VARIABLES.grayColor3};
      }
      .email_field {
        color: ${VARIABLES.yellowColor};
      }
    }
  }
`;
