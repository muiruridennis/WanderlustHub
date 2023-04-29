import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import mpesaIcon from '../../Images/mpesaIcon.jpg';

function PaymentConfirmation() {
    return (
        <Box sx={{
            bgcolor: "#7DB9B6",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            // display: "flex",
            // alignItems: "center",
        }}>
            <Container maxWidth="md" sx={{ paddingTop: 10, margin: "auto" }}>
                <Typography>Awosome! That's 1000</Typography>
                <img src={mpesaIcon} style={{ height: "70px", backgroundColor: "white" }} alt="Mpesa" />
                <Typography variant="body2">
                    After receiving the payment confirmation message, click "Confirm Payment" to finish your Booking.
                </Typography>
                <Button onClick={() => { }}>
                    Confirm Payment
                </Button>

            </Container>
        </Box>
    )
}

export default PaymentConfirmation
