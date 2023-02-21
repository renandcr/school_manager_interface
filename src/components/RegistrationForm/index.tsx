import { RegistrationFormContainer, LoginOptionContainer } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import DefaultButton from "../DefaultButton";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { toast } from "react-toastify";
import api from "../../assets/axios";
import * as React from "react";
import * as yup from "yup";

interface IUserRegistration {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
  confirm_password?: string;
}

interface IRegistrationForm {
  showRegistrationForm: boolean;
  setShowRegistrationForm: React.Dispatch<boolean>;
}

const RegistrationForm: React.FC<IRegistrationForm> = ({
  showRegistrationForm,
  setShowRegistrationForm,
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserRegistration>({ resolver: yupResolver(FormSchema) });

  const submissionMethod = (data: IUserRegistration) => {
    delete data.confirm_password;
    api
      .post("/user", data)
      .then(() => {
        toast.success("Cadastro realizado com sucesso");
        setShowRegistrationForm(true);
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
          {errors?.first_name && <p>{errors.first_name?.message}</p>}

          <TextField
            className="text_field"
            label="Sobrenome"
            type="text"
            {...register("last_name")}
          />
          {errors?.last_name && <p>{errors.last_name?.message}</p>}

          <TextField
            className="text_field"
            label="E-mail"
            type="text"
            {...register("email")}
          />
          {errors?.email && <p>{errors.email?.message}</p>}

          <TextField
            className="text_field"
            label="Username"
            type="text"
            placeholder="Nome que será exibido"
            {...register("username")}
          />
          {errors?.username && <p>{errors.username?.message}</p>}

          <TextField
            className="text_field"
            label="Senha"
            type="text"
            {...register("password")}
          />
          {errors?.password && <p>{errors.password?.message}</p>}

          <TextField
            className="text_field"
            label="Confirmar senha"
            type="text"
            {...register("confirm_password")}
          />
          {errors?.confirm_password && (
            <p>{errors.confirm_password?.message}</p>
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
