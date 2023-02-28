import { HorizontalButtonContainer } from "../../DefaultButton/style";
import { IToken } from "../../../store/models/user/actions";
import { yupResolver } from "@hookform/resolvers/yup";
import { VARIABLES } from "../../../styles/global";
import { useTypedSelector } from "../../../store";
import { topScreen } from "../../../assets/utils";
import { SchoolFormContainer } from "./style";
import DefaultButton from "../../DefaultButton";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import api from "../../../assets/axios";
import * as React from "react";
import * as yup from "yup";

import {
  actionUpdateSchool,
  IDatabaseSchool,
  ISchool,
} from "../../../store/models/school/actions";

interface ISchoolForm {
  setShowFormSchool: React.Dispatch<boolean>;
  setSchoolUpdate: React.Dispatch<boolean>;
  showFormSchool: boolean;
  schoolUpdate: boolean;
}

const SchoolForm: React.FC<ISchoolForm> = ({
  setShowFormSchool,
  setSchoolUpdate,
  showFormSchool,
  schoolUpdate,
}) => {
  const selectedSchool: IDatabaseSchool = useTypedSelector(
    (state) => state.selectedSchool
  );
  const token: IToken = useTypedSelector((state) => state.token);

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

  const { handleSubmit, register, reset, formState, clearErrors } =
    useForm<ISchool>({
      resolver: yupResolver(formSchema),
    });

  React.useEffect(() => {
    schoolUpdate ? reset(selectedSchool) : reset({});
  }, [schoolUpdate]);

  const handleRequests = (data: ISchool) => {
    schoolUpdate
      ? api
          .patch(`/school/${selectedSchool.id}`, data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            toast.success("Alteração concluída com sucesso");
            dispatch(actionUpdateSchool(response.data));
            setShowFormSchool(false);
            setSchoolUpdate(false);
            topScreen();
          })
          .catch((error) => toast.error(error.response.data.detail))
      : api
          .post(`/school`, data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(() => {
            toast.success("Escola criada com sucesso");
            setShowFormSchool(false);
            topScreen();
          })
          .catch((error) => toast.error(error.response.data.detail));
  };

  return (
    <>
      {showFormSchool && (
        <SchoolFormContainer
          onSubmit={handleSubmit(handleRequests)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          {schoolUpdate ? (
            <h2>Editar informações</h2>
          ) : (
            <h2>Cadastrar Escola</h2>
          )}
          <TextField
            className="text_field"
            label="Nome"
            type="text"
            autoFocus
            {...register("name")}
          />
          {formState.errors.name && <p>{formState.errors.name.message}</p>}

          <TextField
            className="text_field"
            label="E-mail"
            type="email"
            {...register("email")}
          />
          {formState.errors.email && <p>{formState.errors.email.message}</p>}

          <TextField
            className="text_field"
            label="Filial"
            type="text"
            {...register("branch")}
          />
          {formState.errors.branch && <p>{formState.errors.branch?.message}</p>}

          <TextField
            className="text_field"
            label="Cep"
            type="text"
            {...register("zip_code")}
          />
          {formState.errors.zip_code && (
            <p>{formState.errors.zip_code?.message}</p>
          )}

          <TextField
            className="text_field"
            label="Estado"
            type="text"
            {...register("state")}
          />
          {formState.errors.state && <p>{formState.errors.state.message}</p>}

          <TextField
            className="text_field"
            label="Cidade"
            type="text"
            {...register("city")}
          />
          {formState.errors.city && <p>{formState.errors.city.message}</p>}

          <TextField
            className="text_field"
            label="Rua"
            type="text"
            {...register("street")}
          />
          {formState.errors.street && <p>{formState.errors.street.message}</p>}

          <TextField
            className="text_field"
            label="Bairro"
            type="text"
            {...register("district")}
          />
          {formState.errors.district && (
            <p>{formState.errors.district?.message}</p>
          )}

          <TextField
            className="text_field"
            label="Número"
            type="text"
            {...register("number")}
          />
          {formState.errors.number && <p>{formState.errors.number.message}</p>}

          <TextField
            className="text_field"
            label="Telefone"
            type="text"
            key={selectedSchool.phone}
            {...register("phone")}
          />
          {formState.errors.phone && <p>{formState.errors.phone.message}</p>}
          <HorizontalButtonContainer>
            {schoolUpdate ? (
              <DefaultButton height="55px">{"Salvar alterações"}</DefaultButton>
            ) : (
              <DefaultButton height="55px">{"Salvar escola"}</DefaultButton>
            )}
            <DefaultButton
              border={`solid 1px ${VARIABLES.blueColor}`}
              backgroundcolor="transparent"
              color={VARIABLES.blueColor}
              height="55px"
              onClick={(e) => {
                setShowFormSchool(false);
                setSchoolUpdate(false);
                e.preventDefault();
                clearErrors();
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
