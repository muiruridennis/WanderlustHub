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
  category: Yup.string().required('Category is required'),
  date: Yup.date().required('Date is required'),
  amount: Yup.number().required('Amount is required'),
  status: Yup.string().required('Status is required'),
  description: Yup.string().required('Description is required'),
})

const ExpenseSubmissionForm = ({ currrentExpenseId, expenses }) => {

  const initialValues = {
    category: '',
    date: '',
    description: '',
    amount: '',
    status: 'Pending',
    attachment: null,
    approver: null,
    paymentMethod: '',
    vendor: ''
  };
  const [expense, setExpense] = useState(initialValues);

  const selectedExpense = currrentExpenseId ? expenses.find((expense) => expense.id === currrentExpenseId) : null;

  useEffect(() => {
    if (selectedExpense) {
      setExpense(selectedExpense);
    }
  }, [selectedExpense]);
  

  return (
    <Box p={3} sx={{ maxWidth: 400, margin: 'auto', padding: '16px' }}>
      <Formik
        initialValues={expense}
        enableReinitialize={true} // Enable reinitialization

        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {formik => (

          < form onSubmit={formik.handleSubmit}
            noValidate
          >
            <Grid container spacing={2}>
              <MyInput label="Expense Category" name="category">
                <MenuItem value="accommodation">Accommodation</MenuItem>
                <MenuItem value="Employee Salaries">Employee Salaries</MenuItem>
                <MenuItem value="transportation">Transportation</MenuItem>
                <MenuItem value="meals">Meals</MenuItem>
                <MenuItem value="miscellaneous">Miscellaneous Services</MenuItem>
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
              <Grid item xs={12} lg={12}>
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
              <Grid item xs={12} lg={12}>
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
                <MyInput label="Payment Method" name="paymentMethod">
                  <MenuItem value="Mpesa">Mpesa</MenuItem>
                  <MenuItem value="Cash">Cash</MenuItem>
                  <MenuItem value="Check">Check</MenuItem>
                  <MenuItem value="Credit Card">Credit Card</MenuItem>
                  <MenuItem value="Electronic Transfer">Electronic Transfer</MenuItem>
                </MyInput>
              </Grid>
              <MyInput label="Approver" name="approver">
                <MenuItem value="John Doe">John Doe</MenuItem>
                <MenuItem value="Jane Smith">Jane Smith</MenuItem>
              </MyInput>

              <Input
                name="vendor"
                label="Vendor/Supplier"
                type="text"
                value={formik.values.vendor}
                handleChange={formik.handleChange}
                fullWidth
                required
                onBlur={formik.handleBlur}
                error={formik.touched.vendor && Boolean(formik.errors.vendor)}
                helperText={formik.touched.vendor && formik.errors.vendor}
              />
              <MyInput label="Status" name="status">
                <MenuItem value="Approved">Approved</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Failed">Failed</MenuItem>
                <MenuItem value="Failed">Rejected</MenuItem>
                <MenuItem value="Failed">On Hold</MenuItem>
              </MyInput>
              <Grid item xs={12} lg={12}>
                <input
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    boxShadow: 'none',
                    backgroundColor: '#f7f7f7',
                    color: '#333',
                    fontSize: '14px',
                  }}
                  type="file"
                  accept=".pdf, .jpg, .jpeg, .png"
                  onChange={(event) => {
                    formik.setFieldValue('attachment', event.currentTarget.files[0]);
                  }}
                  onBlur={formik.handleBlur}
                />
              </Grid>

              <Grid item xs={12} lg={12}>

                <Button 
                variant="contained" 
                type='submit' 
                fullWidth>
                  {currrentExpenseId ? "Update Expense" : "Create Expense"}                
                </Button>
              </Grid>

            </Grid>
          </form>
        )}
      </Formik>

    </Box >
  );
};

export default ExpenseSubmissionForm;
