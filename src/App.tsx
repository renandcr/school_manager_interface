import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./styles/global";
import Header from "./components/Header";
import React from "react";
import DefaultButton from "./components/DefaultButton";
// import "./App.css";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={4000} />
      {/* <Header /> */}
      {/* <DefaultButton>{"Cadastrar"}</DefaultButton> */}
      <RegistrationForm />
    </>
  );
}

export default App;
