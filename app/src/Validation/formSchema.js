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
    role: Yup
        .string()
        .oneOf(['Gamer', 'Student', 'Instructor', 'Hobbiest', 'Developer'], "Please choose a role for the user"),
    url: Yup
        .string()
        .url('Enter url in http format'),
    bday: Yup
        .date()
        .min(new Date(1970), 'Select a date after 1969')
        .required('Please enter a birthday'),
    terms: Yup
        .boolean()
        .oneOf([true], "Must accept the Terms of Service")
})

export default formSchema