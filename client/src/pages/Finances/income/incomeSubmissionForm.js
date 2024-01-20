import React, { useState, useEffect } from 'react';
import {
  Button,
  MenuItem,
  Box,
  Grid,
  TextField
} from '@mui/material';

import { Formik } from 'formik';
import * as Yup from 'yup';
import Input from "../../../Components/TextFieldInput";
import MyInput from '../../../Components/SelectInput';

const validationSchema = Yup.object().shape({
  source: Yup.string().required('Source is required'),
  date: Yup.date().required('Date is required'),
  amount: Yup.number().required('Amount is required'),
  status: Yup.string().required('Status is required'),
  description: Yup.string().required('Description is required'),
  paymentMethod: Yup.string().required('Payment Method is required'),
  payerInfo: Yup.string().required('Payer Info is required'),
  recipientInfo: Yup.string().required('Recipient Info is required'),
  referenceNumber: Yup.string().required('Reference Number is required'),
});

const IncomeSubmissionForm = ({ currrentIncomeId, income }) => {
  const initialValues = {
    source: '',
    date: '',
    description: '',
    amount: 0,
    status: '',
    paymentMethod: '',
    payerInfo: '',
    recipientInfo: '',
    accountInfo: '',
    referenceNumber: '',
    confirmationStatus: '',
  };

  const [incomeData, setIncomeData] = useState(initialValues);

  const selectedIncome = currrentIncomeId ? income.find((income) => income.id === currrentIncomeId) : null;
  console.log("selectedIncome", selectedIncome)

  useEffect(() => {
    if (selectedIncome) {
      setIncomeData(selectedIncome);
    }
  }, [selectedIncome]);

  return (
    <Box p={3} sx={{ maxWidth: 400, margin: 'auto', padding: '16px' }}>
      <Formik
        initialValues={incomeData}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={(values) => {
        }}
      >
        {formik => (
          <form onSubmit={formik.handleSubmit} noValidate>
            <Grid container spacing={2}>
              <MyInput label="Income Source" name="source">
                <MenuItem value="Tour Packages">Tour Packages</MenuItem>
                <MenuItem value="Team Building Workshops">Team Building Workshops</MenuItem>
                <MenuItem value="Hotel Reservations">Hotel Reservations</MenuItem>
                <MenuItem value="Corporate Events">Corporate Events</MenuItem>
                <MenuItem value="Transportation Services">Transportation Services</MenuItem>
                <MenuItem value="Sightseeing Tours">Sightseeing Tours</MenuItem>
              </MyInput>


              <Input
                name="description"
                label="Description"
                type="text"
                multiline
                value={formik.values.description}
                handleChange={formik.handleChange}
                fullWidth
                required
                onBlur={formik.handleBlur}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
              />
              <Grid item xs={12} lg={6}>
                <TextField
                  fullWidth
                  name="date"
                  label="Date"
                  type="date"
                  onChange={formik.handleChange}
                  value={formik.values.date}
                  onBlur={formik.handleBlur}
                  error={formik.touched.date && Boolean(formik.errors.date)}
                  helperText={formik.touched.date && formik.errors.date}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  fullWidth
                  name="amount"
                  label="Amount"
                  type="number"
                  variant='outlined'
                  onChange={formik.handleChange}
                  value={formik.values.amount}
                  onBlur={formik.handleBlur}
                  error={formik.touched.amount && Boolean(formik.errors.amount)}
                  helperText={formik.touched.amount && formik.errors.amount}
                />
              </Grid>
              <MyInput label="Payment Method" name="paymentMethod">
                <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
                <MenuItem value="Mpesa">Mpesa</MenuItem>
                <MenuItem value="Cash">Cash</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
              </MyInput>
              <Input
                name="payerInfo"
                label="Payer Info"
                type="text"
                value={formik.values.payerInfo}
                handleChange={formik.handleChange}
                fullWidth
                required
                onBlur={formik.handleBlur}
                error={formik.touched.payerInfo && Boolean(formik.errors.payerInfo)}
                helperText={formik.touched.payerInfo && formik.errors.payerInfo}
              />
              <Input
                name="recipientInfo"
                label="Recipient Info"
                type="text"
                value={formik.values.recipientInfo}
                handleChange={formik.handleChange}
                fullWidth
                required
                onBlur={formik.handleBlur}
                error={formik.touched.recipientInfo && Boolean(formik.errors.recipientInfo)}
                helperText={formik.touched.recipientInfo && formik.errors.recipientInfo}
              />
              <Input
                name="referenceNumber"
                label="Reference Number"
                type="text"
                value={formik.values.referenceNumber}
                handleChange={formik.handleChange}
                fullWidth
                required
                onBlur={formik.handleBlur}
                error={formik.touched.referenceNumber && Boolean(formik.errors.referenceNumber)}
                helperText={formik.touched.referenceNumber && formik.errors.referenceNumber}
              />
              <MyInput label="Status" name="confirmationStatus">
                <MenuItem value="Completed">Completed</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
              </MyInput>
              <Grid item xs={12} lg={12}>
                <Button variant="contained" type='submit' fullWidth>
                  {currrentIncomeId ? "Update Income" : "Create Income"}
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default IncomeSubmissionForm;
