import { DarkBackgroundContainer } from "./style";
import * as React from "react";

interface IDarkBackground {
  children: JSX.Element;
  onClick?: () => void;
}

const DarkBackground: React.FC<IDarkBackground> = ({ children, ...rest }) => {
  return (
    <>
      <DarkBackgroundContainer {...rest}>{children}</DarkBackgroundContainer>
    </>
  );
};

export default DarkBackground;
