import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import {
    Button,
    MenuItem,
    Box,
    Grid,
} from '@mui/material';
import { LocalizationProvider, MobileDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { Formik, getIn } from 'formik';
import * as Yup from 'yup';
import Input from "../../../Components/TextFieldInput";
import MyInput from '../../../Components/SelectInput';

const currentDate = new Date();
const formattedDate = format(currentDate, 'mm/dd/yyyy hh:mm aa');

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
        .required('Contact information is required')
        .email('Invalid email format'),
    address: Yup.object().shape({
        street: Yup.string().required('Street is required'),
        city: Yup.string().required('City is required'),
        state: Yup.string().required('State is required'),
        zip: Yup.string().required('ZIP Code is required'),
    }),
    serviceType: Yup.string().required('Service Type is required'),
    paymentMethod: Yup.string().required('Payment Method is required'),
    paymentDetails: Yup.string().required('Payment Details are required'),
    contractTerms: Yup.string().required('Contract Terms are required'),
    contractExpiryDate: Yup.date().nullable(),
    notes: Yup.string().required('Notes are required'),
});

function VendorForm({ currentVendorId, vendors }) {
    const initialValues = {
        name: '',
        email: '',
        address: {
            street: '',
            city: '',
            state: '',
            zip: '',
        },
        serviceType: '',
        paymentMethod: '',
        paymentDetails: '',
        invoiceDueDate: '',
        contractTerms: '',
        contractExpiryDate: formattedDate,
        notes: '',
    }
    const [vendor, setVendor] = useState(initialValues);

    const selectedVendor = currentVendorId ? vendors.find((vendor) => vendor.id === currentVendorId) : null;

    useEffect(() => {
        if (selectedVendor) {
            setVendor(selectedVendor);
        }
    }, [selectedVendor]);



    return (
        <Box p={3} sx={{ maxWidth: 400, margin: 'auto', padding: '16px' }}>
            <Formik
                initialValues={vendor}
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
                            <Input
                                name="name"
                                label="Full Name"
                                type="text"
                                multiline
                                value={formik.values.name}
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
                                value={formik.values.email}
                                handleChange={formik.handleChange}
                                fullWidth
                                required
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                            <Input
                                half
                                name="address.street"
                                label=" Street"
                                type="text"
                                multiline
                                value={formik.values.address.street}
                                handleChange={formik.handleChange}
                                fullWidth
                                required
                                onBlur={formik.handleBlur}
                                error={Boolean(
                                    getIn(formik.touched, 'address.street') &&
                                    getIn(formik.errors, 'address.street')
                                )}
                                helperText={
                                    getIn(formik.touched, 'address.street') &&
                                    getIn(formik.errors, 'address.street')
                                }
                            />
                            <Input
                                half
                                name="address.city"
                                label="City"
                                type="text"
                                multiline
                                value={formik.values.address.city}
                                handleChange={formik.handleChange}
                                fullWidth
                                required
                                onBlur={formik.handleBlur}
                                error={Boolean(
                                    getIn(formik.touched, 'address.city') &&
                                    getIn(formik.errors, 'address.city')
                                )}
                                helperText={
                                    getIn(formik.touched, 'address.city') &&
                                    getIn(formik.errors, 'address.city')
                                }
                            />
                            <Input
                                half
                                name="address.state"
                                label=" state"
                                type="text"
                                multiline
                                value={formik.values.address.state}
                                handleChange={formik.handleChange}
                                fullWidth
                                required
                                onBlur={formik.handleBlur}
                                error={Boolean(
                                    getIn(formik.touched, 'address.state') &&
                                    getIn(formik.errors, 'address.state')
                                )}
                                helperText={
                                    getIn(formik.touched, 'address.state') &&
                                    getIn(formik.errors, 'address.state')
                                }
                            />
                            <Input
                                half
                                name="address.zip"
                                label=" zip"
                                type="text"
                                multiline
                                value={formik.values.address.zip}
                                handleChange={formik.handleChange}
                                fullWidth
                                required
                                onBlur={formik.handleBlur}
                                error={Boolean(
                                    getIn(formik.touched, 'address.zip') &&
                                    getIn(formik.errors, 'address.zip')
                                )}
                                helperText={
                                    getIn(formik.touched, 'address.zip') &&
                                    getIn(formik.errors, 'address.zip')
                                }
                            />

                            <Input
                                name="serviceType"
                                label="Service Type"
                                type="text"
                                value={formik.values.serviceType}
                                handleChange={formik.handleChange}
                                fullWidth
                                required
                                onBlur={formik.handleBlur}
                                error={formik.touched.serviceType && Boolean(formik.errors.serviceType)}
                                helperText={formik.touched.serviceType && formik.errors.serviceType}
                            />
                            <MyInput label="Payment Method" name="paymentMethod">
                                <MenuItem value="Mpesa">Mpesa</MenuItem>
                                <MenuItem value="Cash">Cash</MenuItem>
                                <MenuItem value="Credit Card">Credit Card</MenuItem>
                                <MenuItem value="Cheque ">Cheque</MenuItem>
                                <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
                                <MenuItem value="Others">Others</MenuItem>
                            </MyInput>
                            <Input
                                name="paymentDetails"
                                label="Payment Details"
                                type="text"
                                value={formik.values.paymentDetails}
                                handleChange={formik.handleChange}
                                fullWidth
                                required
                                onBlur={formik.handleBlur}
                                error={formik.touched.paymentDetails && Boolean(formik.errors.paymentDetails)}

                            />

                            <Input
                                name="contractTerms"
                                label="Contract Terms"
                                type="text"
                                value={formik.values.contractTerms}
                                handleChange={formik.handleChange}
                                fullWidth
                                required
                                onBlur={formik.handleBlur}
                                error={formik.touched.contractTerms && Boolean(formik.errors.contractTerms)}

                            />
                            <Grid item xs={12} lg={12}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <MobileDateTimePicker
                                        disablePast
                                        label="Contract Expiry Date"
                                        value={formik.values.contractExpiryDate}
                                        onChange={(newValue) => {
                                            formik.setFieldValue('contractExpiryDate', newValue);
                                        }}
                                        sx={{
                                            width: '100%',
                                            marginBottom: 2,
                                        }}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Input
                                multiline
                                name="notes"
                                label="To Be Noted"
                                type="text"
                                value={formik.values.notes}
                                handleChange={formik.handleChange}
                                fullWidth
                                required
                                onBlur={formik.handleBlur}
                                error={formik.touched.notes && Boolean(formik.errors.notes)}

                            />
                            <Grid item xs={12} lg={12}>
                                <Button
                                    variant="contained"
                                    type='submit'
                                    fullWidth>
                                    {currentVendorId ? "Update Vendor" : "Create Vendor"}
                                </Button>
                            </Grid>

                        </Grid>
                    </form>
                )}
            </Formik>

        </Box >
    )
}

export default VendorForm
