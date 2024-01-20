import React, { useState, useEffect } from 'react';
import { 
  Button, 
  Paper, 
  Container, 
  TextField, 
  Box 
} from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { createClient, updateClient } from "../../Actions/clients"
import { useTheme, useMediaQuery } from "@mui/material";

function RegForm(props) {
  const { currentId, setOpenPopup, setNotify, setCurrentId, clients } = props;
  const initialState = {
    name: "",
    email: "",
    address: {
      city: '',
      country: '',
      state: '',
      street: ''
    },
    phone: "",
  };

  const [clientData, setClientData] = useState(initialState);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
      // const client = useSelector((state) => (currentId ? state.clients.clients.find((client) => client.id === currentId) : null));

  const client = currentId ? clients.find((client) => client.id === currentId) : null;
  useEffect(() => {
    if (client) setClientData(client);
  }, [client]);

  const style = {
    textField: {
      margin: theme.spacing(1),
      width: !isSmallScreen ? "47%" : "auto"
    },
    buttons: {
      marginBottom: "8px",
      marginTop: "8px",
      marginRight: theme.spacing(2),
      textTransform: "none"
    }
  };

  const clear = () => {
    setCurrentId(null);
    setClientData(initialState);
  };

  const close = () => {
    setOpenPopup(false);
    clear();
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
    <Container component="main" maxWidth="md">
      <Paper elevation={2}>
        <form 
          autoComplete="off" 
          noValidate
          style={{
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          <Box>
            <TextField 
              sx={style.textField}
              name="name" 
              variant="outlined"
              label="Name" 
              value={clientData.name}
              onChange={(e) => setClientData({ ...clientData, name: e.target.value })}
              required
            />
            <TextField 
              sx={style.textField}
              name="email" 
              variant="outlined"
              label="Email Address"
              value={clientData.email}
              onChange={(e) => setClientData({ ...clientData, email: e.target.value })}
              required={false} 
            />
            <TextField
              sx={style.textField}
              name="address.country"
              variant="outlined"
              label="Country"
              value={clientData.address.country}
              onChange={(e) => setClientData({ ...clientData, address: { ...clientData.address, country: e.target.value } })}
              required
            />
            <TextField
              sx={style.textField}
              name="address.state"
              variant="outlined"
              label="State"
              value={clientData.address.state}
              onChange={(e) => setClientData({ ...clientData, address: { ...clientData.address, state: e.target.value } })}
              required
            />
            <TextField
              sx={style.textField}
              name="address.city"
              variant="outlined"
              label="City"
              value={clientData.address.city}
              onChange={(e) => setClientData({ ...clientData, address: { ...clientData.address, city: e.target.value } })}
              required
            />
            <TextField
              sx={style.textField}
              name="address.street"
              variant="outlined"
              label="Street"
              value={clientData.address.street}
              onChange={(e) => setClientData({ ...clientData, address: { ...clientData.address, street: e.target.value } })}
              required
            />
            <TextField 
              sx={style.textField}
              name="phone"
              variant="outlined"
              label="Phone Number"
              value={clientData.phone} 
              onChange={(e) => setClientData({ ...clientData, phone: e.target.value })}
              required
            />
          </Box>
          <Box>
            <Button
              sx={style.buttons}
              variant="contained"
              onClick={handleSubmit}
              color="primary"
              size="large"
              type="submit"
            >
              {currentId === null || currentId === undefined ? "Add Client" : "Update Client"}
            </Button>
            <Button
              variant="text"
              color="inherit"
              size="large"
              sx={{ textTransform: "none" }}
              onClick={close}
            >
              Cancel
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}

export default RegForm;
