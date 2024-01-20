import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required("First Name is required"),

    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required("Last Name is required"),
    email: Yup.string()
        .email("Field should contain a valid e-mail")
        .max(255)
        .required("E-mail is required"),
    phoneNumber: Yup.string()
        .matches(
            /^(?:\+\d{1,3})?[\d- ]{6,14}$/,
            "Invalid phone number format. Use digits, spaces, dashes, or a plus sign at the beginning (for international numbers)."
        )
        .required("Phone number is required"),
    password: Yup.string()
        .min(6, 'Too Short! ')
        .max(20, 'Too Long!')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .min(6, 'Too Short! ')
        .max(20, 'Too Long!')
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Repeat Password is required'),

});
export const signinSchema = Yup.object().shape({
    email: Yup.string()
        .email("Field should contain a valid e-mail")
        .max(255)
        .required("E-mail is required"),
    password: Yup.string()
        .min(6, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Password is required'),
});