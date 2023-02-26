import { IDatabaseStudent } from "../../../store/models/student/actions";
import { HorizontalButtonContainer } from "../../DefaultButton/style";
import { CloseModalContainer } from "../DefaultModal/style";
import StudentInformation from "../../StudentInformation";
import { dateHandler } from "../../../assets/utils";
import { VARIABLES } from "../../../styles/global";
import CloseIcon from "@mui/icons-material/Close";
import DefaultButton from "../../DefaultButton";
import DefaultModal from "../DefaultModal";
import * as React from "react";

interface IStudentInformationModal {
  setShowStudentInformationModal: React.Dispatch<boolean>;
  setShowFormStudent: React.Dispatch<boolean>;
  setStudentUpdate: React.Dispatch<boolean>;
  showStudentInformationModal: boolean;
}

const StudentInformationModal: React.FC<
  { current: IDatabaseStudent } & IStudentInformationModal
> = ({
  setShowStudentInformationModal,
  showStudentInformationModal,
  setShowFormStudent,
  setStudentUpdate,
  current,
}) => {
  return (
    <>
      {showStudentInformationModal && (
        <DefaultModal>
          <CloseModalContainer
            onClick={() => setShowStudentInformationModal(false)}
          >
            <span>{`Desde ${dateHandler(new Date(current.date_joined))}`}</span>
            <CloseIcon className="icon_close" />
          </CloseModalContainer>
          <StudentInformation
            key={current.id}
            first_name={current.first_name}
            last_name={current.last_name}
            email={current.email}
            date_of_birth={current.date_of_birth}
            cpf={current.cpf}
            phone={current.phone}
            gender={current.gender}
            date_joined={current.date_joined}
          />
          <HorizontalButtonContainer>
            <DefaultButton
              height="47px"
              onClick={() => {
                setShowStudentInformationModal(false);
                setShowFormStudent(true);
                setStudentUpdate(true);
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
              {"Excluir aluno"}
            </DefaultButton>
          </HorizontalButtonContainer>
        </DefaultModal>
      )}
    </>
  );
};

export default StudentInformationModal;
