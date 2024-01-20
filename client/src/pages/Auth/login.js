import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import {
  Avatar,
  Paper,
  Typography,
  Grid,
  Button,
  Container,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import { Formik, Form, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';

import LockOutlined from '@mui/icons-material/LockOutlined';

import Circularprogress from '../../Components/CircularProgress';
import Logo from '../../Components/logo';

import useGoogleAuthentication from './useGoogleAuthentication';

import Input from './input';
import { signup, signin } from '../../Actions/auth';
import loginSchema from './validation';

import 'react-toastify/dist/ReactToastify.css';

import BackgroundImage from '../../Images/login.jpg';
import google from '../../Images/google.png';
import coast from '../../Images/coast.jpg';


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
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const validate = (values) => {
    const errors = {};
    const validationMessages = {
      firstName: "First name is required",
      lastName: "Last name is required",
      phoneNumber: "Phone Number is required",
      confirmPassword: "Confirm password field is required",
    };

    if (isSignup) {
      Object.keys(validationMessages).forEach((key) => {
        if (values[key] === "") {
          errors[key] = validationMessages[key];
        }
      });
    }

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
    <Box
      component="main"
      sx={{
        display: 'flex',
        flex: '1 1 auto'
      }}
    >
      <Grid
        container
        sx={{ flex: '1 1 auto' }}
      >
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            alignItems: 'center',
            background: 'radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)',
            color: 'white',
            display: 'flex',
            height: !isSmallScreen ? '100vh' : 'auto',
            justifyContent: 'center',
            '& img': {
              maxWidth: '100%'
            }
          }}
        >
          <Box sx={{ p: 3 }}>
            <Typography
              align="center"
              color="inherit"
              sx={{
                fontSize: '24px',
                lineHeight: '32px',
                mb: 1
              }}
              variant="h1"
            >
              Welcome to{' '}
              <Box
                component="a"
                sx={{ color: '#15B79E' }}
                target="_blank"
              >
                Take-us Safaris
              </Box>
            </Typography>
            <Typography
              align="center"
              sx={{ mb: 3 }}
              variant="subtitle1"
            >
              We are a premier tour company offering a first rate travel and memorable tour experience.
            </Typography>
            <Typography
              align="center"
              sx={{ mb: 3 }}
              variant="subtitle1"
            >
              Travel, Enjoy and Live a New and Full Life.
            </Typography>

          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            backgroundColor: 'background.paper',
            display: 'flex',
            flexDirection: 'column',
            // position: 'relative'
          }}
        >
          <Box
            component="header"
            sx={{
              left: 0,
              p: 3,
              position: 'fixed',
              top: 0,
              width: '100%'
            }}
          >
            <Box
              // component={NextLink}
              href="/"
              sx={{
                display: 'inline-flex',
                height: 32,
                width: 32
              }}
            >
              <Logo />
            </Box>
          </Box>
          <Container maxWidth="sm"
            sx={{ margin: "auto" }}
          >
            <Paper
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                p: "16px",
                // bgcolor: "#FDEEDC",
                borderRadius: "15px"
              }}
              elevation={1}
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
                  const authAction = isSignup ? signup : signin;
                  dispatch(authAction(values, navigate));
                  if (error) {
                    notifyError();
                  } else {
                    notifySuccess();
                  }
                }}


              >
                {
                  formik => {
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
                                <Input name="phoneNumber" label="Phone Number" handleChange={formik.handleChange} required={true} />
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
                      </Form>
                    )
                  }
                }

              </Formik>
            </Paper>
            <ToastContainer
              autoClose={5000}
              theme="colored"
            />
          </Container>
        </Grid>

      </Grid>
    </Box>
  )
}

export default Auth
