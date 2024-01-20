import React from 'react';
import { Formik, getIn } from 'formik';
import {
  Paper,
  Button,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Collapse,
  MenuItem,
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as yup from 'yup';
import Input from "../../../Components/TextFieldInput";
import SelectInput from '../../../Components/SelectInput';

const BookingForm = ({ price, bookingFee }) => {
  const isSignedUp = false;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const initialValues = {
    tickets: {
      adultTickets: 0,
      childTickets: 0,
    },
    contactInformation: {
      name: '',
      email: '',
      phoneNumber: '',
    },
    paymentMethod: "full", // Set a default payment method
    termsAndConditions: false,
    partialPaymentAmount: 0,
  };

  const validationSchema = yup.object({
    total: yup.number().positive('Must be a positive number'),
    contactInformation: yup.object({
      name: yup.string().required('Name is required'),
      email: yup.string().email('Invalid email').required('Email is required'),
      phoneNumber: yup.string().required('Phone number is required'),
    }),
    tickets: yup.object().shape({
      adultTickets: yup
        .number()
        .positive('Must be a positive number')
        .integer('Must be a whole number and greater than or equal to 0')
        .min(0, 'Must be at least 0'),

      childTickets: yup
        .number()
        .positive('Must be a positive number')
        .integer('Must be a whole number and greater than or equal to 0')
        .min(0, 'Must be at least 0'),
    }),

    termsAndConditions: yup.boolean().oneOf([true], 'Must accept terms and conditions'),
  });


  const calculateTotal = (values) => {
    const { adultTickets, childTickets } = values.tickets;
    const { paymentMethod } = values;
    const basePrice = price;

    if (paymentMethod === 'full') {
      values.partialPaymentAmount = 0;

      // Calculate total with tickets and booking fee for full payment

      const total = adultTickets * basePrice + (childTickets * (1 / 2) * basePrice);
      return total >= 0 ? total : 0;
    }
    else if (paymentMethod === 'partial') {
            values.partialPaymentAmount = bookingFee;

      // Calculate remaining balance without ticket prices for partial payment
      const partialPaymentAmount = parseFloat(values.partialPaymentAmount) || 0;
      const remainingBalance = basePrice - partialPaymentAmount;
      return remainingBalance >= 0 ? remainingBalance : 0;
    }

    return 0; // Default to 0 if payment method is not recognized
  };




  return (
    <Paper elevation={16} sx={{ p: 1, position: "sticky", top: 20, zIndex: 1 }}>
      <Typography variant="h6" align='center' sx={{ m: 2 }}>Booking Tour</Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {formik => (
          <form onSubmit={formik.handleSubmit}>
            <Grid container>
              <Grid container spacing={2}>
                {!isSignedUp && (
                  <>
                    <Input
                      half
                      name="contactInformation.name"
                      label=" Name"
                      value={formik.values.contactInformation.name}
                      handleChange={formik.handleChange}
                      variant="contained"
                      onBlur={formik.handleBlur}
                      error={Boolean(
                        getIn(formik.touched, 'contactInformation.name') &&
                        getIn(formik.errors, 'contactInformation.name')
                      )}
                      helperText={
                        getIn(formik.touched, 'contactInformation.name') &&
                        getIn(formik.errors, 'contactInformation.name')
                      }
                    />
                    <Input
                      half
                      name="contactInformation.email"
                      label=" Email"
                      value={formik.values.contactInformation.email}
                      handleChange={formik.handleChange}
                      variant="contained"
                      onBlur={formik.handleBlur}
                      error={Boolean(
                        getIn(formik.touched, 'contactInformation.email') &&
                        getIn(formik.errors, 'contactInformation.email')
                      )}
                      helperText={
                        getIn(formik.touched, 'contactInformation.email') &&
                        getIn(formik.errors, 'contactInformation.email')
                      }
                    />
                    <Input
                      half
                      name="contactInformation.phoneNumber"
                      label=" Phone Number"
                      value={formik.values.contactInformation.phoneNumber}
                      handleChange={formik.handleChange}
                      variant="contained"
                      onBlur={formik.handleBlur}
                      error={Boolean(
                        getIn(formik.touched, 'contactInformation.phoneNumber') &&
                        getIn(formik.errors, 'contactInformation.phoneNumber')
                      )}
                      helperText={
                        getIn(formik.touched, 'contactInformation.phoneNumber') &&
                        getIn(formik.errors, 'contactInformation.phoneNumber')
                      }
                    />
                  </>
                )}
              </Grid>
              <Grid container spacing={2}>
                <SelectInput
                  label="Payment Method"
                  name="paymentMethod"
                  variant="outlined"
                >
                  <MenuItem value="full">Full Payment</MenuItem>
                  <MenuItem value="partial">Partial Payment</MenuItem>
                </SelectInput>

              </Grid>
              {formik.values.paymentMethod === "partial" ? (
                <Grid container sx={{ mt: 2 }} spacing={2}>

                  <Input
                    fullWidth
                    name="partialPaymentAmount"
                    label="Partial Payment Amount (KSH)"
                    type="number"
                    variant="outlined"
                    value={formik.values.partialPaymentAmount}
                    handleChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <Grid item>

                    {formik.values.paymentMethod === 'partial' && (
                      <Typography variant="subtitle2" align="justify" color="warning">
                        Please finalize your booking with a partial payment of {calculateTotal(formik.values)} KSH.
                        The remaining balance is due four days before the tour.

                      </Typography>
                    )}

                  </Grid>

                </Grid>
              ) : (
                <Grid container spacing={2}>
                  <Grid item sm={12}>
                    <Typography variant="subtitle1" align='justify' sx={{ mt: 1 }}>Tickets</Typography>
                  </Grid>
                  <Input
                    half
                    name="tickets.adultTickets"
                    label="Adult (18+ years)"
                    type="number"
                    variant="outlined"
                    value={formik.values.tickets.adultTickets}
                    handleChange={formik.handleChange}

                    onBlur={formik.handleBlur}
                    error={Boolean(
                      getIn(formik.touched, 'tickets.adultTickets') &&
                      getIn(formik.errors, 'tickets.adultTickets')
                    )}
                    helperText={
                      getIn(formik.touched, 'tickets.adultTickets') &&
                      getIn(formik.errors, 'tickets.adultTickets')
                    }
                  />
                  <Input
                    half
                    name="tickets.childTickets"
                    label="Child (0-12 years)"
                    type="number"
                    variant="outlined"
                    value={formik.values.tickets.childTickets}
                    handleChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={Boolean(
                      getIn(formik.touched, 'tickets.childTickets') &&
                      getIn(formik.errors, 'tickets.childTickets')
                    )}
                    helperText={
                      getIn(formik.touched, 'tickets.childTickets') &&
                      getIn(formik.errors, 'tickets.childTickets')
                    }
                  />
                  <Input
                    fullWidth
                    name="total"
                    label="Total"
                    variant="outlined"
                    value={calculateTotal(formik.values)}
                    readOnly
                  />
                </Grid>
              )}
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    Terms and Conditions
                    <IconButton
                      color="primary"
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </Typography>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Typography variant="body1">
                      By submitting this form, you agree to the following terms and conditions:
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemText
                          primaryTypographyProps={{ variant: 'body1', fontWeight: 'bold' }}
                          primary="Payment Policy"
                        />
                      </ListItem>
                      <List>
                        <ListItem>
                          <ListItemText
                            primary="All bookings must be paid in full at least 14 days before the tour date."
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            primary="Payment is non-refundable after this deadline."
                          />
                        </ListItem>
                        {/* Add more points as needed */}
                      </List>
                    </List>
                    <List>
                      <ListItem>
                        <ListItemText
                          primaryTypographyProps={{ variant: 'body1', fontWeight: 'bold', mb: 1 }}
                          primary="Cancellation Policy"
                        />
                      </ListItem>
                      <List>
                        <ListItem>
                          <ListItemText
                            primary="Cancellations made 15 days or more before the tour date are eligible for a partial refund."
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            primary="No refunds for cancellations made within 14 days of the tour date."
                          />
                        </ListItem>
                        {/* Add more points as needed */}
                      </List>
                    </List>
                  </Collapse>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formik.values.termsAndConditions}
                        onChange={formik.handleChange}
                        name="termsAndConditions"
                        color="primary"
                      />
                    }
                    label={
                      <Typography variant="body2">
                        I have read and agree to the{' '}
                        <span style={{ color: 'blue', textDecoration: 'underline' }}>
                          terms and conditions
                        </span>
                      </Typography>
                    }
                  />
                </Grid>
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={!formik.values.termsAndConditions}
            >
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </Paper>
  );
};

export default BookingForm;
