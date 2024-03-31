import React from 'react';
import { Box, Button, MenuItem, Grid, } from '@mui/material';
import { Formik, } from 'formik';
import * as Yup from 'yup';
import Input from "../../Components/TextFieldInput";
import MyInput from '../../Components/SelectInput';

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    role: Yup.string().required('Role is required'),
    address: Yup.string().required('Address is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    status: Yup.string().required('Status is required'),
});

const validationErrors = {
    color: "#FF0000",
    fontStyle: "italic",
    marginLeft: "30px",
    marginTop: "10px"
};

const CreateUserForm = ({ currentId }) => {
    return (
        <Box sx={{ maxWidth: 400, margin: 'auto', padding: '16px' }}>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: '',
                    email: '',
                    role: '',
                    address: '',
                    phoneNumber: '',
                    status: 'Active',
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {formik => (
                    <form onSubmit={formik.handleSubmit}
                        noValidate //used To hide the default "please fill out this field" message and display only your custom validation messages
                    >
                        <Grid container spacing={2}>
                            <Input
                                name="firstName"
                                label="First Name"
                                handleChange={formik.handleChange}
                                half
                                required
                                value={formik.values.firstName}
                                onBlur={formik.handleBlur}
                                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                helperText={formik.touched.firstName && formik.errors.firstName}
                            />

                            <Input name="lastName"
                                label="Last Name"
                                handleChange={formik.handleChange}
                                half required
                                value={formik.values.lastName}
                                onBlur={formik.handleBlur}
                                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                helperText={formik.touched.lastName && formik.errors.lastName}
                            />
                            <Input name="email" label="Email Address"
                                handleChange={formik.handleChange}
                                type="email"
                                value={formik.values.email}
                                required
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />

                            <MyInput label="Role" name="role" >
                                <MenuItem value="Admin">Admin</MenuItem>
                                <MenuItem value="User">User</MenuItem>
                            </MyInput>

                            <Input fullWidth label="Address" name="address" required
                                handleChange={formik.handleChange}
                                value={formik.values.address}
                                onBlur={formik.handleBlur}
                                error={formik.touched.address && Boolean(formik.errors.address)}
                                helperText={formik.touched.address && formik.errors.address}
                            />
                            <Input fullWidth
                                label="Phone Number"
                                name="phoneNumber"
                                required
                                handleChange={formik.handleChange}
                                value={formik.values.phoneNumber}
                                onBlur={formik.handleBlur}
                                error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                                helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                            />
                            <MyInput label="Status" name="status">
                                <MenuItem value="Active">Active</MenuItem>
                                <MenuItem value="Inactive">Inactive</MenuItem>
                                <MenuItem value="Suspended">Suspended</MenuItem>
                            </MyInput>
                            <Grid item xs={12} lg={12}>
                                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                                    {currentId === null || currentId === undefined ? "Create User" : "Update User"}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </Box>
    );
};

export default CreateUserForm;
