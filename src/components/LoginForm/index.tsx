import { LoginOptionContainer } from "../RegistrationForm/style";
import { yupResolver } from "@hookform/resolvers/yup";
import DefaultButton from "../DefaultButton";
import { LoginFormContainer } from "./style";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../../assets/axios";
import * as React from "react";
import * as yup from "yup";

interface IUserLogin {
  email: string;
  password: string;
}

interface ILoginForm {
  showRegistrationForm: boolean;
  setShowRegistrationForm: React.Dispatch<boolean>;
}

const LoginForm: React.FC<ILoginForm> = ({
  showRegistrationForm,
  setShowRegistrationForm,
}) => {
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .max(75, "Limite de 75 caracteres")
      .email("Tipo de e-mail inválido")
      .required("E-mail é obrigatório"),
    password: yup.string().required("Password é obrigatório"),
  });

  const { handleSubmit, register, formState } = useForm<IUserLogin>({
    resolver: yupResolver(formSchema),
  });

  const handleRequests = (data: IUserLogin) => {
    api
      .post("/login", data)
      .then(() => {
        toast.success("Login realizado com sucesso");
      })
      .catch((error) => toast.error(error.response.data.detail));
  };

  return (
    <>
      {!showRegistrationForm && (
        <LoginFormContainer onSubmit={handleSubmit(handleRequests)}>
          <h1>Faça o login</h1>
          <TextField
            className="text_field"
            label="E-mail"
            type="text"
            autoFocus
            {...register("email")}
          />
          {formState.errors.email && <p>{formState.errors.email?.message}</p>}

          <TextField
            className="text_field"
            label="Senha"
            type="password"
            {...register("password")}
          />
          {formState.errors.password && (
            <p>{formState.errors.password?.message}</p>
          )}
          <LoginOptionContainer>
            <span>Ainda não possui conta?</span>
            <span onClick={() => setShowRegistrationForm(true)}>
              Cadastre-se
            </span>
          </LoginOptionContainer>
          <DefaultButton height="55px">{"Fazer login"}</DefaultButton>
        </LoginFormContainer>
      )}
    </>
  );
};

export default LoginForm;