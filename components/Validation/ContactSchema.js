import * as yup from "yup";

export const contactSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be valid  e.g. 'email@email.com' ")
    .required("Field is required"),
  reason: yup.string().required("Field is required"),
  describe: yup
    .string()
    .min(50)
    .max(300, " You need to provide atleast 50 to 300 ")
    .required("Field is required"),
});
