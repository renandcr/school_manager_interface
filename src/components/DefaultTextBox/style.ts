import { VARIABLES } from "../../styles/global";
import styled from "styled-components";

export const DefaultTextBoxContainer = styled.div`
  width: 100%;
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 12px;
    li {
      width: fit-content;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      h2 {
        width: fit-content;
        font-size: 20px;
        line-height: 26px;
        font-weight: 600;
        font-family: ${VARIABLES.fontFive};
        color: ${VARIABLES.grayColor3};
      }
      span {
        font-size: 18px;
        line-height: 24px;
        font-weight: 500;
        font-family: ${VARIABLES.fontFive};
        color: ${VARIABLES.grayColor3};
      }
      .email_field {
        color: ${VARIABLES.yellowColor};
      }
    }
  }
`;
