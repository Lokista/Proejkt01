import * as yup from 'yup'

export const contactSchema = yup.object().shape({
    email: yup.string().email("Email must be valid  e.g. 'email@email.com' ").required("Field is required"),
    reason: yup.string().required("Field is required"),
    describe: yup.string().required("Field is required"),
})