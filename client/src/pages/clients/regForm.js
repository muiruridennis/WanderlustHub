import React, { useState, useEffect } from 'react';
import { Button, Tooltip, Paper, TextField, Grid, Typography, Container, Stack, Switch, FormControlLabel, IconButton } from '@mui/material';
import { Formik, getIn } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { createClient, updateClient } from "../../Actions/clients";
import Input from "../../Components/TextFieldInput"

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .required('Contact information is required')
    .email('Invalid email format'),
  address: Yup.object().shape({
    country: Yup.string().required('Country is required'),
    city: Yup.string().required('City is required'),
    street: Yup.string().required('Street is required'),
  }),

});

function ClientRegForm(props) {
  const { currentId, setOpenPopup, setNotify, setCurrentId, clients, close } = props;
  const initialValues = {
    name: "",
    email: "",
    address: {
      country: '',
      city: '',
      street: ''
    },
    phoneNumber: "",
    profile:{
      points:"",   }
  };

  const [clientData, setClientData] = useState(initialValues);
  const dispatch = useDispatch();
  // const client = useSelector((state) => (currentId ? state.clients.clients.find((client) => client.id === currentId) : null));

  const client = currentId ? clients.find((client) => client.id === currentId) : null;
  useEffect(() => {
    if (client) setClientData(client);
  }, [client]);

  const clear = () => {
    setCurrentId(null);
    setClientData(initialValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === null) {
      // Code for creating a new client
      dispatch(createClient({ ...clientData }));
      setOpenPopup(false);
      setNotify({
        isOpen: true,
        message: 'Created Successfully',
        type: 'success'
      });
      clear();
    } else {
      // Code for updating an existing client
      // dispatch(updateClient(currentId, { ...clientData }));
      setOpenPopup(false);
      setNotify({
        isOpen: true,
        message: 'Updated Successfully',
        type: 'success'
      });
      clear();
    }
  };

  return (
    <Container component="main" maxWidth="lg">
      <Paper sx={{ maxWidth: 400, margin: 'auto', padding: '16px' }} elevation={0}>
        <Formik
          initialValues={clientData}
          enableReinitialize={true} // Enable reinitialization

          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values)
          }}

        >
          {formik => (
            <form
              form onSubmit={formik.handleSubmit}
              noValidate
            >
              <Grid container spacing={2}>

                <Input
                  name="name"
                  label="Name"
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
                  label="Email Address"
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
                  name="address.country"
                  label="Country"
                  type="text"
                  multiline
                  value={formik.values.address.country}
                  handleChange={formik.handleChange}
                  fullWidth
                  required
                  onBlur={formik.handleBlur}
                  error={Boolean(
                    getIn(formik.touched, 'address.country') &&
                    getIn(formik.errors, 'address.country')
                  )}
                  helperText={
                    getIn(formik.touched, 'address.country') &&
                    getIn(formik.errors, 'address.country')
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
                  name="phoneNumber"
                  label="Phone Number "
                  value={formik.values.phoneNumber}
                  handleChange={formik.handleChange}
                  fullWidth
                  onBlur={formik.handleBlur}
                  error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                  helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                />
                <Grid item xs={12} lg={12}>
                  <Stack direction="row" spacing={3}>

                    <Button
                      variant="text"
                      color="inherit"
                      fullWidth
                      onClick={close}
                    >
                      Cancel
                    </Button>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      type="submit"
                    >
                      {currentId === null || currentId === undefined ? "Add Client" : "Update Client"}
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Paper>
    </Container >
  );
}

export default ClientRegForm;
