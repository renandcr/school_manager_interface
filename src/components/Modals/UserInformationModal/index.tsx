import { HorizontalButtonContainer } from "../../DefaultButton/style";
import { IDatabaseUser } from "../../../store/models/user/actions";
import { CloseModalContainer } from "../DefaultModal/style";
import UserInformation from "../../UserInformation";
import { dateHandler } from "../../../assets/utils";
import CloseIcon from "@mui/icons-material/Close";
import DefaultButton from "../../DefaultButton";
import DefaultModal from "../DefaultModal";
import * as React from "react";

interface IUserInformationModal {
  setShowRegistrationFormOnSchoolPage?: React.Dispatch<boolean>;
  setShowWarningModalOnSchoolPage: React.Dispatch<boolean>;
  setShowUserInformationModal: React.Dispatch<boolean>;
  setUserUpdate: React.Dispatch<boolean>;
  setDeleteUser: React.Dispatch<boolean>;
}

const UserInformationModal: React.FC<
  { current: IDatabaseUser } & IUserInformationModal
> = ({
  setShowRegistrationFormOnSchoolPage,
  setShowWarningModalOnSchoolPage,
  setShowUserInformationModal,
  setDeleteUser,
  setUserUpdate,
  current,
}) => {
  return (
    <DefaultModal>
      <CloseModalContainer>
        <span>{`Desde ${dateHandler(new Date(current.date_joined))}`}</span>
        <CloseIcon
          onClick={() => setShowUserInformationModal(false)}
          className="icon_close"
        />
      </CloseModalContainer>
      <UserInformation
        first_name={current.first_name}
        last_name={current.last_name}
        role={current.role}
        email={current.email}
        username={current.username}
      />
      <HorizontalButtonContainer>
        <DefaultButton
          onClick={() => {
            setShowRegistrationFormOnSchoolPage?.(true);
            setShowUserInformationModal(false);
            setUserUpdate(true);
          }}
          height="47px"
        >
          {"Editar"}
        </DefaultButton>
        <DefaultButton
          onClick={() => {
            setShowWarningModalOnSchoolPage(true);
            setShowUserInformationModal(false);
            setDeleteUser(true);
          }}
          backgroundcolor="transparent"
          border="solid 1px red"
          height="47px"
          color="red"
        >
          {"Excluir funcionário"}
        </DefaultButton>
      </HorizontalButtonContainer>
    </DefaultModal>
  );
};

export default UserInformationModal;
