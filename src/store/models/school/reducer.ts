import {
  DATABASE_SCHOOL,
  CREATE_SCHOOL,
  DELETE_SCHOOL,
  UPDATE_SCHOOL,
} from "./constants";
import { IDatabaseSchool, IActionDatabaseSchool } from "./actions";

const schoolReducer = (
  state: Array<IDatabaseSchool> = JSON.parse(
    localStorage.getItem("database_schools") || ""
  ),
  action: IActionDatabaseSchool
) => {
  switch (action.type) {
    case DATABASE_SCHOOL: {
      localStorage.setItem("database_schools", JSON.stringify(action.payload));
      return action.payload;
    }

    case CREATE_SCHOOL: {
      localStorage.setItem(
        "database_schools",
        JSON.stringify([...state, action.payload])
      );
      return [...state, action.payload];
    }

    case DELETE_SCHOOL: {
      const updatedState = state.filter(
        (current) => current.id !== action.payload.id
      );
      localStorage.setItem("database_schools", JSON.stringify(updatedState));
      return updatedState;
    }

    case UPDATE_SCHOOL: {
      const updatedState = state.find((current) => {
        if (current.id === action.payload.id) {
          return [...state, { ...current, ...action.payload }];
        }
      });
      localStorage.setItem("database_schools", JSON.stringify(updatedState));
      return updatedState;
    }

    default:
      return state;
  }
};

export default schoolReducer;
