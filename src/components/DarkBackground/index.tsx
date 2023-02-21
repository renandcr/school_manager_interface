import { DarkBackgroundContainer } from "./style";
import * as React from "react";

interface IDarkBackground {
  // showModal: boolean;
  children: JSX.Element;
}

const DarkBackground: React.FC<IDarkBackground> = ({ children }) => {
  return (
    <>
      <DarkBackgroundContainer>{children}</DarkBackgroundContainer>
    </>
  );
};

export default DarkBackground;
