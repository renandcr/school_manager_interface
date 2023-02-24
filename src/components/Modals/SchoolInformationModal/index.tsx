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
  setShowSchoolInformationModal: React.Dispatch<boolean>;
  setShowFormSchool: React.Dispatch<boolean>;
  showSchoolInformationModal: boolean;
}

const SchoolInformationModal: React.FC<
  { current: IDatabaseSchool } & ISchoolInformationModal
> = ({
  setShowSchoolInformationModal,
  showSchoolInformationModal,
  setShowFormSchool,
  current,
}) => {
  return (
    <>
      {showSchoolInformationModal && (
        <DefaultModal>
          <CloseModalContainer
            onClick={() => setShowSchoolInformationModal(false)}
          >
            <span>Filial {current.branch}</span>
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
            <DefaultButton
              height="47px"
              onClick={() => {
                setShowSchoolInformationModal(false);
                setShowFormSchool(true);
              }}
            >
              {"Editar"}
            </DefaultButton>
            <DefaultButton
              border={`solid 1px ${VARIABLES.blueColor}`}
              backgroundColor="transparent"
              color={VARIABLES.blueColor}
              height="47px"
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
