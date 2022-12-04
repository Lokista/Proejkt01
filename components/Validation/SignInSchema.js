import * as yup from "yup";

export const SignInSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),
  password: yup
    .string()
    .min(3, "password must be longer than 3")
    .max(16, "password must be shorter than 16")
    .required("Password is required"),
});
