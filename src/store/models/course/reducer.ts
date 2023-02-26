import {
  IActionSelectedCourse,
  IDatabaseCourse,
  IActionCourse,
} from "./actions";

import {
  ADD_STUDENT_COURSE,
  SELECTED_COURSE,
  DATABASE_COURSE,
  CREATE_COURSE,
  DELETE_COURSE,
  UPDATE_COURSE,
} from "./constants";

let initialStateCourses: Array<IDatabaseCourse> = JSON.parse(
  localStorage.getItem("@courses") || JSON.stringify("")
);

export const courseReducer = (
  state = initialStateCourses,
  action: IActionCourse
) => {
  switch (action.type) {
    case DATABASE_COURSE: {
      localStorage.setItem("@courses", JSON.stringify(action.payload));
      initialStateCourses = action.payload;
      return action.payload;
    }
    case CREATE_COURSE: {
      localStorage.setItem(
        "@courses",
        JSON.stringify([...state, action.payload])
      );
      return [...state, action.payload];
    }
    case UPDATE_COURSE: {
      const courseIndex = state.findIndex(
        (current) => current.id === action.payload.id
      );
      if (courseIndex === -1) return state;
      state.splice(courseIndex, 1, action.payload);
      localStorage.setItem("@courses", JSON.stringify(state));
      return state;
    }
    case DELETE_COURSE: {
      const updatedState = state.filter(
        (current) => current.id !== action.payload.id
      );
      localStorage.setItem("@courses", JSON.stringify(updatedState));
      return updatedState;
    }
    case ADD_STUDENT_COURSE: {
      return state;
    }

    default:
      return state;
  }
};

export const selectedCourseReducer = (
  state: IDatabaseCourse = JSON.parse(
    localStorage.getItem("@selectedCourse") || JSON.stringify("")
  ),
  action: IActionSelectedCourse
) => {
  switch (action.type) {
    case SELECTED_COURSE: {
      const course = initialStateCourses.find(
        (current) => current.name === action.payload
      );
      if (!course) return state;
      localStorage.setItem("@selectedCourse", JSON.stringify(course));
      return course;
    }
    default:
      return state;
  }
};
