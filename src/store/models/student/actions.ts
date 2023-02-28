import {
  SELECTED_STUDENT,
  DATABASE_STUDENT,
  CREATE_STUDENT,
  DELETE_STUDENT,
  UPDATE_STUDENT,
} from "./constants";

export interface IStudent {
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: string;
  cpf: string;
  phone: string;
  gender: string;
}

export interface IDatabaseStudent extends IStudent {
  id: string;
  date_joined: Date;
  school?: string;
}

export interface IActionStudent {
  type: string;
  payload: Array<IDatabaseStudent> & IDatabaseStudent;
}

export interface IActionSelectedStudent {
  type: string;
  payload: string;
}

export const actionDatabaseStudents = (students: Array<IDatabaseStudent>) => {
  return {
    type: DATABASE_STUDENT,
    payload: students,
  };
};

export const actionCreateStudent = (student: IDatabaseStudent) => {
  return {
    type: CREATE_STUDENT,
    payload: student,
  };
};

export const actionUpdateStudent = (student: IDatabaseStudent) => {
  return {
    type: UPDATE_STUDENT,
    payload: student,
  };
};

export const actionDeleteStudent = (student: IDatabaseStudent) => {
  return {
    type: DELETE_STUDENT,
    payload: student,
  };
};

export const actionSelectedStudent = (email: string) => {
  return {
    type: SELECTED_STUDENT,
    payload: email,
  };
};
