import {
  SELECTED_USER,
  DATABASE_USER,
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER,
  SAVE_TOKEN,
} from "./constants";

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

export interface IActionSelectedUser {
  type: string;
  payload: string;
}

export interface IActionToken {
  type: string;
  payload: IToken;
}

export interface IActionUser {
  type: string;
  payload: IDatabaseUser & Array<IDatabaseUser>;
}

export const actionDatabaseUsers = (users: Array<IDatabaseUser>) => {
  return {
    type: DATABASE_USER,
    payload: users,
  };
};

export const actionCreateUser = (user: IDatabaseUser) => {
  return {
    type: CREATE_USER,
    payload: user,
  };
};

export const actionDeleteUser = (user: IDatabaseUser) => {
  return {
    type: DELETE_USER,
    payload: user,
  };
};

export const actionUpdateUser = (user: IDatabaseUser) => {
  return {
    type: UPDATE_USER,
    payload: user,
  };
};

export const actionSelectedUser = (email: string) => {
  return {
    type: SELECTED_USER,
    payload: email,
  };
};

export const actionSaveToken = (token: IToken) => {
  return {
    type: SAVE_TOKEN,
    payload: token,
  };
};
