import { IDatabaseSchool } from "../../../store/models/school/actions";
import { HorizontalButtonContainer } from "../../DefaultButton/style";
import { ICourse } from "../../../store/models/course/actions";
import { IToken } from "../../../store/models/user/actions";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTypedSelector } from "../../../store";
import { VARIABLES } from "../../../styles/global";
import DefaultButton from "../../DefaultButton";
import { CourseFormContainer } from "./style";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import api from "../../../assets/axios";
import { toast } from "react-toastify";
import * as React from "react";
import * as yup from "yup";

interface ICourseForm {
  setShowFormCourse: React.Dispatch<boolean>;
  setCourseUpdate: React.Dispatch<boolean>;
  showFormCourse: boolean;
  courseUpdate: boolean;
}

const CourseForm: React.FC<ICourseForm> = ({
  setShowFormCourse,
  setCourseUpdate,
  showFormCourse,
  courseUpdate,
}) => {
  const token: IToken = useTypedSelector((state) => state.token);
  const selectedSchool: IDatabaseSchool = useTypedSelector(
    (state) => state.selectedSchool
  );

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .max(50, "Limite de 50 caracteres")
      .required("Nome é obrigatório"),
    description: yup
      .string()
      .max(255, "Limite de 255 caracteres")
      .required("Descrição é obrigatório"),
  });

  const { handleSubmit, register, formState, clearErrors } = useForm<ICourse>({
    resolver: yupResolver(formSchema),
  });

  const handleRequests = (data: ICourse) => {
    api
      .post(`/course/create/${selectedSchool.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Curso cadastrado com sucesso");
      })
      .catch((error) => {
        if (error.response.data.name) {
          return toast.error(error.response.data.name[0]);
        } else if (error.response.data.detail) {
          return toast.error(error.response.data.detail);
        } else return toast.error("Falha ao tentar cadastrar curso");
      });
  };

  return (
    <>
      {showFormCourse && (
        <CourseFormContainer onSubmit={handleSubmit(handleRequests)}>
          <h2>Cadastrar curso</h2>
          <TextField
            className="text_field"
            label="Nome"
            type="text"
            autoFocus
            {...register("name")}
          />
          {formState.errors.name && <p>{formState.errors.name?.message}</p>}

          <TextField
            // id="outlined-textarea"
            className="text_field text_area"
            label="Descrição"
            type="text"
            placeholder="Destalhes sobre o curso"
            multiline
            rows={4}
            {...register("description")}
          />
          {formState.errors.description && (
            <p>{formState.errors.description?.message}</p>
          )}
          <HorizontalButtonContainer>
            <DefaultButton height="55px">{"Salvar curso"}</DefaultButton>
            <DefaultButton
              border={`solid 1px ${VARIABLES.blueColor}`}
              backgroundColor="transparent"
              color={VARIABLES.blueColor}
              height="55px"
              onClick={(e) => {
                setShowFormCourse(false);
                e.preventDefault();
                clearErrors();
              }}
            >
              {"Cancelar"}
            </DefaultButton>
          </HorizontalButtonContainer>
        </CourseFormContainer>
      )}
    </>
  );
};

export default CourseForm;
