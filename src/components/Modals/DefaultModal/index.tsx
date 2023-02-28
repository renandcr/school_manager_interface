import DarkBackground from "../../DarkBackground";
import { DefaultModalContainer } from "./style";
import * as React from "react";

export interface IDefaultModal {
  children: React.ReactNode;
  backgroundcolor?: string;
  border?: string;
}

const DefaultModal: React.FC<IDefaultModal> = ({
  backgroundcolor,
  children,
  border,
}) => {
  return (
    <DarkBackground>
      <DefaultModalContainer
        backgroundcolor={backgroundcolor}
        border={border}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, scale: 0, transition: { duration: 0.5 } }}
      >
        {children}
      </DefaultModalContainer>
    </DarkBackground>
  );
};

export default DefaultModal;
