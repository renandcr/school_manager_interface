import { IToken } from "../../../store/models/user/actions";
import { CloseModalContainer } from "../DefaultModal/style";
import { AddPeopleToCourseContainer } from "./style";
import CloseIcon from "@mui/icons-material/Close";
import { useTypedSelector } from "../../../store";
import DefaultButton from "../../DefaultButton";
import DefaultModal from "../DefaultModal";
import { useDispatch } from "react-redux";
import api from "../../../assets/axios";
import { toast } from "react-toastify";
import * as React from "react";

import {
  actionSelectedCourse,
  actionUpdateCourse,
  IDatabaseCourse,
} from "../../../store/models/course/actions";

interface IAddPeopleToCourseModal {
  setShowAddPeopleModal: React.Dispatch<boolean>;
  setAddInstructor: React.Dispatch<boolean>;
  setAddStudent: React.Dispatch<boolean>;
  children: React.ReactNode;
  addStudent: boolean;
}

const AddPeopleToCourseModal: React.FC<IAddPeopleToCourseModal> = ({
  setShowAddPeopleModal,
  setAddInstructor,
  setAddStudent,
  addStudent,
  children,
}) => {
  const token: IToken = useTypedSelector((state) => state.token);
  const selectedCourse: IDatabaseCourse = useTypedSelector(
    (state) => state.selectedCourse
  );

  const [studentEmail, setStudentEmail] = React.useState<string>("");
  const dispatch = useDispatch();

  const addPeopleToCourse = (data: string) => {
    addStudent
      ? api
          .post(
            `/course/student/${selectedCourse.id}/${data}`,
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((response) => {
            toast.success("Aluno adicionado ao curso com sucesso");
            dispatch(actionUpdateCourse(response.data));
            dispatch(actionSelectedCourse(response.data.name));
            setShowAddPeopleModal(false);
            setAddStudent(false);
          })
          .catch((error) => {
            if (error.response.data.detail) {
              return toast.error(error.response.data.detail);
            } else return toast.error("Falha ao tentar adicionar aluno");
          })
      : api
          .post(
            `/course/instructor/${selectedCourse.id}/${data}`,
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((response) => {
            toast.success("Instrutor(a) adicionado ao curso com sucesso");
            dispatch(actionUpdateCourse(response.data));
            dispatch(actionSelectedCourse(response.data.name));
            setShowAddPeopleModal(false);
            setAddInstructor(false);
          })
          .catch((error) => {
            if (error.response.data.detail) {
              return toast.error(error.response.data.detail);
            }
            if (error.response.data.error) {
              return toast.error(error.response.data.error);
            } else return toast.error("Falha ao tentar adicionar instrutor");
          });
  };

  return (
    <DefaultModal key="add_student_modal">
      <AddPeopleToCourseContainer>
        <CloseModalContainer>
          <span>{selectedCourse.name}</span>
          <CloseIcon
            onClick={() => {
              setShowAddPeopleModal(false);
              setAddInstructor(false);
              setAddStudent(false);
            }}
            className="icon_close"
          />
        </CloseModalContainer>
        {children}
        <div className="add_input_container">
          <input
            type="text"
            placeholder={
              addStudent
                ? "Insira o e-mail do aluno"
                : "Insira o e-mail do instrutor"
            }
            autoFocus
            onChange={(e) => setStudentEmail(e.target.value)}
          />
        </div>
        <DefaultButton
          height="47px"
          onClick={() => addPeopleToCourse(studentEmail)}
        >
          {addStudent
            ? "Adicionar aluno ao curso"
            : "Adicionar instrutor ao curso"}
        </DefaultButton>
      </AddPeopleToCourseContainer>
    </DefaultModal>
  );
};

export default AddPeopleToCourseModal;
