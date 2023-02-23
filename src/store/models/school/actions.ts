import {
  DATABASE_SCHOOL,
  CREATE_SCHOOL,
  DELETE_SCHOOL,
  UPDATE_SCHOOL,
} from "./constants";

export interface IDatabaseSchool {
  id?: string;
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

export interface IActionDatabaseSchool {
  type: string;
  payload: Array<IDatabaseSchool> & IDatabaseSchool;
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
