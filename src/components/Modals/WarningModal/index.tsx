import { IDatabaseStudent } from "../../../store/models/student/actions";
import { HorizontalButtonContainer } from "../../DefaultButton/style";
import { IToken } from "../../../store/models/user/actions";
import { VARIABLES } from "../../../styles/global";
import { useTypedSelector } from "../../../store";
import { WarningModalContainer } from "./style";
import DefaultButton from "../../DefaultButton";
import { useHistory } from "react-router-dom";
import DefaultModal from "../DefaultModal";
import { useDispatch } from "react-redux";
import api from "../../../assets/axios";
import { toast } from "react-toastify";
import * as React from "react";

import {
  actionSelectedCourse,
  actionDeleteCourse,
  actionUpdateCourse,
  IDatabaseCourse,
} from "../../../store/models/course/actions";

interface IWarningModal {
  setShowWarningModal: React.Dispatch<boolean>;
  setDeleteCourse?: React.Dispatch<boolean>;
  showWarningModal: boolean;
  children: React.ReactNode;
  deleteCourse?: boolean;
}

const WarningModal: React.FC<IWarningModal> = ({
  setShowWarningModal,
  showWarningModal,
  setDeleteCourse,
  deleteCourse,
  children,
}) => {
  const token: IToken = useTypedSelector((state) => state.token);
  const selectedCourse: IDatabaseCourse = useTypedSelector(
    (state) => state.selectedCourse
  );
  const selectedStudent: IDatabaseStudent = useTypedSelector(
    (state) => state.selectedStudent
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const deleteCourseFunction = () => {
    deleteCourse
      ? api
          .delete(`/course/${selectedCourse.id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(() => {
            dispatch(actionDeleteCourse(selectedCourse));
            toast.success("Curso excluído com sucesso");
            history.push("/school_page");
          })
          .catch((error) => {
            if (error.response.data.detail) {
              return toast.error(error.response.data.detail);
            } else return toast.error("Falha ao tentar excluir curso");
          })
      : api
          .patch(
            `course/student/${selectedCourse.id}/${selectedStudent.email}`,
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((response) => {
            dispatch(actionUpdateCourse(response.data));
            dispatch(actionSelectedCourse(response.data.name));
            setShowWarningModal(false);
            toast.success(
              `${
                selectedStudent.first_name + " " + selectedStudent.last_name
              } removido com sucesso`
            );
          })
          .catch((error) => {
            if (error.response.data.detail)
              return toast.error(error.response.data.detail);
            else return toast.error("Falha ao tentar remover aluno do curso");
          });
  };

  return (
    <>
      {showWarningModal && (
        <DefaultModal>
          <WarningModalContainer>
            <p>{children}</p>
            <HorizontalButtonContainer>
              <DefaultButton
                height="47px"
                onClick={() => {
                  setShowWarningModal(false);
                  setDeleteCourse?.(false);
                }}
              >
                {"Cancelar"}
              </DefaultButton>
              <DefaultButton
                border={`solid 1px ${VARIABLES.blueColor}`}
                onClick={() => deleteCourseFunction()}
                backgroundColor="transparent"
                color={VARIABLES.blueColor}
                height="47px"
              >
                {"Continuar"}
              </DefaultButton>
            </HorizontalButtonContainer>
          </WarningModalContainer>
        </DefaultModal>
      )}
    </>
  );
};

export default WarningModal;
