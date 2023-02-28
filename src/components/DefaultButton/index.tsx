import { DefaultButtonContainer } from "./style";
import * as React from "react";

export interface IDefaultButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  height?: string;
  width?: string;
  border?: string;
  backgroundcolor?: string;
  color?: string;
}

const DefaultButton: React.FC<IDefaultButton> = ({
  children,
  height,
  width,
  border,
  backgroundcolor,
  color,
  ...rest
}) => {
  return (
    <DefaultButtonContainer
      height={height}
      width={width}
      border={border}
      backgroundcolor={backgroundcolor}
      color={color}
      {...rest}
    >
      {children}
    </DefaultButtonContainer>
  );
};

export default DefaultButton;
