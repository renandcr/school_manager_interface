export {};
import { SAVE_TOKEN } from "./constants";

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
