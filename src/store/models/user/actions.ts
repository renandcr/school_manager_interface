import { SAVE_TOKEN } from "./constants";

export interface IUser {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  role: string;
  password: string;
  confirm_password?: string;
}

export interface IDatabaseUser extends IUser {
  id: string;
  date_joined: Date;
  school?: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IToken {
  token: string;
}

export interface IActionSaveToken {
  type: string;
  payload: IToken;
}

export const actionSaveToken = (token: IToken) => {
  return {
    type: SAVE_TOKEN,
    payload: token,
  };
};
