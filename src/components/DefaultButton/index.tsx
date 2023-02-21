import { DefaultButtonContainer } from "./style";
import * as React from "react";

export interface IDefaultButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // export interface IDefaultButton {
  children: string;
  height?: string;
  width?: string;
}

const DefaultButton: React.FC<IDefaultButton> = ({
  children,
  height,
  width,
  // ...rest
}) => {
  return (
    // <DefaultButtonContainer height={height} width={width} {...rest}>
    <DefaultButtonContainer height={height} width={width}>
      {children}
    </DefaultButtonContainer>
  );
};

export default DefaultButton;
