import { VARIABLES } from "../../styles/global";
import styled from "styled-components";

export const DefaultTextBoxContainer = styled.div`
  max-width: 100%;
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 12px;
    max-width: 100%;
    li {
      max-width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      h2 {
        max-width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
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
