import { actionSelectedSchool } from "../../store/models/school/actions";
import { SchoolInformationContainer } from "./style";
import DefaultTextBox from "../DefaultTextBox";
import { useDispatch } from "react-redux";
import * as React from "react";

export interface IDatabaseSchoolAlternative {
  id?: string;
  branch?: string;
  name?: string;
  email: string;
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
  setShowSchoolInformationModal?: React.Dispatch<boolean>;
}

const SchoolInformation: React.FC<
  IDatabaseSchoolAlternative & ISchoolInformation
> = ({
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
  setShowSchoolInformationModal,
}) => {
  const dispatch = useDispatch();

  return (
    <DefaultTextBox>
      <SchoolInformationContainer
        editable={editable}
        onClick={() => {
          dispatch(actionSelectedSchool(email));
          setShowSchoolInformationModal?.(true);
        }}
      >
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
