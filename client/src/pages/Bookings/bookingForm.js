import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Button,
  Paper,
  Container,
  MenuItem,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,

  Grid,
  Stack,
} from '@mui/material';

import { useTheme, useMediaQuery } from "@mui/material";
import { LocalizationProvider, MobileDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
// import Input from './input';
import Input from "../../Components/TextFieldInput";
import MyInput from '../../Components/SelectInput';



const validationSchema = Yup.object().shape({
  name: Yup.string().required(' Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  tourType: Yup.string().required('Tour Type is required'),
  startDate: Yup.string().required('Start Date is required'),
  endDate: Yup.string().required('End Date is required'),
  participants: Yup.number().required('Number of Participants is required'),
  accommodation: Yup.string().required('Accommodation Preferences required'),
  dietaryRestrictions: Yup.string().required('Dietary Restrictions is required'),
  accessibilityNeeds: Yup.string().required('Accessibility Needs is required'),
  specialRequests: Yup.string().required('Special Requests is required'),
  totalCost: Yup.string().required('Total Cost is required'),
  paymentMethod: Yup.string().required('Payment Method is required'),
  cardNumber: Yup.string().when('paymentMethod', {
    is: 'creditCard',
    then: Yup.string().required('Card Number is required'),
    otherwise: Yup.string(),
  }),
  expirationDate: Yup.string().when('paymentMethod', {
    is: 'creditCard',
    then: Yup.string().required('Expiration Date is required'),
    otherwise: Yup.string(),
  }),
  cvvCode: Yup.string().when('paymentMethod', {
    is: 'creditCard',
    then: Yup.string().required('CVV Code is required'),
    otherwise: Yup.string(),
  }),

  mpesaTransactionID: Yup.string().when('paymentMethod', {
    is: 'mpesa',
    then: Yup.string().required('Mpesa Transaction ID is required'),
    otherwise: Yup.string(),
  }),
  mpesaPhoneNumber: Yup.string().when('paymentMethod', {
    is: 'mpesa',
    then: Yup.string().required('Mpesa Phone Number is required'),
    otherwise: Yup.string(),
  }),
  mpesaPaymentConfirmed: Yup.boolean().when('paymentMethod', {
    is: 'mpesa',
    then: Yup.boolean().oneOf([true], 'You must confirm Mpesa payment'),
    otherwise: Yup.boolean(),
  }),
});

const BookingForm = (props) => {

  const { currentId, close, bookings, tourCost } = props;
  console.log("bookings", bookings)

  const [totalCost, setTotalCost] = useState(tourCost);
  const [participants, setParticipants] = useState(1);


  const initialValues = {
    status: "",
    bookedAtDate:"",
    name: '',
    email: '',
    phoneNumber: '',
    participants: 1,
    accommodation: '',
    dietaryRestrictions: '',
    accessibilityNeeds: '',
    specialRequests: '',
    totalCost,
    paymentMethod: '',
    cardNumber: '',
    expirationDate: '',
    cvvCode: '',
    mpesaPaymentConfirmed: false,
    mpesaTransactionID: '',
    mpesaPhoneNumber: '',
  }

  const [booking, setBooking] = useState(initialValues);

  const selectedBooking = currentId ? bookings
    .map(({ bookings }) => bookings)
    .flat()
    .find((booking) => booking.id === currentId) : null;

  useEffect(() => {
    if (selectedBooking) {
      setBooking(selectedBooking);
    }
  }, [selectedBooking]);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const formikRef = useRef(null);


  const handleParticipantsChange = (event) => {
    const newParticipants = event.target.value;
    if (newParticipants < 1) {
      return; // Do not update the state if the value is less than 1
    }
    setParticipants(newParticipants);
    const newTotalCost = newParticipants * tourCost;
    setTotalCost(newTotalCost);
    formikRef.current.setFieldValue('participants', newParticipants.toString());
    formikRef.current.setFieldValue('totalCost', newTotalCost.toString());
  };



  const style = {
    textField: {
      margin: theme.spacing(1),
      width: !isSmallScreen ? "47%" : "auto"
    },
    buttons: {
      marginBottom: "8px",
      marginTop: "8px",
      marginRight: theme.spacing(2),
      textTransform: "none",
      justifyContent: "flex-end", // Align buttons to the right
    }
  };
  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={2} sx={{ padding: 3 }}>
        <Formik
          initialValues={booking}
          enableReinitialize={true}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   actions.setSubmitting(false);
            // }, 1000);
            console.log("values", values);
          }}
        >
          {formik => (
            <form
              onSubmit={formik.handleSubmit}
              autoComplete
              noValidate 
              >

              <Grid container spacing={2}>
                <Input
                  name="name"
                  label="Full Name"
                  type="text"
                  multiline
                  handleChange={formik.handleChange}
                  fullWidth
                  required
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <Input
                  name="email"
                  label=" Email"
                  type="text"
                  multiline
                  handleChange={formik.handleChange}
                  fullWidth
                  required
                  half
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <Input
                  name="phoneNumber"
                  label="Phone Number"
                  half
                  required
                  handleChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                  helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                />
                <MyInput label="Status" name="status">
                  <MenuItem value="Pending">Pending</MenuItem>
                  <MenuItem value="Confirmed">Confirmed</MenuItem>
                  <MenuItem value="Cancelled">Cancelled</MenuItem>
                </MyInput>
                <MyInput label="Tour Type" name="tourType">
                  <MenuItem value="">Select Tour Type</MenuItem>
                  <MenuItem value="Camping">Camping</MenuItem>
                  <MenuItem value="Road Trips">Road Trips</MenuItem>
                  <MenuItem value="Corporate Team Building">Corporate</MenuItem>
                  <MenuItem value="Tour Packages">Tour Packages</MenuItem>
                </MyInput>
                <Grid item xs={6} lg={6}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDateTimePicker
                      label="Start Date"
                      value={formik.values.contractExpiryDate}
                      onChange={(newValue) => {
                        formik.setFieldValue('startDate', newValue);
                      }}
                      sx={{
                        width: '100%',
                        marginBottom: 2,
                      }}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={6} lg={6}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDateTimePicker
                      label="End Date"
                      value={formik.values.contractExpiryDate}
                      onChange={(newValue) => {
                        formik.setFieldValue('endDate', newValue);
                      }}
                      sx={{
                        width: '100%',
                        marginBottom: 2,
                      }}
                    />
                  </LocalizationProvider>
                </Grid>
                <Input
                  name="participants"
                  type="number"
                  label="Number of Participants"
                  required
                  value={formik.values.participants}
                  handleChange={handleParticipantsChange}
                />

                <Grid item>
                  <FormControl component="fieldset" sx={{ marginBottom: 2 }}>
                    <FormLabel component="legend">Accommodation Preferences</FormLabel>
                    <Field name="accommodation">
                      {({ field }) => (
                        <RadioGroup {...field} row>
                          <FormControlLabel value="hotel" control={<Radio />} label="Hotel" />
                          <FormControlLabel value="resort" control={<Radio />} label="Resort" />
                          <FormControlLabel value="camping" control={<Radio />} label="Camping" />
                        </RadioGroup>
                      )}
                    </Field>
                    <ErrorMessage name="accommodation" component="div" />
                  </FormControl>
                </Grid>
                <Input
                  name="dietaryRestrictions"
                  label="Dietary Restrictions"
                  required
                  handleChange={formik.handleChange}
                  value={formik.values.dietaryRestrictions}
                />
                <Input
                  name="accessibilityNeeds"
                  label="Accessibility Needs"
                  required 
                  handleChange={formik.handleChange}
                />
                <Input
                  name="specialRequests"
                  label="Other Special Requests"
                  required
                  handleChange={formik.handleChange}
                />
                <Input
                  name="bookedAtDate"
                  label="booked At Date"
                  required
                  handleChange={formik.handleChange}
                />
                <Input
                  name="totalCost"
                  label="Total cost"
                  value={formik.values.totalCost}
                  required
                />
                <Grid item>
                  <FormControl fullWidth component="fieldset" sx={{ marginBottom: 2 }}>
                    <FormLabel component="legend">Payment Method</FormLabel>
                    <RadioGroup
                      name="paymentMethod"
                      value={formik.values.paymentMethod}
                      row
                      onChange={formik.handleChange} // Add onChange handler
                    >
                      <FormControlLabel value="mpesa" control={<Radio />} label="Mpesa" />
                      <FormControlLabel value="creditCard" control={<Radio />} label="Credit Card" />
                      <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
                    </RadioGroup>
                  </FormControl>

                  {formik.values.paymentMethod === 'creditCard' && (
                    <Grid container spacing={2}>
                      <Input name="cardNumber" label="Card Number" required handleChange={formik.handleChange} />
                      <Input name="expirationDate" label="Expiration Date" required handleChange={formik.handleChange} />
                      <Input name="cvvCode" label="CVV Code" required handleChange={formik.handleChange} />
                    </Grid>
                  )}
                  {formik.values.paymentMethod === 'mpesa' && (
                    <>
                      <Grid container spacing={2}>
                        <Input
                          name="mpesaPhoneNumber"
                          label="Mpesa Phone Number"
                          required
                          handleChange={formik.handleChange}
                          value={formik.values.mpesaPhoneNumber}
                          onBlur={formik.handleBlur}
                          error={formik.touched.mpesaPhoneNumber && Boolean(formik.errors.mpesaPhoneNumber)}
                          helperText={formik.touched.mpesaPhoneNumber && formik.errors.mpesaPhoneNumber}
                        />
                        <Input
                          name="mpesaTransactionID"
                          label="Mpesa Transaction ID"
                          required
                          handleChange={formik.handleChange}
                          value={formik.values.mpesaTransactionID}
                          onBlur={formik.handleBlur}
                          error={formik.touched.mpesaTransactionID && Boolean(formik.errors.mpesaTransactionID)}
                          helperText={formik.touched.mpesaTransactionID && formik.errors.mpesaTransactionID}
                        />
                      </Grid>
                      <Grid item>
                        <FormControl fullWidth component="fieldset" sx={{ marginBottom: 2 }}>
                          <FormLabel component="legend">Mpesa Payment Confirmation</FormLabel>
                          <Field name="mpesaPaymentConfirmed">
                            {({ field }) => (
                              <RadioGroup {...field} row>
                                <FormControlLabel value={true} control={<Radio />} label="Confirmed" />
                              </RadioGroup>
                            )}
                          </Field>
                          <ErrorMessage name="mpesaPaymentConfirmed" component="div" />
                        </FormControl>
                      </Grid>
                    </>
                  )}
                </Grid>
                <Grid container spacing={2} sx={style.buttons}>
                  <Grid item>
                    <Stack direction="row" spacing={12} justifyContent="flex-end">
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        type="submit"
                        fullWidth
                      >
                        {currentId === null || currentId === undefined ? "Book" : "Update Booking Information"}
                      </Button>
                      <Button
                        variant="text"
                        color="inherit"
                        size="large"
                        onClick={close}
                      >
                        Cancel
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>

              </Grid>
            </form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default BookingForm;
