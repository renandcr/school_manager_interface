import { DefaultTextBoxContainer } from "./style";
import * as React from "react";

interface IDefaultTextBox {
  children: React.ReactNode;
}

const DefaultTextBox: React.FC<IDefaultTextBox> = ({ children }) => {
  return <DefaultTextBoxContainer>{children}</DefaultTextBoxContainer>;
};

export default DefaultTextBox;
