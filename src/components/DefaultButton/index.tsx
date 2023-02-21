import { DefaultButtonContainer } from "./style";
import * as React from "react";

export interface IDefaultButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  height?: string;
  width?: string;
  border?: string;
  backgroundColor?: string;
  color?: string;
}

const DefaultButton: React.FC<IDefaultButton> = ({
  children,
  height,
  width,
  border,
  backgroundColor,
  color,
}) => {
  return (
    <DefaultButtonContainer
      height={height}
      width={width}
      border={border}
      backgroundColor={backgroundColor}
      color={color}
    >
      {children}
    </DefaultButtonContainer>
  );
};

export default DefaultButton;
