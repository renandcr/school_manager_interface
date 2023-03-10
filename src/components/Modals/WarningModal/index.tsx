import { HorizontalButtonContainer } from "../../DefaultButton/style";
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
  actionDeleteStudent,
  IDatabaseStudent,
} from "../../../store/models/student/actions";

import {
  actionDeleteSchool,
  IDatabaseSchool,
} from "../../../store/models/school/actions";

import {
  actionSelectedCourse,
  actionDeleteCourse,
  actionUpdateCourse,
  IDatabaseCourse,
} from "../../../store/models/course/actions";

import {
  actionDeleteUser,
  IDatabaseUser,
  IToken,
} from "../../../store/models/user/actions";

interface IWarningModal {
  setShowWarningModalOnCoursePage?: React.Dispatch<boolean>;
  setShowWarningModalOnSchoolPage?: React.Dispatch<boolean>;
  setRemoveInstructorFromCourse?: React.Dispatch<boolean>;
  setRemoveStudentFromCourse?: React.Dispatch<boolean>;
  setDeleteStudent?: React.Dispatch<boolean>;
  setDeleteCourse?: React.Dispatch<boolean>;
  setDeleteSchool?: React.Dispatch<boolean>;
  setDeleteUser?: React.Dispatch<boolean>;
  removeInstructorFromCourse?: boolean;
  removeStudentFromCourse?: boolean;
  children: React.ReactNode;
  deleteStudent?: boolean;
  deleteSchool?: boolean;
  deleteCourse?: boolean;
  deleteUser?: boolean;
}

const WarningModal: React.FC<IWarningModal> = ({
  setShowWarningModalOnCoursePage,
  setShowWarningModalOnSchoolPage,
  setRemoveInstructorFromCourse,
  setRemoveStudentFromCourse,
  removeInstructorFromCourse,
  removeStudentFromCourse,
  setDeleteStudent,
  setDeleteCourse,
  setDeleteSchool,
  setDeleteUser,
  deleteStudent,
  deleteCourse,
  deleteSchool,
  deleteUser,
  children,
}) => {
  const token: IToken = useTypedSelector((state) => state.token);
  const selectedCourse: IDatabaseCourse = useTypedSelector(
    (state) => state.selectedCourse
  );
  const selectedStudent: IDatabaseStudent = useTypedSelector(
    (state) => state.selectedStudent
  );
  const selectedSchool: IDatabaseSchool = useTypedSelector(
    (state) => state.selectedSchool
  );
  const selectedUser: IDatabaseUser = useTypedSelector(
    (state) => state.selectedUser
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const deletionRequests = () => {
    deleteStudent &&
      api
        .delete(`/student/${selectedStudent.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          toast.success(
            `${
              selectedStudent.first_name + " " + selectedStudent.last_name
            } exclu??do(a) com sucesso`
          );
          dispatch(actionDeleteStudent(selectedStudent));
          setShowWarningModalOnSchoolPage?.(false);
          setDeleteStudent?.(false);
        })
        .catch((error) => {
          if (error.response.data.detail) {
            return toast.error(error.response.data.detail);
          } else return toast.error("Falha ao tentar excluir aluno");
        });

    deleteCourse &&
      api
        .delete(`/course/${selectedCourse.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          dispatch(actionDeleteCourse(selectedCourse));
          toast.success("Curso exclu??do com sucesso");
          history.push("/school_page");
        })
        .catch((error) => {
          if (error.response.data.detail) {
            return toast.error(error.response.data.detail);
          } else return toast.error("Falha ao tentar excluir curso");
        });

    removeStudentFromCourse &&
      api
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
          setShowWarningModalOnCoursePage?.(false);
          toast.success(
            `${
              selectedStudent.first_name + " " + selectedStudent.last_name
            } removido(a) com sucesso`
          );
        })
        .catch((error) => {
          if (error.response.data.detail)
            return toast.error(error.response.data.detail);
          else return toast.error("Falha ao tentar remover aluno do curso");
        });

    removeInstructorFromCourse &&
      api
        .patch(
          `course/instructor/${selectedCourse.id}/${selectedUser.email}`,
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
          setShowWarningModalOnCoursePage?.(false);
          toast.success(
            `${
              selectedUser.first_name + " " + selectedUser.last_name
            } removido(a) com sucesso`
          );
        })
        .catch((error) => {
          if (error.response.data.detail)
            return toast.error(error.response.data.detail);
          else return toast.error("Falha ao tentar remover instrutor do curso");
        });

    deleteSchool &&
      api
        .delete(`/school/${selectedSchool.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          dispatch(actionDeleteSchool(selectedSchool));
          toast.success("Escola exclu??da com sucesso");
          history.push("/home_page");
        })
        .catch((error) => {
          if (error.response.data.detail) {
            return toast.error(error.response.data.detail);
          } else return toast.error("Falha ao tentar excluir escola");
        });

    deleteUser &&
      api
        .delete(`/user/${selectedUser.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          toast.success(
            `${
              selectedUser.first_name + " " + selectedUser.last_name
            } exclu??do(a) com sucesso`
          );
          setShowWarningModalOnSchoolPage?.(false);
          dispatch(actionDeleteUser(selectedUser));
        })
        .catch((error) => {
          if (error.response.data.detail) {
            return toast.error(error.response.data.detail);
          } else return toast.error("Falha ao tentar excluir funcion??rio");
        });
  };

  return (
    <DefaultModal key="warning_modal">
      <WarningModalContainer>
        {children}
        <HorizontalButtonContainer>
          <DefaultButton
            height="47px"
            onClick={() => {
              setShowWarningModalOnCoursePage?.(false);
              setShowWarningModalOnSchoolPage?.(false);
              setRemoveInstructorFromCourse?.(false);
              setRemoveStudentFromCourse?.(false);
              setDeleteStudent?.(false);
              setDeleteCourse?.(false);
              setDeleteSchool?.(false);
              setDeleteUser?.(false);
            }}
          >
            {"Cancelar"}
          </DefaultButton>
          <DefaultButton
            onClick={() => deletionRequests()}
            backgroundcolor="transparent"
            border="solid 1px red"
            height="47px"
            color="red"
          >
            {"Continuar"}
          </DefaultButton>
        </HorizontalButtonContainer>
      </WarningModalContainer>
    </DefaultModal>
  );
};

export default WarningModal;
