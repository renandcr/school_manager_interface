import { CloseModalContainer } from "../DefaultModal/style";
import { IToken } from "../../../store/models/user/actions";
import { AddStudentToCourseContainer } from "./style";
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

interface IAddStudentToCourseModal {
  setShowAddStudentModal: React.Dispatch<boolean>;
  showAddStudentModal: boolean;
}

const AddStudentToCourseModal: React.FC<IAddStudentToCourseModal> = ({
  setShowAddStudentModal,
  showAddStudentModal,
}) => {
  const selectedCourse: IDatabaseCourse = useTypedSelector(
    (state) => state.selectedCourse
  );
  const token: IToken = useTypedSelector((state) => state.token);
  const [studentEmail, setStudentEmail] = React.useState<string>("");

  const dispatch = useDispatch();

  const addStudentToCourse = (data: string) => {
    api
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
        setShowAddStudentModal(false);
      })
      .catch((error) => {
        if (error.response.data.detail) {
          return toast.error(error.response.data.detail);
        } else return toast.error("Falha ao tentar adicionar aluno");
      });
  };

  return (
    <>
      {showAddStudentModal && (
        <DefaultModal>
          <AddStudentToCourseContainer>
            <CloseModalContainer onClick={() => setShowAddStudentModal(false)}>
              <span>{selectedCourse.name}</span>
              <CloseIcon className="icon_close" />
            </CloseModalContainer>
            <p>
              Insira o e-mail do aluno para adicioná-lo ao curso{" "}
              <span>{selectedCourse.name}.</span>
            </p>
            <div className="add_input_container">
              <input
                type="text"
                placeholder="Insira o e-mail do aluno"
                autoFocus
                onChange={(e) => setStudentEmail(e.target.value)}
              />
            </div>
            <DefaultButton
              height="47px"
              onClick={() => addStudentToCourse(studentEmail)}
            >
              {"Adicionar aluno ao curso"}
            </DefaultButton>
          </AddStudentToCourseContainer>
        </DefaultModal>
      )}
    </>
  );
};

export default AddStudentToCourseModal;
