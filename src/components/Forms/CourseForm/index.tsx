import { IDatabaseSchool } from "../../../store/models/school/actions";
import { HorizontalButtonContainer } from "../../DefaultButton/style";
import { IToken } from "../../../store/models/user/actions";
import { yupResolver } from "@hookform/resolvers/yup";
import { VARIABLES } from "../../../styles/global";
import { useTypedSelector } from "../../../store";
import { topScreen } from "../../../assets/utils";
import DefaultButton from "../../DefaultButton";
import { CourseFormContainer } from "./style";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import api from "../../../assets/axios";
import { toast } from "react-toastify";
import * as React from "react";
import * as yup from "yup";

import {
  actionCreateCourse,
  actionUpdateCourse,
  IDatabaseCourse,
  ICourse,
} from "../../../store/models/course/actions";

interface ICourseForm {
  setShowCourseForm: React.Dispatch<boolean>;
  setCourseUpdate: React.Dispatch<boolean>;
  showCourseForm: boolean;
  courseUpdate: boolean;
}

const CourseForm: React.FC<ICourseForm> = ({
  setShowCourseForm,
  setCourseUpdate,
  showCourseForm,
  courseUpdate,
}) => {
  const token: IToken = useTypedSelector((state) => state.token);
  const selectedSchool: IDatabaseSchool = useTypedSelector(
    (state) => state.selectedSchool
  );
  const selectedCourse: IDatabaseCourse = useTypedSelector(
    (state) => state.selectedCourse
  );

  const dispatch = useDispatch();

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

  const { handleSubmit, register, formState, clearErrors, reset } =
    useForm<ICourse>({
      resolver: yupResolver(formSchema),
    });

  React.useEffect(() => {
    courseUpdate ? reset(selectedCourse) : reset({});
  }, [courseUpdate]);

  const handleRequests = (data: ICourse) => {
    !courseUpdate
      ? api
          .post(`/course/create/${selectedSchool.id}`, data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            toast.success("Curso cadastrado com sucesso");
            dispatch(actionCreateCourse(response.data));
            setShowCourseForm(false);
            topScreen();
          })
          .catch((error) => {
            if (error.response.data.name) {
              return toast.error(error.response.data.name[0]);
            } else if (error.response.data.detail) {
              return toast.error(error.response.data.detail);
            } else return toast.error("Falha ao tentar cadastrar curso");
          })
      : api
          .patch(`/course/${selectedCourse.id}`, data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            toast.success("Curso atualizado com sucesso");
            dispatch(actionUpdateCourse(response.data));
            setShowCourseForm(false);
            setCourseUpdate(false);
            topScreen();
          })
          .catch((error) => {
            if (error.response.data.name)
              return toast.error(error.response.data.name[0]);
            else if (error.response.data.detail)
              return toast.error(error.response.data.detail);
            else return toast.error("Falha ao tentar atualizar curso");
          });
  };

  return (
    <>
      {showCourseForm && (
        <CourseFormContainer
          onSubmit={handleSubmit(handleRequests)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          {!courseUpdate ? (
            <h2>Cadastrar curso</h2>
          ) : (
            <h2>Editar informações</h2>
          )}
          <TextField
            className="text_field"
            label="Nome"
            type="text"
            autoFocus
            {...register("name")}
          />
          {formState.errors.name && <p>{formState.errors.name?.message}</p>}

          <TextField
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
            {!courseUpdate ? (
              <DefaultButton height="55px">{"Salvar curso"}</DefaultButton>
            ) : (
              <DefaultButton height="55px">{"Salvar alterações"}</DefaultButton>
            )}
            <DefaultButton
              border={`solid 1px ${VARIABLES.blueColor}`}
              backgroundcolor="transparent"
              color={VARIABLES.blueColor}
              height="55px"
              onClick={(e) => {
                setShowCourseForm(false);
                setCourseUpdate(false);
                e.preventDefault();
                clearErrors();
                topScreen();
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
