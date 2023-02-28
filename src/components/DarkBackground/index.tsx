import { DarkBackgroundContainer } from "./style";
import * as React from "react";

interface IDarkBackground {
  children: JSX.Element;
  onClick?: () => void;
}

const DarkBackground: React.FC<IDarkBackground> = ({ children, ...rest }) => {
  return (
    <DarkBackgroundContainer
      key="dark_background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      {...rest}
    >
      {children}
    </DarkBackgroundContainer>
  );
};

export default DarkBackground;
