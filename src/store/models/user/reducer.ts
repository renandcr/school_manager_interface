import { IActionSaveToken } from "./actions";
import { SAVE_TOKEN } from "./constants";

export const tokenReducer = (
  state = JSON.parse(localStorage.getItem("@token") || JSON.stringify("")),
  action: IActionSaveToken
) => {
  switch (action.type) {
    case SAVE_TOKEN: {
      localStorage.setItem("@token", JSON.stringify(action.payload));
      return action.payload;
    }

    default:
      return state;
  }
};
