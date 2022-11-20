import * as Yup from "yup";

export default Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!'),
    email: Yup.string().email("Field should contain a valid e-mail")
        .max(255)
        .required("E-mail is required"),
    password: Yup.string()
        .min(6, 'Too Short! ')
        .max(20, 'Too Long!')
        // .matches(/(?=.*[0-9])/, "Password must contain a number.")
        .required('Password is required'),
    confirmPassword: Yup.string()
        .min(6, 'Too Short! ')
        .max(20, 'Too Long!')
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});