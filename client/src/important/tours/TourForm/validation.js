import * as Yup from "yup";

export default Yup.object().shape({
    tourName: Yup.string()
        .min(4, 'Name Too Short!')
        .max(50, 'Name Too Long!')
        .required('Required'),
    cost: Yup.number()
        .required('Required'),
    status: Yup.string()
        .required('Required'),
    venue: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!'),
    coordinator: Yup.string()
        .required('Required')
        .min(2, 'Too Short!')
        .max(50, 'Too Long!'),
    packageName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!'),
    hotelName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!'),
});