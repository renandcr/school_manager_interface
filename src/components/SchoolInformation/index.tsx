import { SchoolInformationContainer } from "./style";
import DefaultTextBox from "../DefaultTextBox";
import * as React from "react";

export interface IDatabaseSchool {
  id: string;
  name: string;
  email: string;
  zip_code: string;
  state: string;
  city: string;
  street: string;
  district: string;
  number: string;
  phone: string;
  created_at: Date;
}

const SchoolInformation: React.FC<{ current: IDatabaseSchool }> = ({
  current,
}) => {
  return (
    <DefaultTextBox>
      <SchoolInformationContainer>
        <li>
          <h2>{current.name}</h2>
        </li>
        <li>
          <span className="email_field">{current.email}</span>
        </li>
        <li>
          <span>{current.street},</span>
          <span> {current.number}</span>
        </li>
        <li>
          <span>{current.district}</span>
        </li>
        <li>
          <span>{current.city},</span>
          <span> {current.state} - </span>
          <span>{current.zip_code}</span>
        </li>

        <li>
          <span>{current.phone}</span>
        </li>
      </SchoolInformationContainer>
    </DefaultTextBox>
  );
};

export default SchoolInformation;
