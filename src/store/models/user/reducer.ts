import {
  IActionSelectedUser,
  IDatabaseUser,
  IActionToken,
  IActionUser,
} from "./actions";

import {
  SELECTED_USER,
  DATABASE_USER,
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER,
  SAVE_TOKEN,
} from "./constants";

let initialStateUsers: Array<IDatabaseUser> = JSON.parse(
  localStorage.getItem("@users") || JSON.stringify("")
);

export const userReducer = (state = initialStateUsers, action: IActionUser) => {
  switch (action.type) {
    case DATABASE_USER: {
      localStorage.setItem("@users", JSON.stringify(action.payload));
      initialStateUsers = action.payload;
      return action.payload;
    }
    case CREATE_USER: {
      localStorage.setItem(
        "@users",
        JSON.stringify([...state, action.payload])
      );
      return [...state, action.payload];
    }
    case UPDATE_USER: {
      const userIndex = state.findIndex(
        (current) => current.id === action.payload.id
      );
      if (userIndex === -1) return state;
      state.splice(userIndex, 1, action.payload);
      localStorage.setItem("@users", JSON.stringify(state));
      return state;
    }
    case DELETE_USER: {
      const updatedState = state.filter(
        (current) => current.id !== action.payload.id
      );
      localStorage.setItem("@users", JSON.stringify(updatedState));
      return updatedState;
    }

    default:
      return state;
  }
};

export const selectedUserReducer = (
  state: IDatabaseUser = JSON.parse(
    localStorage.getItem("@selectedUser") || JSON.stringify("")
  ),
  action: IActionSelectedUser
) => {
  switch (action.type) {
    case SELECTED_USER: {
      const selectedUser = initialStateUsers.find(
        (current) => current.email === action.payload
      );
      if (!selectedUser) return state;
      localStorage.setItem("@selectedUser", JSON.stringify(state));
      return state;
    }

    default:
      return state;
  }
};

export const tokenReducer = (
  state = JSON.parse(localStorage.getItem("@token") || JSON.stringify("")),
  action: IActionToken
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
