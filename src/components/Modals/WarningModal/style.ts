import { VARIABLES } from "../../../styles/global";
import styled from "styled-components";

export const WarningModalContainer = styled.div`
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
    .warning_red {
      color: red;
    }
  }

  @media only screen and (min-width: 375px) {
    width: 330px;
  }
`;
