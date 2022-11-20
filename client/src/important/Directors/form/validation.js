import * as Yup from "yup";
const phoneRegExp = "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$";
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];


export default Yup.object().shape({
    fullName: Yup.string()
        .min(4, 'Name Too Short!')
        .max(50, 'Name Too Long!')
        .required('This field is required'),
    idNumber: Yup.number()
        .positive("Must be a positive number!")
        // .min(7, "Must be exactly 7 or 8 digits")
        // .max(8, "ID number should not exceed 8 digits")
        .required('This field is required'),
    phoneNumber: Yup.string().
        matches(phoneRegExp, 'Phone number is not valid')
        .required("This field is required")
        .min(10, "Phone Number is too short")
        .max(13, "Phone Number is too long"),
    address: Yup.string()
        .required("This field is required")
        .min(3, "Address is too short")
        .max(40, "Address is too long"),

});