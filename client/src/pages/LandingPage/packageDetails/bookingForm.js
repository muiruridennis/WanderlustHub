import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button, Grid, FormControl, InputLabel, MenuItem, Select, Typography, Container } from '@mui/material';

const validationSchema = yup.object({
  date: yup.string().required('Date is required'),
  time: yup.string().required('Time is required'),
  adultTickets: yup.number().required('Number of adult tickets is required').min(1, 'At least 1 adult ticket'),
  youthTickets: yup.number().required('Number of youth tickets is required').min(0, 'Youth tickets cannot be negative'),
  childTickets: yup.number().required('Number of child tickets is required').min(0, 'Child tickets cannot be negative'),
  additionalServices: yup.object({
    perBooking: yup.number().required('Service per booking is required').min(0, 'Service per booking cannot be negative'),
    perPerson: yup.number().required('Service per person is required').min(0, 'Service per person cannot be negative'),
  }),
});

const BookingForm = () => {
  const formik = useFormik({
    initialValues: {
      date: '',
      time: '',
      adultTickets: 0,
      youthTickets: 0,
      childTickets: 0,
      additionalServices: {
        perBooking: 0,
        perPerson: 0,
      },
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values);
    },
  });

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="date"
              label="Date"
              type="date"
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.date && Boolean(formik.errors.date)}
              helperText={formik.touched.date && formik.errors.date}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="time"
              label="Time"
              type="time"
              value={formik.values.time}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.time && Boolean(formik.errors.time)}
              helperText={formik.touched.time && formik.errors.time}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="adultTickets"
              label="Adult Tickets"
              type="number"
              value={formik.values.adultTickets}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.adultTickets && Boolean(formik.errors.adultTickets)}
              helperText={formik.touched.adultTickets && formik.errors.adultTickets}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="youthTickets"
              label="Youth Tickets"
              type="number"
              value={formik.values.youthTickets}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.youthTickets && Boolean(formik.errors.youthTickets)}
              helperText={formik.touched.youthTickets && formik.errors.youthTickets}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="childTickets"
              label="Child Tickets"
              type="number"
              value={formik.values.childTickets}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.childTickets && Boolean(formik.errors.childTickets)}
              helperText={formik.touched.childTickets && formik.errors.childTickets}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="additionalServices">Additional Services</InputLabel>
              <Select
                labelId="additionalServices"
                id="additionalServices"
                value={formik.values.additionalServices.perBooking}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.additionalServices && Boolean(formik.errors.additionalServices)}
                inputProps={{
                  name: 'additionalServices.perBooking',
                  id: 'additionalServices.perBooking',
                }}
              >
                <MenuItem value={0}>None</MenuItem>
                <MenuItem value={20}>Service A</MenuItem>
                {/* Add more services as needed */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="additionalServicesPerPerson">Additional Services Per Person</InputLabel>
              <Select
                labelId="additionalServicesPerPerson"
                id="additionalServicesPerPerson"
                value={formik.values.additionalServices.perPerson}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.additionalServices && Boolean(formik.errors.additionalServices)}
                inputProps={{
                  name: 'additionalServices.perPerson',
                  id: 'additionalServices.perPerson',
                }}
              >
                <MenuItem value={0}>None</MenuItem>
                <MenuItem value={10}>Service B</MenuItem>
                {/* Add more services as needed */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Total: ${calculateTotal(formik.values)}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Booking Now
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

const calculateTotal = (values) => {
  const {
    adultTickets,
    youthTickets,
    childTickets,
    additionalServices: { perBooking, perPerson },
  } = values;

  const total = adultTickets * 43 + youthTickets * 29 + childTickets * 0 + perBooking + perPerson;

  return total;
};

export default BookingForm;
