import React, { useState, useEffect } from 'react';
import { Box, Container, Paper, TextField, Typography, Button, Avatar } from '@mui/material';
import { Formik, Form, ErrorMessage } from 'formik';
import ErrorIcon from '@mui/icons-material/Error';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import * as Yup from "yup";

import Circularprogress from "../../Components/CircularProgress";
import { recoverPassword } from "../../store/actions/auth"

const passwordResetSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
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

function RecoverPassword() {
  let { error, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  const [submitted, setSubmitted] = useState(false);
  const initialValues = {
    email: "",
  };

  if (isLoading) {
    return <Circularprogress />;
  }
  return (
    <Box sx={backgroundStyles} >
      <Container maxWidth="sm" justify="center" >
        <Paper sx={{
          display: 'flex',
          // alignItems: 'center',
          flexDirection: 'column',
          p: "16px",
          // bgcolor: "#FFC0CB",
          bgcolor: "#FDEEDC",
          borderRadius: "15px"
        }}
          elevation={3}
        >
          {submitted ? (
            <div className="reset-password-form-sent-wrapper">
              {(() => {

                if (error) {
                  return (
                    <>
                      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Avatar
                          sx={{ m: "6px", bgcolor: "#FF0032" }}>
                          <ErrorIcon />
                        </Avatar>
                      </div>
                      <Typography variant="h6" align="center">Error</Typography>
                      <Typography sx={{ mb: 2 }}>
                        The Email isn't recognized. Please try again later or register for a new account.
                      </Typography>

                      <Link to="/auth">
                        <Button color="error" fullWidth
                          sx={{ fontSize: "16px", textTransform: "none" }}
                        > Try again </Button>
                      </Link>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Avatar
                          sx={{ m: "6px", bgcolor: "#03C988" }}>
                          <TaskAltIcon />
                        </Avatar>
                      </div>
                      <Typography variant="h6" align="center">Reset your password</Typography>
                      <Typography sx={{ mb: 2 }}>
                        {/* We emailed you a link to reset your password. Please check The Email and follow the instructions. */}
                        Your request for a password reset has been received. Kindly check your email for further instructions.
                      </Typography>
                      <Link to="/">
                        <div
                          style={{ fontSize: "12px", textTransform: "none", display: 'flex' }}
                        >
                          <ArrowBackIcon color="primary" sx={{ mt: "16px" }} />
                          <Typography color="primary"
                            sx={{
                              fontSize: "16px",
                              mt: "16px",
                              ml: "12px",
                              "&:hover": {
                                color: '#FF0000',
                              }
                            }}
                          >Return to login </Typography>
                        </div>
                      </Link>
                    </>
                  );
                }
              })()}

            </div>
          ) : (
            <div>
              <Box sx={{
                marginBottom: "30px",
                marginLeft: "20px"
              }}>
                <Typography variant="h6" align="center" >Forgot your password?</Typography>
                <Typography >
                  Enter the email address associated with
                  your account and we'll send you a link to reset your password.
                </Typography>
              </Box>

              <Box>
                <Formik
                  initialValues={initialValues}
                  validationSchema={passwordResetSchema}
                  onSubmit={(values) => {
                    dispatch(recoverPassword(values));
                    setSubmitted((prevIsSubmitted) => !prevIsSubmitted);
                  }}
                >{
                    formik => {
                      const { isSubmitting } = formik;
                      return (
                        isSubmitting ? <Circularprogress /> :
                          <Form onSubmit={formik.handleSubmit}>
                            <div>
                              <TextField
                                sx={{ marginTop: "20px" }}
                                id="filled-basic" label="Email" name="email"
                                fullWidth variant="outlined" onChange={formik.handleChange} />
                              <ErrorMessage style={validationErrors} component="span" name="email" />
                            </div>
                            <div>

                              <Button type="submit" size="large" variant="contained" color="primary" fullWidth
                                sx={{
                                  m: "15px 0",
                                  textTransform: "none"
                                }}
                                disabled={isSubmitting}>
                                Send Password Reset Email
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

export default RecoverPassword