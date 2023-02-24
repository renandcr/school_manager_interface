import {
  IActionDatabaseSchool,
  IActionSelectedSchool,
  IDatabaseSchool,
} from "./actions";

import {
  DATABASE_SCHOOL,
  SELECTED_SCHOOL,
  CREATE_SCHOOL,
  DELETE_SCHOOL,
  UPDATE_SCHOOL,
} from "./constants";

let initialStateSchools: Array<IDatabaseSchool> = JSON.parse(
  localStorage.getItem("@databaseSchools") || JSON.stringify("")
);

export const schoolReducer = (
  state = initialStateSchools,
  action: IActionDatabaseSchool
) => {
  switch (action.type) {
    case DATABASE_SCHOOL: {
      localStorage.setItem("@databaseSchools", JSON.stringify(action.payload));
      initialStateSchools = action.payload;
      return action.payload;
    }

    case CREATE_SCHOOL: {
      localStorage.setItem(
        "@databaseSchools",
        JSON.stringify([...state, action.payload])
      );
      return [...state, action.payload];
    }

    case DELETE_SCHOOL: {
      const updatedState = state.filter(
        (current) => current.id !== action.payload.id
      );
      localStorage.setItem("@databaseSchools", JSON.stringify(updatedState));
      return updatedState;
    }

    case UPDATE_SCHOOL: {
      const index = state.findIndex(
        (current) => current.id === action.payload.id
      );
      const updatedState = state.splice(index, 1, action.payload);
      localStorage.setItem("@databaseSchools", JSON.stringify(updatedState));
      return updatedState;
    }

    default:
      return state;
  }
};

export const selectedSchoolReducer = (
  state: IDatabaseSchool = JSON.parse(
    localStorage.getItem("@selectedSchool") || JSON.stringify("")
  ),
  action: IActionSelectedSchool
) => {
  switch (action.type) {
    case SELECTED_SCHOOL: {
      const school = initialStateSchools.find(
        (current) => current.email === action.payload
      );
      if (!school) return state;
      localStorage.setItem("@selectedSchool", JSON.stringify(school));
      return school;
    }

    default:
      return state;
  }
};
