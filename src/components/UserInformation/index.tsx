import { actionSelectedUser } from "../../store/models/user/actions";
import { UserInformationContainer } from "./style";
import DefaultTextBox from "../DefaultTextBox";
import { useDispatch } from "react-redux";
import * as React from "react";

interface IDatabaseUserAlternative {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  username?: string;
  role?: string;
  date_joined?: Date;
  school?: string;
}

interface IUserInformation {
  setShowUserInformationModal?: React.Dispatch<boolean>;
  editable?: boolean;
}

const UserInformation: React.FC<
  IDatabaseUserAlternative & IUserInformation
> = ({
  first_name,
  last_name,
  email,
  username,
  role,
  setShowUserInformationModal,
  editable = false,
}) => {
  const dispatch = useDispatch();

  return (
    <DefaultTextBox>
      <UserInformationContainer
        onClick={() => {
          setShowUserInformationModal?.(true);
          dispatch(actionSelectedUser(email));
        }}
        editable={editable}
      >
        <li>
          <h2>{`${first_name} ${last_name}`}</h2>
        </li>
        <li>
          <span className="email_field">{email}</span>
        </li>
        {role && (
          <li>
            <span>{`Cargo: ${role}`}</span>
          </li>
        )}
        {username && (
          <li>
            <span>{`Username: ${username}`}</span>
          </li>
        )}
      </UserInformationContainer>
    </DefaultTextBox>
  );
};

export default UserInformation;
