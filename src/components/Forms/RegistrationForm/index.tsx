import { RegistrationFormContainer, LoginOptionContainer } from "./style";
import { IUser } from "../../../store/models/user/actions";
import { yupResolver } from "@hookform/resolvers/yup";
import DefaultButton from "../../DefaultButton";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import api from "../../../assets/axios";
import { toast } from "react-toastify";
import * as React from "react";
import * as yup from "yup";

export interface IRegistrationForm {
  setShowRegistrationForm: React.Dispatch<boolean>;
  showRegistrationForm: boolean;
}

const RegistrationForm: React.FC<IRegistrationForm> = ({
  setShowRegistrationForm,
  showRegistrationForm,
}) => {
  const FormSchema = yup.object().shape({
    first_name: yup
      .string()
      .required("Nome é obrigatório")
      .max(50, "Limite de 50 caracteres")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        "Não é permitido números nesse campo"
      ),
    last_name: yup
      .string()
      .required("Sobrenome é obrigatório")
      .max(50, "Limite de 50 caracteres")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        "Não é permitido números nesse campo"
      ),
    email: yup
      .string()
      .required("E-mail é obrigatório")
      .email("Tipo de e-mail inválido")
      .max(75, "Limite de 75 caracteres"),
    username: yup
      .string()
      .required("Username é obrigatório")
      .max(50, "Limite de 50 caracteres"),
    password: yup
      .string()
      .required("Senha é obrigatório")
      .min(6, "Senha deve ter no mínimo 6 dígitos"),
    confirm_password: yup
      .string()
      .required("Digite a senha novamente")
      .oneOf([yup.ref("password")], "As senhas não são iguais"),
  });

  const { register, handleSubmit, formState } = useForm<IUser>({
    resolver: yupResolver(FormSchema),
  });

  const submissionMethod = (data: IUser) => {
    delete data.confirm_password;
    api
      .post("/user", data)
      .then(() => {
        toast.success("Cadastro realizado com sucesso");
        setShowRegistrationForm(false);
      })
      .catch((error) => {
        toast.error(error.response.data.email[0]);
      });
  };

  return (
    <>
      {showRegistrationForm && (
        <RegistrationFormContainer onSubmit={handleSubmit(submissionMethod)}>
          <h1>Cadastre seus dados</h1>
          <TextField
            className="text_field"
            label="Nome"
            type="text"
            autoFocus
            {...register("first_name")}
          />
          {formState.errors?.first_name && (
            <p>{formState.errors.first_name?.message}</p>
          )}

          <TextField
            className="text_field"
            label="Sobrenome"
            type="text"
            {...register("last_name")}
          />
          {formState.errors?.last_name && (
            <p>{formState.errors.last_name?.message}</p>
          )}

          <TextField
            className="text_field"
            label="E-mail"
            type="text"
            {...register("email")}
          />
          {formState.errors?.email && <p>{formState.errors.email?.message}</p>}

          <TextField
            className="text_field"
            label="Username"
            type="text"
            placeholder="Nome que será exibido"
            {...register("username")}
          />
          {formState.errors?.username && (
            <p>{formState.errors.username?.message}</p>
          )}

          <TextField
            className="text_field"
            label="Senha"
            type="password"
            {...register("password")}
          />
          {formState.errors?.password && (
            <p>{formState.errors.password?.message}</p>
          )}

          <TextField
            className="text_field"
            label="Confirmar senha"
            type="password"
            {...register("confirm_password")}
          />
          {formState.errors?.confirm_password && (
            <p>{formState.errors.confirm_password?.message}</p>
          )}
          <LoginOptionContainer>
            <span>Já possui conta?</span>
            <span onClick={() => setShowRegistrationForm(false)}>
              Faça o login
            </span>
          </LoginOptionContainer>
          <DefaultButton height="55px">{"Cadastrar"}</DefaultButton>
        </RegistrationFormContainer>
      )}
    </>
  );
};

export default RegistrationForm;
