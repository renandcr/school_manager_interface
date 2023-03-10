import { IDatabaseSchool } from "../../../store/models/school/actions";
import { HorizontalButtonContainer } from "../../DefaultButton/style";
import { CloseModalContainer } from "../DefaultModal/style";
import SchoolInformation from "../../SchoolInformation";
import { VARIABLES } from "../../../styles/global";
import CloseIcon from "@mui/icons-material/Close";
import DefaultButton from "../../DefaultButton";
import { useHistory } from "react-router-dom";
import DefaultModal from "../DefaultModal";
import * as React from "react";

interface ISchoolInformationModal {
  setShowSchoolInformationModal: React.Dispatch<boolean>;
  setShowFormSchool: React.Dispatch<boolean>;
  setSchoolUpdate: React.Dispatch<boolean>;
}

const SchoolInformationModal: React.FC<
  { current: IDatabaseSchool } & ISchoolInformationModal
> = ({
  setShowSchoolInformationModal,
  setShowFormSchool,
  setSchoolUpdate,
  current,
}) => {
  const history = useHistory();

  return (
    <DefaultModal key="school_information_modal">
      <CloseModalContainer>
        <span>Filial {current.branch}</span>
        <CloseIcon
          onClick={() => setShowSchoolInformationModal(false)}
          className="icon_close"
        />
      </CloseModalContainer>
      <SchoolInformation
        key={current.id}
        name={current.name}
        email={current.email}
        street={current.street}
        number={current.number}
        district={current.district}
        city={current.city}
        state={current.state}
        zip_code={current.zip_code}
        phone={current.phone}
      />
      <HorizontalButtonContainer>
        <DefaultButton
          height="47px"
          onClick={() => history.push("/school_page")}
        >
          {"Gerenciar"}
        </DefaultButton>
        <DefaultButton
          border={`solid 1px ${VARIABLES.blueColor}`}
          backgroundcolor="transparent"
          color={VARIABLES.blueColor}
          height="47px"
          onClick={() => {
            setShowSchoolInformationModal(false);
            setShowFormSchool(true);
            setSchoolUpdate(true);
          }}
        >
          {"Editar"}
        </DefaultButton>
      </HorizontalButtonContainer>
    </DefaultModal>
  );
};

export default SchoolInformationModal;
