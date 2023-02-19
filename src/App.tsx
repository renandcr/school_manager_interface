import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyle } from "./styles/global";
import React from "react";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={4000} />
    </>
  );
}

export default App;
