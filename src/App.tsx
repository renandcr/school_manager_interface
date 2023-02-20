import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./styles/global";
import Routes from "./routes";
import React from "react";
import DefaultButton from "./components/DefaultButton";
// import "./App.css";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={4000} />
      <Routes />
      {/* <Header /> */}
      {/* <DefaultButton>{"Cadastrar"}</DefaultButton> */}
      <RegistrationForm />
    </>
  );
}

export default App;
