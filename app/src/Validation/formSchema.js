import * as Yup from 'yup';

const formSchema = Yup.object().shape({
    name: Yup
        .string()
        .min(2, "Name must have at least 2 characters")
        .required("Must include a valid name"),
    email: Yup
        .string()
        .email("Please enter a valid address")
        .required("Must include a valid email"),
    password: Yup
        .string()
        .min(6, "Password must have at least 6 characters")
        .required("Must include a valid password"),
    terms: Yup
        .boolean()
})

export default formSchema