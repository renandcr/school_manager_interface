import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { current_date_YYYY_MM_DD } from "../../../assets/utils";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/pt";

import { IDatabaseSchool } from "../../../store/models/school/actions";
import { HorizontalButtonContainer } from "../../DefaultButton/style";
import { IToken } from "../../../store/models/user/actions";
import { yupResolver } from "@hookform/resolvers/yup";
import { VARIABLES } from "../../../styles/global";
import { useTypedSelector } from "../../../store";
import DefaultButton from "../../DefaultButton";
import { StudentFormContainer } from "./style";
import MenuItem from "@mui/material/MenuItem";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import api from "../../../assets/axios";
import { toast } from "react-toastify";
import * as React from "react";
import * as yup from "yup";

import {
  actionUpdateStudent,
  IDatabaseStudent,
} from "../../../store/models/student/actions";

const gender = [
  {
    value: "masculino",
    label: "Masculino",
  },
  {
    value: "feminino",
    label: "Feminino",
  },
  {
    value: "lgbt",
    label: "Lgbt",
  },
  {
    value: "outros",
    label: "Outros",
  },
];

interface IStudent {
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: string;
  cpf: string;
  phone: string;
  gender: string;
}

interface IStudentForm {
  setShowStudentForm: React.Dispatch<boolean>;
  setStudentUpdate: React.Dispatch<boolean>;
  studentUpdate: boolean;
}

const StudentForm: React.FC<IStudentForm> = ({
  setShowStudentForm,
  setStudentUpdate,
  studentUpdate,
}) => {
  const dispatch = useDispatch();
  const token: IToken = useTypedSelector((state) => state.token);
  const selectedStudent: IDatabaseStudent = useTypedSelector(
    (state) => state.selectedStudent
  );
  const selectedSchool: IDatabaseSchool = useTypedSelector(
    (state) => state.selectedSchool
  );

  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs(`${current_date_YYYY_MM_DD}T21:11:54`)
  );
  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  const formSchema = yup.object().shape({
    first_name: yup
      .string()
      .required("Nome ?? obrigat??rio")
      .max(50, "Limite de 50 caracteres")
      .matches(
        /^[A-Za-z?????????????????????????????????????????????????????????????? ]+$/,
        "N??o ?? permitido n??meros nesse campo"
      ),
    last_name: yup
      .string()
      .required("Sobrenome ?? obrigat??rio")
      .max(50, "Limite de 50 caracteres")
      .matches(
        /^[A-Za-z?????????????????????????????????????????????????????????????? ]+$/,
        "N??o ?? permitido n??meros nesse campo"
      ),
    email: yup
      .string()
      .max(75, "Limite de 75 caracteres")
      .email("Tipo de e-mail inv??lido")
      .required("E-mail ?? obrigat??rio"),
    date_of_birth: yup.string().required("Data de anivers??rio ?? obrigat??rio"),
    cpf: yup
      .string()
      .max(11, "Limite de 11 caracteres")
      .min(11, "M??nimo de 11 caracteres")
      .required("CPF ?? obrigat??rio"),
    phone: yup
      .string()
      .max(14, "Limite de 14 caracteres")
      .required("Telefone ?? obrigat??rio"),
    gender: yup
      .string()
      .max(20, "Limite de 20 caracteres")
      .required("G??nero ?? obrigat??rio"),
  });

  const { handleSubmit, register, reset, formState, clearErrors } =
    useForm<IStudent>({
      resolver: yupResolver(formSchema),
    });

  React.useEffect(() => {
    studentUpdate ? reset(selectedStudent) : reset({});
  }, []);

  const handleRequests = (data: IStudent) => {
    !studentUpdate
      ? api
          .post(`/student/create/${selectedSchool.id}`, data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(() => {
            toast.success("Aluno cadastrado com sucesso");
            setShowStudentForm(false);
          })
          .catch((error) => {
            if (error.response.data.email) {
              return toast.error(error.response.data.email[0]);
            } else if (error.response.data.cpf) {
              return toast.error(error.response.data.cpf[0]);
            } else if (error.response.data.detail) {
              return toast.error(error.response.data.detail);
            } else return toast.error("Falha ao tentar cadastrar aluno");
          })
      : api
          .patch(`/student/${selectedStudent.id}`, data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            toast.success("Atualiza????o conclu??da com sucesso");
            dispatch(actionUpdateStudent(response.data));
            setShowStudentForm(false);
            setStudentUpdate(false);
          })
          .catch((error) => {
            if (error.response.data.email) {
              return toast.error(error.response.data.email[0]);
            } else if (error.response.data.cpf) {
              return toast.error(error.response.data.cpf[0]);
            } else if (error.response.data.detail) {
              return toast.error(error.response.data.detail);
            } else return toast.error("Falha ao tentar atualizar aluno");
          });
  };

  return (
    <StudentFormContainer
      onSubmit={handleSubmit(handleRequests)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
    >
      {studentUpdate ? <h2>Editar informa????es</h2> : <h2>Cadastrar Aluno</h2>}
      <TextField
        className="text_field"
        label="Nome"
        type="text"
        autoFocus
        {...register("first_name")}
      />
      {formState.errors.first_name && (
        <p>{formState.errors.first_name.message}</p>
      )}

      <TextField
        className="text_field"
        label="Sobrenome"
        type="text"
        {...register("last_name")}
      />
      {formState.errors.last_name && (
        <p>{formState.errors.last_name?.message}</p>
      )}

      <TextField
        className="text_field"
        label="E-mail"
        type="email"
        {...register("email")}
      />
      {formState.errors.email && <p>{formState.errors.email.message}</p>}

      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"pt"}>
        <MobileDatePicker
          label="Data de nascimento"
          inputFormat="DD/MM/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => (
            <TextField {...params} {...register("date_of_birth")} />
          )}
        />
      </LocalizationProvider>

      <TextField
        className="text_field"
        label="CPF"
        type="text"
        {...register("cpf")}
      />

      {formState.errors.cpf && <p>{formState.errors.cpf.message}</p>}
      <TextField
        className="text_field"
        label="Telefone"
        type="text"
        {...register("phone")}
      />
      {formState.errors.phone && <p>{formState.errors.phone.message}</p>}

      <TextField
        className="text_field"
        select
        label="G??nero"
        defaultValue={studentUpdate ? selectedStudent.gender : "outros"}
        {...register("gender")}
      >
        {gender.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      {formState.errors.gender && <p>{formState.errors.gender.message}</p>}

      <HorizontalButtonContainer>
        {studentUpdate ? (
          <DefaultButton height="55px">{"Salvar altera????es"}</DefaultButton>
        ) : (
          <DefaultButton height="55px">{"Salvar aluno"}</DefaultButton>
        )}
        <DefaultButton
          border={`solid 1px ${VARIABLES.blueColor}`}
          backgroundcolor="transparent"
          color={VARIABLES.blueColor}
          height="55px"
          onClick={(e) => {
            setShowStudentForm(false);
            setStudentUpdate(false);
            e.preventDefault();
            clearErrors();
          }}
        >
          {"Cancelar"}
        </DefaultButton>
      </HorizontalButtonContainer>
    </StudentFormContainer>
  );
};

export default StudentForm;
