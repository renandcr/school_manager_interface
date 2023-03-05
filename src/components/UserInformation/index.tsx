import { UserInformationContainer } from "./style";
import { dateHandler } from "../../assets/utils";
import DefaultTextBox from "../DefaultTextBox";
import * as React from "react";

interface IDatabaseUserAlternative {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  username?: string;
  role: string;
  date_joined?: Date;
  school?: string;
}

interface IUserInformation {
  editable: boolean;
}

const UserInformation: React.FC<
  IDatabaseUserAlternative & IUserInformation
> = ({
  first_name,
  last_name,
  email,
  username,
  role,
  date_joined,
  editable = false,
}) => {
  return (
    <DefaultTextBox>
      <UserInformationContainer editable={editable}>
        <li>
          <h2>{`${first_name} ${last_name}`}</h2>
        </li>
        <li>
          <span className="email_field">{email}</span>
        </li>
        <li>
          <span>{`Cargo: ${role}`}</span>
        </li>
        <li>
          <span>{username && `Username: ${username}`}</span>
        </li>
        <li>
          <span>
            {date_joined && `Desde ${dateHandler(new Date(date_joined))}`}
          </span>
        </li>
      </UserInformationContainer>
    </DefaultTextBox>
  );
};

export default UserInformation;
