import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography, Button, Box, Container } from '@mui/material';
import Circularprogress from "../../Components/CircularProgress";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import { stkPush } from "../../features/mpesaSlice"
import { getTour } from '../../features/toursSlice';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function Chekout() {
    const { tourId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { tour, isLoading } = useSelector((state) => state.tours);
    const { isTransacting, mpesaError } = useSelector((state) => state.mpesa);
    console.log(mpesaError, isTransacting,)

    useEffect(() => {
        dispatch(getTour(tourId));

    }, [tourId, dispatch]);
    const [phoneNumber, setPhoneNumber] = useState("")
    const isInvalidPhoneNumber = !phoneNumber || phoneNumber.length !== 12;
    const isButtonDisabled = isInvalidPhoneNumber;
    const handleSubmit = (e) => {
        e.preventDefault();
        const stkPushData = { phoneNumber, tourId, amount: tour.price }
        dispatch(stkPush(stkPushData))
        if (mpesaError) {
            notifyError()
        } else {
            navigate("/tours/confirmPayment");
        }
    }
    const notifyError = () => toast.error(`${mpesaError}`);

    // if (isLoading) {
    //     return <CircularProgress />
    // }


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

                <Typography variant="h6" sx={{ marginBottom: 2 }}>Pay With MPESA Express</Typography>
                <form onSubmit={handleSubmit}>
                    <Typography variant="body2" sx={{ marginBottom: 2 }} >
                        Click on "Send Request to Phone" button to generate a payment request on your phone. Enter your MPESA PIN on your phone to complete the payment.
                        You will get your receipt from MPESA.
                    </Typography>
                    {/* <div> */}
                    <label style={{ display: !isButtonDisabled ? "none" : "block" }}>Phone Number (254 700 000 000)</label>
                    <PhoneInput

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
                        disableDropdown={true}
                        isValid={(value, country) => {
                            if (value.match('[0-9]{13}')) {
                                return "Invalid phone number";
                            } else if (value.match('[0-9]{13}')) {
                                return false;
                            } else {
                                return true;
                            }
                        }}
                    />


                    {/* </div> */}
                    <div>

                        <Button type="submit" size="large" variant="contained" color="primary"
                            sx={{
                                m: "15px 0",
                                textTransform: "none"
                            }}
                            disabled={isButtonDisabled}

                        >
                            {isTransacting ? "Sending..." : "Send Request to Phone"}
                        </Button>
                    </div>
                </form>

                <ToastContainer
                    autoClose={5000}
                    theme="colored"

                />
            </Container>
        </Box>
    )
}

export default Chekout
