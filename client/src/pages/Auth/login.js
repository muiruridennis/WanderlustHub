import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";
import { Avatar, Paper, Typography, Grid, Button, Container, Box } from "@mui/material";
import LockOutlined from "@mui/icons-material/LockOutlined";
import { Formik, Form, ErrorMessage } from 'formik';
import Circularprogress from "../../Components/CircularProgress"

import BackgroundImage from '../../Images/login.jpg';
import google from '../../Images/google.png';
import coast from '../../Images/coast.jpg';
import Input from "./input";
import { signup, signin } from "../../Actions/auth";
import loginSchema from "./validation";
import useGoogleAuthentication from "./useGoogleAuthentication";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Auth() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleGoogleSuccess } = useGoogleAuthentication();

  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { error, isLoading } = useSelector((state) => state.auth);
  const validate = (values) => {
    const errors = {};
    if (values.firstName === "" && isSignup) errors.firstName = " first name is required";
    if (values.lastName === "" && isSignup) errors.lastName = "last name is required";
    if (values.confirmPassword === "" && isSignup) errors.confirmPassword = "confirm password field is required";
    return errors;
  };
  const validationErrors = {
    color: "#FF0000",
    fontStyle: "italic",
    marginLeft: "30px",
    marginTop: "10px"
  };
  const backgroundStyles = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  }


  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
  const swithMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  }
  const notifyError = () => toast.error(`${error}`);
  const notifySuccess = () => toast.info(" logging...");
  if (isLoading) {
    return <Circularprogress />;
  }
  if (error) {
    notifyError()
  }

  return (
    <Box sx={backgroundStyles} >
      <Container maxWidth="xs" justify="center" >
        <Paper
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            p: "16px",
            // bgcolor: "#FFC0CB",
            bgcolor: "#FDEEDC",
            borderRadius: "15px"
          }}
          elevation={3}
        >
          <Box sx={{
            backgroundBlendMode: "darken",
            backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${coast})`,
            backgroundSize: "cover ",
            backgroundRepeat: "no-repeat",
            width: "100%",
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            height: "200px",
            mb: 1,
            color: "#FFFFFF"

          }}>

            <Avatar
              sx={{
                m: "6px",
                bgcolor: "#FF6347"
              }}
            >
              <LockOutlined />
            </Avatar>
            <Typography variant="h4">{isSignup ? "Sign Up" : "Sign In"}</Typography>
            <Typography sx={{
              m: "4px",
              fontSize: "1rem",
            }}
            >{!isSignup ? "Sign in into your account using your email and passcode." :
              "New here? Signing up is easy. It only takes a few steps"}</Typography>
          </Box>
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            validate={validate}
            onSubmit={(values) => {
              if (isSignup) {
                dispatch(signup(values, navigate))
              } else {
                dispatch(signin(values, navigate));
              }
              if (error) {
                notifySuccess()
              }
              else {
                notifyError()
              }
            }}
          >
            {
              formik => {
                const { isSubmitting } = formik;
                return (
                  <Form onSubmit={formik.handleSubmit}
                    sx={{
                      w: '100%', // Fix IE 11 issue.
                      mt: "10px",
                    }} autoComplete="false">
                    <Grid container spacing={2}>
                      {
                        isSignup && (
                          <>
                            <Input name="firstName" label="First Name" handleChange={formik.handleChange} half required={true} />
                            <ErrorMessage style={validationErrors} component="span" name="firstName" />
                            <Input name="lastName" label="Last Name" handleChange={formik.handleChange} half required={true} />
                            <ErrorMessage style={validationErrors} component="span" name="lastName" />
                            <Input name="phoneNumber" label="Phone Number" handleChange={formik.handleChange}  required={true} />
                            <ErrorMessage style={validationErrors} component="span" name="phoneNumber" />
                          </>
                        )
                      }

                      <Input name="email" label="Email Adress" handleChange={formik.handleChange} type="email" />
                      <ErrorMessage style={validationErrors} component="span" name="email" />
                      <Input name="password" label=" Password" handleChange={formik.handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                      <ErrorMessage style={validationErrors} component="span" name="password" />
                      {isSignup && (
                        <>
                          <Input name="confirmPassword" label="Repeat password" handleChange={formik.handleChange} type="password" />
                          <ErrorMessage style={validationErrors} component="span" name="confirmPassword" />
                        </>
                      )}


                    </Grid>
                    {!isSignup && (
                      <Grid container justifyContent="flex-end">
                        <Grid item>
                          <Link to="/auth/recoverPassword">
                            <Typography color="primary"
                              sx={{
                                fontSize: "14px",
                                mt: "8px",
                                "&:hover": {
                                  color: '#FF0000',
                                }
                              }}
                            >Forgot your password? Reset password</Typography>
                          </Link>
                        </Grid>
                      </Grid>
                    )}
                    <Button type="submit" fullWidth variant="contained" color="primary" sx={{
                      m: "10px 0",
                      textTransform: "none"
                    }}
                    // disabled={isSubmitting}
                    >
                      {isSignup ? "Sign Up" : "Log In"}
                    </Button>
                    <Button
                      sx={{ textTransform: "none", fontWeight: 500, }}
                      fullWidth
                      color="inherit"
                      onClick={() => handleGoogleSuccess()}>
                      <img style={{
                        width: "16px",
                        height: "16px",
                        marginRight: "16px"
                      }} src={google} />
                      Sign in with Google 🚀
                    </Button>


                    <Grid container justifyContent="flex-end">
                      <Grid item>
                        <Button onClick={swithMode} sx={{ textTransform: "none" }} >
                          {isSignup ? "Already have an account? Login " : "Don't have an account? Create now"}
                        </Button>

                      </Grid>

                    </Grid>
                    {/* <Typography>Or sign up with</Typography>
                        <Typography>Google and Twitter here</Typography> */}
                  </Form>
                )
              }
            }

          </Formik>
        </Paper>
      </Container>
      <ToastContainer
        autoClose={5000}
        theme="colored"
      />
    </Box >
  )
}

export default Auth
