import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().min(6).max(18).required()
})