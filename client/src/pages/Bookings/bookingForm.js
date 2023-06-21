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
  Select,
  InputLabel,
  Grid,
  Stack,
  FormHelperText
} from '@mui/material';

import { useTheme, useMediaQuery } from "@mui/material";
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import Input from './input';


const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  tourType: Yup.string().required('Tour Type is required'),
  dateAndTime: Yup.string().required('Date and Time is required'),
  duration: Yup.string().required('Duration is required'),
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
const FormikWrapper = React.forwardRef((props, ref) => (
  <Formik innerRef={ref} {...props} />
));

const BookingForm = (props) => {

  const { currentId, setOpenPopup, bookings, setCurrentId, tourCost } = props;
  const [totalCost, setTotalCost] = useState(tourCost);
  const [participants, setParticipants] = useState(1);
  const initialValues = useMemo(() => {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      tourType: '',
      dateAndTime: '',
      duration: '',
      participants,
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
    };
  }, [participants, totalCost]);
  const [bookingData, setBookingData] = useState(initialValues)
  const dispatch = useDispatch();
  // const booking = bookings.map(({ bookings }) => {
  //   if (currentId) {
  //     return bookings.find((booking) => booking.id === currentId);
  //   } else {
  //     return null;
  //   }
  // });
  const booking = currentId
  ? bookings
      .map(({ bookings }) => bookings)
      .flat()
      .find((booking) => booking.id === currentId)
  : null;


  console.log("booking", bookingData);
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


  // useEffect(() => {
  //   if (booking) setBookingData(booking);
  // }, [booking]);
  useEffect(() => {
    if (booking && booking !== bookingData) {
      setBookingData(booking);
    }
  }, [booking, bookingData]);
  

  const clear = () => {
    setCurrentId(null);
  };

  const close = () => {
    setOpenPopup(false);
    clear();
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
        <FormikWrapper
          initialValues={initialValues}
          ref={formikRef}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {formik => (
            <form onSubmit={formik.handleSubmit} autoComplete noValidate >
              <Grid container spacing={2}>
                <Input name="firstName" label="First Name" half required handleChange={formik.handleChange} />
                <Input name="lastName" label="Last Name" half required handleChange={formik.handleChange} />
                <Input name="email" type="email" label="Email Address" half required handleChange={formik.handleChange} />
                <Input name="phoneNumber" label="Phone Number" half required handleChange={formik.handleChange} />
                <Grid item xs={12} spacing={2}>
                  <Field name="tourType">
                    {({ field }) => (
                      <FormControl fullWidth>
                        <InputLabel>Tour Type</InputLabel>
                        <Select
                          {...field}
                          label="Tour Type"
                          value={formik.values.tourType}
                          onChange={formik.handleChange}
                          error={formik.touched.tourType && Boolean(formik.errors.tourType)}
                        >
                          <MenuItem value="">Select Tour Type</MenuItem>
                          <MenuItem value="camping">Camping</MenuItem>
                          <MenuItem value="roadTrips">Road Trips</MenuItem>
                          <MenuItem value="corporateTeamBuilding">Corporate</MenuItem>
                          <MenuItem value="tourPackages">Tour Packages</MenuItem>
                        </Select>
                        {formik.touched.tourType && formik.errors.tourType && (
                          <FormHelperText error>{formik.errors.tourType}</FormHelperText>
                        )}
                      </FormControl>
                    )}
                  </Field>
                </Grid>
                <Input name="dateAndTime" type="date" fullWidth required handleChange={formik.handleChange} />
                <Input name="duration" label="Duration" required handleChange={formik.handleChange} />
                <Input
                  name="participants"
                  type="number"
                  label="Number of Participants"
                  required
                  readOnly
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
                <Input name="dietaryRestrictions" label="Dietary Restrictions" required handleChange={formik.handleChange} />
                <Input name="accessibilityNeeds" label="Accessibility Needs" required handleChange={formik.handleChange} />
                <Input name="specialRequests" label="Other Special Requests" required handleChange={formik.handleChange} />
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
                        <Input name="mpesaPhoneNumber" label="Mpesa Phone Number" required handleChange={formik.handleChange} />
                        <Input name="mpesaTransactionID" label="Mpesa Transaction ID" required handleChange={formik.handleChange} />
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
        </FormikWrapper>
      </Paper>
    </Container>
  );
};

export default BookingForm;
