import React, { useState, useEffect } from 'react';
import { Button, Paper, Container, TextField } from '@mui/material';
import { useDispatch } from "react-redux";
import useStyles from '../../../clients/Registration/styles';
import { addToList } from "../../../../Actions/tourClients"


function Client({ cost, openPopup }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [clientData, setClientData] = useState({ firstName: "", lastName: "", phoneNumber: "", amountPaid: "", id: 1, balance: 0 });


  const idExist = false;
  
  const clear = () => {
    setClientData({ firstName: "", lastName: "", phoneNumber: "", amountPaid: "", balance: 0, id : clientData.id +1 });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // await setClientData((prevState) => ({
    //   ...clientData,
    //   id: prevState.id + 1
    // }));
    await dispatch(addToList(clientData));
    await  clear();
  };
  return (
    <Container component="main" maxWidth="lg">
      <Paper className={classes.paper} elevation={3}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} >
          <TextField name="id" variant="outlined" fullWidth value={clientData.id} required  />
          <TextField name="firstName" variant="outlined" label="First Name" fullWidth value={clientData.firstName} onChange={(e) => setClientData({ ...clientData, firstName: e.target.value })} required />
          <TextField name="lastName" variant="outlined" label="Last Name" fullWidth value={clientData.lastName} onChange={(e) => setClientData({ ...clientData, lastName: e.target.value })} required />
          <TextField name="phoneNumber" variant="outlined" label="Phone Number" fullWidth value={clientData.phoneNumber} onChange={(e) => setClientData({ ...clientData, phoneNumber: e.target.value })} required />
          <TextField name="amountPaid" variant="outlined" label="Paid Amount" fullWidth value={clientData.amountPaid} onChange={(e) => setClientData({ ...clientData, amountPaid: e.target.value })} required />
          <TextField name="balance" variant="outlined" label="Balance" fullWidth value={cost - clientData.amountPaid} />
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Add</Button>
          {/* <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button> */}
        </form>

      </Paper>

    </Container>
  )
}

export default Client