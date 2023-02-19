import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./styles/global";
import Header from "./components/Header";
import React from "react";
import DefaultButton from "./components/DefaultButton";
// import "./App.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={4000} />
      {/* <Header /> */}
      {/* <DefaultButton>{"Cadastrar"}</DefaultButton> */}
    </>
  );
}

export default App;
