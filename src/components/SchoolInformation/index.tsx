import { SchoolInformationContainer } from "./style";
import DefaultTextBox from "../DefaultTextBox";
import * as React from "react";

export interface IDatabaseSchool {
  id?: string;
  name?: string;
  email?: string;
  zip_code?: string;
  state?: string;
  city?: string;
  street?: string;
  district?: string;
  number?: string;
  phone?: string;
  created_at?: Date;
}

export interface ISchoolInformation {
  editable?: boolean;
}

const SchoolInformation: React.FC<IDatabaseSchool & ISchoolInformation> = ({
  name,
  email,
  street,
  number,
  district,
  city,
  state,
  zip_code,
  phone,
  editable = false,
}) => {
  return (
    <DefaultTextBox>
      <SchoolInformationContainer editable={editable}>
        <li>
          <h2>{name}</h2>
        </li>
        <li>
          <span className="email_field">{email}</span>
        </li>
        <li>
          <span>{street && `${street}, `}</span>
          <span>{number}</span>
        </li>
        <li>
          <span>{district}</span>
        </li>
        <li>
          <span>{city && `${city}, `}</span>
          <span> {state && `${state} - `}</span>
          <span>{zip_code}</span>
        </li>
        <li>
          <span>{phone}</span>
        </li>
      </SchoolInformationContainer>
    </DefaultTextBox>
  );
};

export default SchoolInformation;
