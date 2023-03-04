import { actionSaveToken } from "../../../store/models/user/actions";
import { LoginOptionContainer } from "../RegistrationForm/style";
import { IUserLogin } from "../../../store/models/user/actions";
import { yupResolver } from "@hookform/resolvers/yup";
import DefaultButton from "../../DefaultButton";
import { LoginFormContainer } from "./style";
import { useDispatch } from "react-redux";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import api from "../../../assets/axios";
import { toast } from "react-toastify";
import * as React from "react";
import * as yup from "yup";

interface ILoginForm {
  setShowRegistrationForm: React.Dispatch<boolean>;
}

const LoginForm: React.FC<ILoginForm> = ({ setShowRegistrationForm }) => {
  const dispatch = useDispatch();
  const history = useHistory();

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
      .then((response) => {
        dispatch(actionSaveToken(response.data.access));
        toast.success("Login realizado com sucesso");
        history.push("/home_page");
      })
      .catch((error) => {
        if (error.response.data.detail) {
          return toast.error(error.response.data.detail);
        } else return toast.error("Falha ao tentar realizar login");
      });
  };

  return (
    <LoginFormContainer
      onSubmit={handleSubmit(handleRequests)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      <h2>Faça o login</h2>
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
      {formState.errors.password && <p>{formState.errors.password?.message}</p>}
      <LoginOptionContainer>
        <span>Ainda não possui conta?</span>
        <span
          onClick={() => {
            setShowRegistrationForm(true);
          }}
        >
          Cadastre-se
        </span>
      </LoginOptionContainer>
      <DefaultButton height="55px">{"Fazer login"}</DefaultButton>
    </LoginFormContainer>
  );
};

export default LoginForm;
