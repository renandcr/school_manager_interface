import { DefaultModalContainer } from "./style";
import DarkBackground from "../DarkBackground";
import * as React from "react";

export interface IDefaultModal {
  children: React.ReactNode;
  background?: string;
  border?: string;
}

const DefaultModal: React.FC<IDefaultModal> = ({
  children,
  background,
  border,
}) => {
  return (
    <DarkBackground>
      <DefaultModalContainer background={background} border={border}>
        {children}
      </DefaultModalContainer>
    </DarkBackground>
  );
};

export default DefaultModal;
