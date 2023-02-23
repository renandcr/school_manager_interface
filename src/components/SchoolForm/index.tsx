import { HorizontalButtonContainer } from "../DefaultButton/style";
import { yupResolver } from "@hookform/resolvers/yup";
import { VARIABLES } from "../../styles/global";
import { useTypedSelector } from "../../store";
import { topScreen } from "../../assets/utils";
import { SchoolFormContainer } from "./style";
import DefaultButton from "../DefaultButton";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import api from "../../assets/axios";
import * as React from "react";
import * as yup from "yup";

import {
  actionUpdateSchool,
  IDatabaseSchool,
  ISchool,
} from "../../store/models/school/actions";

interface ISchoolForm {
  showFormSchool: boolean;
  setShowFormSchool: React.Dispatch<boolean>;
}

const SchoolForm: React.FC<ISchoolForm> = ({
  showFormSchool,
  setShowFormSchool,
}) => {
  const selectedSchool: IDatabaseSchool = useTypedSelector(
    (state) => state.selectedSchool
  );

  const dispatch = useDispatch();

  const formSchema = yup.object().shape({
    branch: yup
      .string()
      .max(5, "Limite de 5 caracteres")
      .required("Filial é obrigatório"),
    name: yup
      .string()
      .max(50, "Limite de 50 caracteres")
      .required("Nome é obrigatório"),
    email: yup
      .string()
      .max(75, "Limite de 75 caracteres")
      .email("Tipo de e-mail inválido")
      .required("E-mail é obrigatório"),
    zip_code: yup
      .string()
      .max(8, "Limite de 8 caracteres")
      .required("Cep é obrigatório"),
    state: yup
      .string()
      .max(2, "Limite de 2 caracteres")
      .required("Estado é obrigatório"),
    city: yup
      .string()
      .max(50, "Limite de 50 caracteres")
      .required("Cidade é obrigatório"),
    street: yup
      .string()
      .max(50, "Limite de 50 caracteres")
      .required("Rua é obrigatório"),
    district: yup
      .string()
      .max(50, "Limite de 50 caracteres")
      .required("Bairro é obrigatório"),
    number: yup
      .string()
      .max(10, "Limite de 10 caracteres")
      .required("Número é obrigatório"),
    phone: yup
      .string()
      .max(14, "Limite de 14 caracteres")
      .required("Telefone é obrigatório"),
  });

  const { handleSubmit, register, formState } = useForm<ISchool>({
    resolver: yupResolver(formSchema),
  });

  const handleRequests = (data: ISchool) => {
    api
      .post("/school", data)
      .then((response) => {
        // dispatch(actionUpdateSchool(response.data))
        console.log("response -", response);
        toast.success("Alteração concluída com sucesso");
      })
      // .catch((error) => toast.error(error.response.data.detail));
      .catch((error) => console.log(error));
  };

  return (
    <>
      {showFormSchool && (
        <SchoolFormContainer onSubmit={handleSubmit(handleRequests)}>
          <h1>Editar informações</h1>
          <TextField
            className="text_field"
            label="Nome"
            type="text"
            defaultValue={selectedSchool.name}
            {...register("name")}
          />
          {formState.errors.name && <p>{formState.errors.name?.message}</p>}

          <TextField
            className="text_field"
            label="E-mail"
            type="text"
            defaultValue={selectedSchool.email}
            {...register("email")}
          />
          {formState.errors.email && <p>{formState.errors.email?.message}</p>}

          <TextField
            className="text_field"
            label="Filial"
            type="text"
            defaultValue={selectedSchool.branch}
            autoFocus
            {...register("branch")}
          />
          {formState.errors.branch && <p>{formState.errors.branch?.message}</p>}

          <TextField
            className="text_field"
            label="Cep"
            type="text"
            defaultValue={selectedSchool.zip_code}
            {...register("zip_code")}
          />
          {formState.errors.zip_code && (
            <p>{formState.errors.zip_code?.message}</p>
          )}

          <TextField
            className="text_field"
            label="Estado"
            type="text"
            defaultValue={selectedSchool.state}
            {...register("state")}
          />
          {formState.errors.state && <p>{formState.errors.state?.message}</p>}

          <TextField
            className="text_field"
            label="Cidade"
            type="text"
            defaultValue={selectedSchool.city}
            {...register("city")}
          />
          {formState.errors.city && <p>{formState.errors.city?.message}</p>}

          <TextField
            className="text_field"
            label="Rua"
            type="text"
            defaultValue={selectedSchool.street}
            {...register("street")}
          />
          {formState.errors.street && <p>{formState.errors.street?.message}</p>}

          <TextField
            className="text_field"
            label="Bairro"
            type="text"
            defaultValue={selectedSchool.district}
            {...register("district")}
          />
          {formState.errors.district && (
            <p>{formState.errors.district?.message}</p>
          )}

          <TextField
            className="text_field"
            label="Número"
            type="text"
            defaultValue={selectedSchool.number}
            {...register("number")}
          />
          {formState.errors.number && <p>{formState.errors.number?.message}</p>}

          <TextField
            className="text_field"
            label="Telefone"
            type="text"
            defaultValue={selectedSchool.phone}
            {...register("phone")}
          />
          {formState.errors.phone && <p>{formState.errors.phone?.message}</p>}
          <HorizontalButtonContainer>
            <DefaultButton height="55px">{"Salvar alterações"}</DefaultButton>
            <DefaultButton
              border={`solid 1px ${VARIABLES.blueColor}`}
              backgroundColor="transparent"
              color={VARIABLES.blueColor}
              height="55px"
              onClick={() => {
                setShowFormSchool(false);
                topScreen();
              }}
            >
              {"Cancelar"}
            </DefaultButton>
          </HorizontalButtonContainer>
        </SchoolFormContainer>
      )}
    </>
  );
};

export default SchoolForm;
