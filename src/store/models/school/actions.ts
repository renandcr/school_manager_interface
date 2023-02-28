import {
  DATABASE_SCHOOL,
  SELECTED_SCHOOL,
  CREATE_SCHOOL,
  DELETE_SCHOOL,
  UPDATE_SCHOOL,
} from "./constants";

export interface IDatabaseSchool {
  id?: string;
  branch: string;
  name: string;
  email: string;
  zip_code: string;
  state: string;
  city: string;
  street: string;
  district: string;
  number: string;
  phone: string;
  created_at?: Date;
}

export interface ISchool {
  branch: string;
  name: string;
  email: string;
  zip_code: string;
  state: string;
  city: string;
  street: string;
  district: string;
  number: string;
  phone: string;
}

export interface IActionDatabaseSchool {
  type: string;
  payload: Array<IDatabaseSchool> & IDatabaseSchool;
}

export interface IActionSelectedSchool {
  type: string;
  payload: string;
}

export const actionDatabaseSchool = (schools: Array<IDatabaseSchool>) => {
  return {
    type: DATABASE_SCHOOL,
    payload: schools,
  };
};

export const actionCreateSchool = (school: IDatabaseSchool) => {
  return {
    type: CREATE_SCHOOL,
    payload: school,
  };
};

export const actionDeleteSchool = (school: IDatabaseSchool) => {
  return {
    type: DELETE_SCHOOL,
    payload: school,
  };
};

export const actionUpdateSchool = (school: IDatabaseSchool) => {
  return {
    type: UPDATE_SCHOOL,
    payload: school,
  };
};

export const actionSelectedSchool = (email: string) => {
  return {
    type: SELECTED_SCHOOL,
    payload: email,
  };
};
