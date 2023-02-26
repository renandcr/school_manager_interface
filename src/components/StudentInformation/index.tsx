import { actionSelectedStudent } from "../../store/models/student/actions";
import { StudentInformationContainer } from "./style";
import DefaultTextBox from "../DefaultTextBox";
import { useDispatch } from "react-redux";
import * as React from "react";

export interface IDatabaseStudentAlternative {
  id?: string;
  first_name?: string;
  last_name?: string;
  email: string;
  date_of_birth?: string;
  cpf?: string;
  phone?: string;
  gender?: string;
  date_joined?: Date;
  school?: string;
}

interface IStudentInformation {
  setShowStudentInformationModal?: React.Dispatch<boolean>;
  showStudentInformation?: boolean;
  editable?: boolean;
}

const StudentInformation: React.FC<
  IDatabaseStudentAlternative & IStudentInformation
> = ({
  first_name,
  last_name,
  email,
  date_of_birth,
  cpf,
  phone,
  gender,
  editable = false,
  setShowStudentInformationModal,
}) => {
  const dispatch = useDispatch();

  return (
    <DefaultTextBox>
      <StudentInformationContainer
        editable={editable}
        onClick={() => {
          dispatch(actionSelectedStudent(email));
          setShowStudentInformationModal?.(true);
        }}
      >
        <li>
          <h2>{`${first_name} ${last_name}`}</h2>
        </li>
        <li>
          <span className="email_field">{email}</span>
        </li>
        {date_of_birth && (
          <li>
            <span>{`Data de nascimento: ${date_of_birth}`}</span>
          </li>
        )}
        {cpf && (
          <li>
            <span>{`CPF: ${cpf}`}</span>
          </li>
        )}
        {phone && (
          <li>
            <span>{`Telefone: ${phone}`}</span>
          </li>
        )}
        {gender && (
          <li>
            <span>{`Gênero: ${gender}`}</span>
          </li>
        )}
      </StudentInformationContainer>
    </DefaultTextBox>
  );
};

export default StudentInformation;
