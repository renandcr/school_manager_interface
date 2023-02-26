import {
  ADD_STUDENT_COURSE,
  DATABASE_COURSE,
  SELECTED_COURSE,
  CREATE_COURSE,
  UPDATE_COURSE,
  DELETE_COURSE,
} from "./constants";

export interface ICourse {
  name: string;
  description: string;
}

export interface IDatabaseCourse extends ICourse {
  id: string;
  created_at: Date;
  school: string;
  students?: string;
  users?: string;
}

export interface IActionCourse {
  type: string;
  payload: Array<IDatabaseCourse> & IDatabaseCourse;
}

export interface IActionSelectedCourse {
  type: string;
  payload: string;
}

export const actionDatabaseCourses = (courses: Array<IDatabaseCourse>) => {
  return {
    type: DATABASE_COURSE,
    payload: courses,
  };
};

export const actionCreateCourse = (course: IDatabaseCourse) => {
  return {
    type: CREATE_COURSE,
    payload: course,
  };
};

export const actionUpdateCourse = (course: IDatabaseCourse) => {
  return {
    type: UPDATE_COURSE,
    payload: course,
  };
};

export const actionDeleteCourse = (course: IDatabaseCourse) => {
  return {
    type: DELETE_COURSE,
    payload: course,
  };
};

export const actionSelectedCourse = (name: string) => {
  return {
    type: SELECTED_COURSE,
    payload: name,
  };
};

export const actionAddStudentToCourse = (email: string) => {
  return {
    type: ADD_STUDENT_COURSE,
    payload: email,
  };
};
