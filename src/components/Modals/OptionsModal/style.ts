import styled from "styled-components";

export const OptionsModalComponent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  div {
    display: flex;
    justify-content: flex-end;
    .icon_close {
      color: #ffffff;
      font-size: 28px;
      transition: all ease-in 500ms;
      cursor: pointer;
      :hover {
        transition: all ease-in 300ms;
        opacity: 50%;
      }
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 30px;
    row-gap: 30px;
  }
`;
