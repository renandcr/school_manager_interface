import { DefaultModalContainer } from "./style";
import DarkBackground from "../DarkBackground";
import * as React from "react";

export interface IDefaultModal {
  children: React.ReactNode;
  backgroundColor?: string;
  border?: string;
}

const DefaultModal: React.FC<IDefaultModal> = ({
  backgroundColor,
  children,
  border,
}) => {
  return (
    <DarkBackground>
      <DefaultModalContainer backgroundColor={backgroundColor} border={border}>
        {children}
      </DefaultModalContainer>
    </DarkBackground>
  );
};

export default DefaultModal;
