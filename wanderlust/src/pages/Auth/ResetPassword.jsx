import React, { useState } from 'react';
import { Box, Container, Paper, TextField, Typography, Button, Avatar } from '@mui/material';
import { Formik, Form, ErrorMessage } from 'formik';
import { Link, useParams } from "react-router-dom";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ErrorIcon from '@mui/icons-material/Error';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import * as Yup from "yup";

import Circularprogress from "../../Components/CircularProgress";
import { useResetPasswordMutation } from "../../api/authApi"

const passwordResetSchema = Yup.object().shape({
    password: Yup.string()
        .min(6, 'Too Short! ')
        .max(20, 'Too Long!')
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
        .required('Password is required'),
    confirmPassword: Yup.string()
        .min(6, 'Too Short! ')
        .max(20, 'Too Long!')
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});
const backgroundStyles = {
    backgroundColor: "#7DB9B6",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
}
const validationErrors = {
    color: "#FF0000",
    fontStyle: "italic",
    marginLeft: "30px",
    marginTop: "30px",
};
function ResetPassword() {
    const [submitted, setSubmitted] = useState(false)

    const { resetLink } = useParams();
    const [resetPassword, {data:authData, error, isLoading}] = useResetPasswordMutation();
    console.log(authData, error, isLoading)
    const initialValues = {
        password: "",
        confirmPassword: ""
    };

    if (isLoading) {
        return <Circularprogress />;
    }
    return (
        <Box sx={backgroundStyles} >
            <Container maxWidth="sm" justify="center" >
                <Paper sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    p: "16px",
                    bgcolor: "#FDEEDC",
                    borderRadius: "15px"
                }}
                    elevation={3}
                >
                    {submitted ? (

                        <div className="reset-password-form-sent-wrapper">
                            {
                                (() => {
                                    if (authData) {
                                        return (
                                            <>
                                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <Avatar
                                                        sx={{ m: "6px", bgcolor: "#03C988" }}>
                                                        <TaskAltIcon />
                                                    </Avatar>
                                                </div>
                                                <Typography variant="h6" align="center">Password Reset</Typography>
                                                <Typography sx={{ mb: 2 }}>
                                                    Your password has been successfully reset. Click below to log in.
                                                </Typography>
                                                <Link to="/auth">
                                                    <Button color="primary" fullWidth
                                                        sx={{ fontSize: "16px", textTransform: "none" }}
                                                    > login </Button>
                                                </Link>
                                            </>
                                        );
                                    } else {
                                        return (
                                            <>
                                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <Avatar
                                                        sx={{ m: "6px", bgcolor: "#FF0032" }}>
                                                        <ErrorIcon />
                                                    </Avatar>
                                                </div>
                                                <Typography variant="h6" align="center">Error </Typography>
                                                <Typography sx={{ mb: 2 }}>
                                                    {error !== null || undefined ? `${error}` : "Sorry! An error occured while reseting your password. Please try again later."}

                                                </Typography>
                                                <Link to="/auth/recoverPassword">
                                                    <Button color="error" fullWidth
                                                        variant="contained"
                                                        sx={{ fontSize: "16px", textTransform: "none" }}
                                                    > Try again </Button>
                                                </Link>
                                            </>
                                        );
                                    }
                                })()
                            }

                        </div>
                    ) : (
                        <div>
                            <Box sx={{
                                marginBottom: "30px",
                                marginLeft: "20px"
                            }}>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Avatar
                                        sx={{ m: "6px", bgcolor: "#03C988", alignSelf: 'center' }}>
                                        <VpnKeyIcon />
                                    </Avatar>
                                </div>
                                <Typography variant="h6" align="center" >Set a new password?</Typography>
                                <Typography >
                                    Your new password must be different from the previously used passwords.
                                </Typography>
                            </Box>

                            <Box>
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={passwordResetSchema}
                                    onSubmit={(values) => {
                                        const resetData = { ...values, resetLink }
                                        resetPassword(resetData);
                                        setSubmitted(true);
                                    }}
                                >{
                                        formik => {
                                            const { isSubmitting } = formik;
                                            return (
                                                isSubmitting ? <div>Submitting...</div> :
                                                    <Form onSubmit={formik.handleSubmit}>
                                                        <div>
                                                            <TextField
                                                                sx={{ marginTop: "20px" }}
                                                                id="password" label="New Password" name="password"
                                                                fullWidth variant="outlined" onChange={formik.handleChange} />
                                                            <ErrorMessage style={validationErrors} component="span" name="password" />
                                                            <TextField
                                                                sx={{ marginTop: "20px" }}
                                                                id="confirm-assword" label="Confirm New Password" name="confirmPassword"
                                                                fullWidth variant="outlined" onChange={formik.handleChange} />
                                                            <ErrorMessage style={validationErrors} component="span" name="confirmPassword" />
                                                        </div>
                                                        <div>

                                                            <Button type="submit" size="large" variant="contained" color="primary" fullWidth
                                                                sx={{
                                                                    m: "15px 0",
                                                                    textTransform: "none"
                                                                }}
                                                                disabled={isSubmitting}>
                                                                Reset Password
                                                            </Button>
                                                        </div>
                                                    </Form>
                                            )
                                        }
                                    }
                                </Formik>
                                <Link to="/"><Typography color="primary"
                                    sx={{
                                        fontSize: "16px",
                                        mt: "8px",
                                        "&:hover": {
                                            color: '#FF0000',
                                        }
                                    }}
                                >Return to Login Page</Typography>
                                </Link>
                            </Box>
                        </div>
                    )}
                </Paper>
            </Container >
        </Box >
    )
}

export default ResetPassword

