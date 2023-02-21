import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html *{
        font-family:"Roboto", sans-serif;
        font-size: 16px;
        line-height: 21px;
        font-weight: 300;
        color: #495057;
    }
    body{
        background-color: #edf6f9; 
    }
    button{
        cursor: pointer;
        border: none;
    }
`;

export const VARIABLES = {
  blueColor: "#1768ac",
  blueColor1: "#0E2940",
  blueColor2: "#031A2C",
  blueColor3: "#01152B",
  blueColor4: "#1e90ff",
  blueColor5: "#0072bb",
  blueColor6: "#0082c8",
  grayColor: "#333",
  grayColor1: "#778899",
  grayColor2: "#36454F",
  grayColor3: "#283139",
  grayColor4: "#edf6f9",
  grayColor5: "#495057",
  grayColor6: "#c0c0c0",
  yellowColor: "#eead2d",
  colorDarkBackground: "rgba(0, 0, 0, 0.75)",

  fontOne: "'Roboto', sans-serif",
  fontTwo: "'Nunito', sans-serif",
  fontThree: "'Lato', sans-serif",
  fontFour: "'Orbitron', sans-serif",
  fontFive: "'Opens Sans', sans-serif",
};
