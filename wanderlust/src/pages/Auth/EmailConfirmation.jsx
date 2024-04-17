import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Container, Paper, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { confirmEmail, resendConfirmEmail } from "../../features/authSlice"
import { useConfirmEmailMutation, useResendConfirmEmailMutation } from "../../api/emailApi.js"
import Popup from "../../Components/Popup";
import Circularprogress from "../../Components/CircularProgress"


function EmailConfirmation() {
  const [openPopup, setOpenPopup] = useState(false);
  const { confirmationToken } = useParams();
  const [confirmEmail, { isLoading, isSuccess }] = useConfirmEmailMutation();
  const [resendConfirmEmail] = useResendConfirmEmailMutation();

  if (isLoading) {
    return <Circularprogress />;
  }
  const close = () => {
    setOpenPopup(false);
  };
  return (
    <Box sx={{
      bgcolor: "#7DB9B6",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
    }}>
      <Container maxWidth="xs" justify="center" >
        <Paper elevation={3}
          sx={{
            padding: 4,

          }}
        >
          <Typography variant='body1' align='center'
            sx={{ marginBottom: 2 }}
          >Please  Verify  your email  </Typography>
          <form onSubmit={(e) => {
            e.preventDefault(e);
            confirmEmail({ token: `${confirmationToken}` })
            if (error) {
              setOpenPopup(true)
            }
          }}>

            <Button variant='contained' color='primary' fullWidth type='submit'
              sx={{ textTransform: "none" }}


            >Verify Email</Button>
          </form>

        </Paper>
      </Container>
      <Popup openPopup={openPopup} title="Email Confirmation Failed" close={close}>
        <div>

          <Typography variant='body1' align='center' sx={{ color: "red" }}> {`Opps!! ${error}`}</Typography>
          {
            !error === "Email already confirmed" &&
            <Button
              variant='contained'
              sx={{ marginTop: 2, textTransform: "none" }}
              onClick={() => {
                resendConfirmEmail()

              }}
            > Resend Confirmation Email</Button>
          }
        </div>
      </Popup>

    </Box>
  )
}

export default EmailConfirmation
