import { IDatabaseSchool } from "../../../store/models/school/actions";
import { HorizontalButtonContainer } from "../../DefaultButton/style";
import { CloseModalContainer } from "../DefaultModal/style";
import SchoolInformation from "../../SchoolInformation";
import { VARIABLES } from "../../../styles/global";
import CloseIcon from "@mui/icons-material/Close";
import DefaultButton from "../../DefaultButton";
import DefaultModal from "../DefaultModal";
import * as React from "react";

interface ISchoolInformationModal {
  showSchoolInformationModal: boolean;
  setShowSchoolInformationModal: React.Dispatch<boolean>;
}

const SchoolInformationModal: React.FC<
  { current: IDatabaseSchool } & ISchoolInformationModal
> = ({
  current,
  showSchoolInformationModal,
  setShowSchoolInformationModal,
}) => {
  return (
    <>
      {showSchoolInformationModal && (
        <DefaultModal>
          <CloseModalContainer
            onClick={() => setShowSchoolInformationModal(false)}
          >
            <span>Filial 3</span>
            <CloseIcon className="icon_close" />
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
            <DefaultButton height="47px">{"Editar"}</DefaultButton>
            <DefaultButton
              backgroundColor="transparent"
              border={`solid 1px ${VARIABLES.blueColor}`}
              height="47px"
              color={VARIABLES.blueColor}
            >
              {"Excluir"}
            </DefaultButton>
          </HorizontalButtonContainer>
        </DefaultModal>
      )}
    </>
  );
};

export default SchoolInformationModal;
