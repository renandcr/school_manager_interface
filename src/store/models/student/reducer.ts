import {
  IActionSelectedStudent,
  IDatabaseStudent,
  IActionStudent,
} from "./actions";

import {
  SELECTED_STUDENT,
  DATABASE_STUDENT,
  CREATE_STUDENT,
  DELETE_STUDENT,
  UPDATE_STUDENT,
} from "./constants";

let initialStateStudents: Array<IDatabaseStudent> = JSON.parse(
  localStorage.getItem("@students") || JSON.stringify("")
);

export const studentReducer = (
  state = initialStateStudents,
  action: IActionStudent
) => {
  switch (action.type) {
    case DATABASE_STUDENT: {
      localStorage.setItem("@students", JSON.stringify(action.payload));
      initialStateStudents = action.payload;
      return action.payload;
    }

    case CREATE_STUDENT: {
      localStorage.setItem(
        "@students",
        JSON.stringify([...state, action.payload])
      );
      return [...state, action.payload];
    }

    case UPDATE_STUDENT: {
      const studentIndex = state.findIndex(
        (current) => current.id === action.payload.id
      );
      if (studentIndex === -1) return state;
      state.splice(studentIndex, 1, action.payload);
      localStorage.setItem("@students", JSON.stringify(state));
      return state;
    }

    case DELETE_STUDENT: {
      const updatedState = state.filter(
        (current) => current.id !== action.payload.id
      );
      localStorage.setItem("@students", JSON.stringify(updatedState));
      return updatedState;
    }

    default:
      return state;
  }
};

export const selectedStudentReducer = (
  state: IDatabaseStudent = JSON.parse(
    localStorage.getItem("@selectedStudent") || JSON.stringify("")
  ),
  action: IActionSelectedStudent
) => {
  switch (action.type) {
    case SELECTED_STUDENT: {
      const student = initialStateStudents.find(
        (current) => current.email === action.payload
      );
      if (!student) return state;
      localStorage.setItem("@selectedStudent", JSON.stringify(student));
      return student;
    }

    default:
      return state;
  }
};
