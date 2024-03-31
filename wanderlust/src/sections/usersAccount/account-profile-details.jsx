import { useCallback, useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    IconButton,
    Grid
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../../Components/TextFieldInput';


const cities = [
    {
        value: 'Nairobi',
        label: 'Nairobi'
    },
    {
        value: 'Kiambu',
        label: 'Kiambu'
    },
    {
        value: 'Kericho',
        label: 'Kericho'
    },
    {
        value: 'Nakuru',
        label: 'Nakuru'
    }
];

export const AccountProfileDetails = ({ currentUser }) => {
    const [phoneNumber, setPhoneNumber] = useState("720000000")
    const [editing, setEditing] = useState(false);
    const handleEditToggle = () => {
        setEditing((prevEditing) => !prevEditing);
    }
    const formik = useFormik({
        initialValues: currentUser,
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .min(2, 'Must be 2 characters or more')
                .required('Required'),
            lastName: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .min(2, 'Must be 2 characters or more')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .max(100, 'Must be 100 characters or less')
                .required('Required'),
            city: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .min(2, 'Must be 2 characters or more')
                .required('Required'),
            country: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .min(2, 'Must be 2 characters or more')
                .required('Required'),
        }),
        onSubmit: (values) => {
            const all = { ...values, phoneNumber }
            alert(JSON.stringify(all, null, 2));
        },
    });
    return (
        <form
            autoComplete="off"
            onSubmit={formik.handleSubmit}        >
            <Card sx={{ position: "relative" }}>
                <CardHeader
                    subheader="The information can be edited"
                    title="Profile"
                />
                <IconButton color='primary' size='small' onClick={handleEditToggle} sx={{ position: "absolute", right: 36, top: 26, display: editing ? "none" : "" }}>
                    Edit..  <EditIcon />
                </IconButton>
                <CardContent sx={{ pt: 0 }}>
                    {/* <Box sx={{ m: -1.5 }}> */}
                    <Grid
                        container
                        spacing={2}
                    >
                        <Input
                            half
                            name="firstName"
                            label="First Name"
                            value={formik.values.firstName}
                            handleChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                            readOnly={!editing}
                        />

                        <Input
                            half
                            fullWidth
                            name="lastName"
                            label="Last Name"
                            value={formik.values.lastName}
                            handleChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                            readOnly={!editing}

                        />


                        <Input
                            half
                            fullWidth
                            name="email"
                            label="Email"
                            type="email"
                            value={formik.values.email}
                            handleChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            readOnly={!editing}

                        />
                        <Grid
                            item
                            xs={12}
                            md={6}
                        >
                            <PhoneInput
                                style={{ width: "100%", lineHeight: '24px' }}
                                country={'ke'}
                                value={phoneNumber}
                                countryCodeEditable={false}
                                onChange={setPhoneNumber}
                                inputClass="form-control"
                                inputProps={{
                                    name: 'phoneNumber',
                                    required: true,
                                    autoFocus: true
                                }}
                                placeholder="Enter phone number"
                                disableDropdown={false}
                            />
                        </Grid>

                        <Input
                            half
                            fullWidth
                            name="country"
                            label="country"
                            type="text"
                            value={formik.values.country}
                            handleChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.country && Boolean(formik.errors.country)}
                            helperText={formik.touched.country && formik.errors.country}
                            readOnly={!editing}

                        />
                        <Input
                            half
                            fullWidth
                            name="city"
                            label="city"
                            type="text"
                            value={formik.values.city}
                            handleChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.city && Boolean(formik.errors.city)}
                            helperText={formik.touched.city && formik.errors.city}
                            readOnly={!editing}

                        >
                            {cities.map((option) => (
                                <option
                                    key={option.value}
                                    value={option.value}
                                >
                                    {option.label}
                                </option>
                            ))}
                        </Input>
                    </Grid>
                    {/* </Box> */}
                </CardContent>
                <Divider />
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Button variant="contained" type="submit" disabled={!editing} >
                        Save details
                    </Button>
                </CardActions>
            </Card>
        </form>
    );
};