import { RegistrationFormContainer, LoginOptionContainer } from "./style";
import { IDatabaseSchool } from "../../../store/models/school/actions";
import { HorizontalButtonContainer } from "../../DefaultButton/style";
import { yupResolver } from "@hookform/resolvers/yup";
import { VARIABLES } from "../../../styles/global";
import { useTypedSelector } from "../../../store";
import DefaultButton from "../../DefaultButton";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import api from "../../../assets/axios";
import { toast } from "react-toastify";
import * as React from "react";
import * as yup from "yup";

import {
  IDatabaseUser,
  IToken,
  IUser,
} from "../../../store/models/user/actions";

const role = [
  {
    value: "diretor(a)",
    label: "Diretor(a)",
  },
  {
    value: "psicólogo(a)",
    label: "Psicólogo(a)",
  },
  {
    value: "instrutor(a) de ensino",
    label: "Instrutor(a) de ensino",
  },
  {
    value: "monitor(a) de ensino",
    label: "Monitor(a) de ensino",
  },
  {
    value: "secretário(a)",
    label: "Secretário(a)",
  },
  {
    value: "outros",
    label: "Outros",
  },
];

export interface IRegistrationForm {
  setShowRegistrationFormOnSchoolPage?: React.Dispatch<boolean>;
  setShowRegistrationForm?: React.Dispatch<boolean>;
  showRegistrationFormOnSchoolPage?: boolean;
  setUserUpdate?: React.Dispatch<boolean>;
  userUpdate?: boolean;
}

const RegistrationForm: React.FC<IRegistrationForm> = ({
  setShowRegistrationFormOnSchoolPage,
  showRegistrationFormOnSchoolPage,
  setShowRegistrationForm,
  setUserUpdate,
  userUpdate,
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
    role: yup
      .string()
      .required("Cargo é obrigatório")
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

  const { register, handleSubmit, formState, clearErrors, reset } =
    useForm<IUser>({
      resolver: yupResolver(FormSchema),
    });

  const token: IToken = useTypedSelector((state) => state.token);
  const selectedUser: IDatabaseUser = useTypedSelector(
    (state) => state.selectedUser
  );
  const selectedSchool: IDatabaseSchool = useTypedSelector(
    (state) => state.selectedSchool
  );

  React.useEffect(() => {
    userUpdate ? reset(selectedUser) : reset({});
  }, []);

  const submissionMethod = (data: IUser) => {
    if (data.confirm_password) delete data.confirm_password;
    if (data.password === "defaultPassword") delete data.password;

    !userUpdate
      ? api
          .post("/user", data)
          .then((response) => {
            toast.success("Cadastro realizado com sucesso");
            setShowRegistrationForm?.(false);
            showRegistrationFormOnSchoolPage &&
              api
                .patch(
                  `/user/${selectedSchool.id}/${response.data.email}`,
                  {},
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  }
                )
                .then(() => setShowRegistrationFormOnSchoolPage?.(false))
                .catch(() =>
                  toast.error(
                    "Falha ao tentar vincular novo funcionário a escola"
                  )
                );
          })
          .catch((error) => {
            if (error.response.data.email) {
              return toast.error(error.response.data.email[0]);
            } else if (error.response.data.username) {
              return toast.error(error.response.data.username[0]);
            } else if (error.response.data.detail) {
              return toast.error(error.response.data.detail);
            } else return toast.error("Falha ao tentar realizar cadastro");
          })
      : api
          .patch(`/user/${selectedUser.id}`, data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(() => {
            toast.success("Atualização concluída com sucesso");
            setShowRegistrationFormOnSchoolPage?.(false);
            setUserUpdate?.(false);
          })
          .catch((error) => {
            if (error.response.data.email) {
              return toast.error(error.response.data.email[0]);
            } else if (error.response.data.username) {
              return toast.error(error.response.data.username[0]);
            } else if (error.response.data.detail) {
              return toast.error(error.response.data.detail);
            } else return toast.error("Falha ao tentar atualizar cadastro");
          });
  };

  return (
    <RegistrationFormContainer
      onSubmit={handleSubmit(submissionMethod)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      {!showRegistrationFormOnSchoolPage ? (
        <h2>Cadastre seus dados</h2>
      ) : (
        <h2>Cadastrar Funcionário</h2>
      )}
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
        select
        label="Cargo"
        defaultValue={userUpdate ? selectedUser.role : "outros"}
        {...register("role")}
      >
        {role.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      {formState.errors?.role && <p>{formState.errors.role?.message}</p>}

      <TextField
        className="text_field"
        label="Senha"
        type="password"
        defaultValue={userUpdate ? "defaultPassword" : ""}
        {...register("password")}
      />
      {formState.errors?.password && (
        <p>{formState.errors.password?.message}</p>
      )}

      <TextField
        className="text_field"
        label="Confirmar senha"
        type="password"
        defaultValue={userUpdate ? "defaultPassword" : ""}
        {...register("confirm_password")}
      />
      {formState.errors?.confirm_password && (
        <p>{formState.errors.confirm_password?.message}</p>
      )}
      {!showRegistrationFormOnSchoolPage && (
        <LoginOptionContainer>
          <span>Já possui conta?</span>
          <span
            onClick={() => {
              setShowRegistrationForm?.(false);
            }}
          >
            Faça o login
          </span>
        </LoginOptionContainer>
      )}
      {!showRegistrationFormOnSchoolPage && (
        <DefaultButton height="55px">{"Cadastrar"}</DefaultButton>
      )}

      {showRegistrationFormOnSchoolPage && (
        <HorizontalButtonContainer>
          <DefaultButton height="55px">{"Salvar alterações"}</DefaultButton>
          <DefaultButton
            onClick={(e) => {
              setShowRegistrationFormOnSchoolPage?.(false);
              setUserUpdate?.(false);
              e.preventDefault();
              clearErrors();
            }}
            border={`solid 1px ${VARIABLES.blueColor}`}
            backgroundcolor="transparent"
            color={VARIABLES.blueColor}
            height="55px"
          >
            {"Cancelar"}
          </DefaultButton>
        </HorizontalButtonContainer>
      )}
    </RegistrationFormContainer>
  );
};

export default RegistrationForm;
