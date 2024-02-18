import * as Yup from "yup";

export const AuthValidationSchema = Yup.object().shape({
  name: Yup.string().required("Nome comepleto é obrigatório"),
  phone: Yup.string().required("Celular é obrigatório"),
  email: Yup.string().email().required("E-mail é obrigatório"),
  nickname: Yup.string().required("Apelido é obrigatório"),
  password: Yup.string()
    .required("Senha é obrigatória")
    .min(6, "A senha deve ter no mínimo 6 caracteres"),
  cfPassword: Yup.string()
    .required("Você deve confirmar sua senha")
    .oneOf([Yup.ref("password"), " "], "As senhas devem ser iguais"),
});
