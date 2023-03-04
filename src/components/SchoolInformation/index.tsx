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
  setShowSchoolInformationModal?: React.Dispatch<boolean>;
  editable?: boolean;
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
        {(street || number) && (
          <li>
            {street && <span>{`${street}, `}</span>}
            {number && <span>{number}</span>}
          </li>
        )}
        {district && (
          <li>
            <span>{district}</span>
          </li>
        )}
        {(city || state || zip_code) && (
          <li className="upper">
            {city && <span>{`${city}, `}</span>}
            {state && <span> {`${state} - `}</span>}
            {zip_code && <span>{zip_code}</span>}
          </li>
        )}
        {phone && (
          <li>
            <span>{phone}</span>
          </li>
        )}
      </SchoolInformationContainer>
    </DefaultTextBox>
  );
};

export default SchoolInformation;
