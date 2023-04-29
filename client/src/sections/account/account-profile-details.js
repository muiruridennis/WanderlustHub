import { useCallback, useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    TextField,
    Unstable_Grid2 as Grid
} from '@mui/material';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const counties = [
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

export const AccountProfileDetails = () => {
    const [phoneNumber, setPhoneNumber] = useState("720000000")
    const formik = useFormik({
        initialValues: {
            firstName: 'Alice',
            lastName: 'Ameko',
            email: 'aliceameko@gmail.com',
            county: 'Nairobi',
            country: 'Kenya'
        },
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
            county: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .min(2, 'Must be 2 characters or more')
                .required('Required'),
            country: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .min(2, 'Must be 2 characters or more')
                .required('Required'),
        }),
        onSubmit: (values) => {
            const all= {...values, phoneNumber}
            alert(JSON.stringify(all, null, 2));
        },
    });
    return (
        <form
            autoComplete="off"
            onSubmit={formik.handleSubmit}        >
            <Card>
                <CardHeader
                    subheader="The information can be edited"
                    title="Profile"
                />
                <CardContent sx={{ pt: 0 }}>
                    <Box sx={{ m: -1.5 }}>
                        <Grid
                            container
                            spacing={3}
                        >
                            <Grid
                                xs={12}
                                md={6}
                            >
                                <TextField
                                    fullWidth
                                    id="firstName"
                                    name="firstName"
                                    label="First Name"
                                    type="text"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                    helperText={formik.touched.firstName && formik.errors.firstName}
                                />
                            </Grid>
                            <Grid
                                xs={12}
                                md={6}
                            >
                                <TextField
                                    fullWidth
                                    id="lastName"
                                    name="lastName"
                                    label="Last Name"
                                    type="text"
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                    helperText={formik.touched.lastName && formik.errors.lastName}
                                />
                            </Grid>
                            <Grid
                                xs={12}
                                md={6}
                            >
                                <TextField
                                    fullWidth
                                    id="email"
                                    name="email"
                                    label="Email"
                                    type="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                            </Grid>
                            <Grid
                                xs={12}
                                md={6}
                            >
                                {/* <TextField
                                    fullWidth
                                    label="Phone Number"
                                    name="phone"
                                    onChange={handleChange}
                                    // type="number"
                                    value={values.phone}
                                /> */}
                                <PhoneInput
                                    style={{ width: "100%", lineHeight: '24px' }}
                                    country={'uk'}
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
                                // isValid={(value, country) => {
                                //     if (value.match('[0-9]{13}')) {
                                //         return "Invalid phone number";
                                //     } else if (value.match('[0-9]{13}')) {
                                //         return false;
                                //     } else {
                                //         return true;
                                //     }
                                // }}
                                />
                            </Grid>
                            <Grid
                                xs={12}
                                md={6}
                            >
                                <TextField
                                    fullWidth
                                    id="country"
                                    name="country"
                                    label="country"
                                    type="country"
                                    value={formik.values.country}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.country && Boolean(formik.errors.country)}
                                    helperText={formik.touched.country && formik.errors.country}
                                />
                            </Grid>
                            <Grid
                                xs={12}
                                md={6}
                            >
                                <TextField
                                    fullWidth
                                    id="county"
                                    name="county"
                                    label="county"
                                    type="county"
                                    value={formik.values.county}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.county && Boolean(formik.errors.county)}
                                    helperText={formik.touched.county && formik.errors.county}
                                >
                                    {counties.map((option) => (
                                        <option
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </TextField>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
                <Divider />
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Button variant="contained" type="submit"  >
                        Save details
                    </Button>
                </CardActions>
            </Card>
        </form>
    );
};