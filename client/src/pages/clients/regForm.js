import React, { useState, useEffect } from 'react';
import { MenuItem, Button, Paper, Container, TextField, Select, InputLabel, FormControl, Box } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { createClient, updateClient } from "../../Actions/clients"
import { useTheme, useMediaQuery } from "@mui/material";

function RegForm(props) {
    const { currentId, setOpenPopup, setNotify, setCurrentId } = props
    const initialState = {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phoneNumber: "",
        lastPackage: "",
        group: "",
    }
    const [clientData, setClientData] = useState(initialState);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const dispatch = useDispatch();
    const client = useSelector((state) => (currentId ? state.clients.clients.find((client) => client.id === currentId) : null));
    useEffect(() => {
        if (client) setClientData(client);
        console.log("currentId", currentId)
    }, [client]);

    const style = {
        textField: {
            m: theme.spacing(1),
            width: !isSmallScreen ? "47%" : "auto"
        }
    }
    const close = () => {
        setOpenPopup(false)
    }
    const clear = () => {
        setCurrentId(null);
        setClientData(initialState);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (currentId === null ) {
            dispatch(createClient({ ...clientData }))
            setOpenPopup(false)
            setNotify({
                isOpen: true,
                message: 'Created Successfully',
                type: 'success'
            })
            clear()
        } else {
            dispatch(updateClient(currentId, { ...clientData }))
            setOpenPopup(false)
            setNotify({
                isOpen: true,
                message: 'Updated Successfully',
                type: 'success'
            })
            clear()
        }
    };
    return (
        <>
            <Container component="main" maxWidth="sm" >
                <Paper elevation={0}>
                    <form autoComplete="off" noValidate
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                        }}
                    >
                        <Box>
                            <TextField sx={style.textField} name="firstName" variant="outlined" label="First Name" value={clientData.firstName} onChange={(e) => setClientData({ ...clientData, firstName: e.target.value })} required={true} />
                            <TextField sx={style.textField} name="lastName" variant="outlined" label="Last Name" value={clientData.lastName} onChange={(e) => setClientData({ ...clientData, lastName: e.target.value })} required={true} />
                            <TextField sx={style.textField} name="email" variant="outlined" label="Email Address" value={clientData.email} onChange={(e) => setClientData({ ...clientData, email: e.target.value })} required={false} />
                            <TextField sx={style.textField} name="address" variant="outlined" label="Address" value={clientData.address} onChange={(e) => setClientData({ ...clientData, address: e.target.value })} required={true} />
                            <TextField sx={style.textField} name="phoneNumber" variant="outlined" label="Phone Number" value={clientData.phoneNumber} onChange={(e) => setClientData({ ...clientData, phoneNumber: e.target.value })} required={true} />
                            <FormControl sx={{ m: 1, minWidth: 260 }}>
                                <InputLabel id="demo-simple-select-label">Last Package</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={clientData.lastPackage}
                                    label="Last Package"
                                    onChange={(e) => {
                                        setClientData({ ...clientData, lastPackage: e.target.value })
                                    }}
                                >
                                    <MenuItem value={"Starter"}>Starter</MenuItem>
                                    <MenuItem value={"Vacation"}>Vacation</MenuItem>
                                    <MenuItem value={"Camping"}>Camping</MenuItem>
                                    <MenuItem value={"Trip"}>Trip</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl sx={{ m: 1, minWidth: 260 }}>
                                <InputLabel id="demo-simple-select-label">Group</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={clientData.group}
                                    label="Group"
                                    onChange={(e) => {
                                        setClientData({ ...clientData, group: e.target.value })
                                    }}
                                >
                                    <MenuItem value={"Bronze"}>Bronze</MenuItem>
                                    <MenuItem value={"Silver"}>Silver</MenuItem>
                                    <MenuItem value={"Gold"}>Gold</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box>
                            <Button
                                sx={{
                                    marginBottom: "8px",
                                    marginTop: "8px",
                                    marginRight: 2,
                                    textTransform: "none",
                                }}
                                variant="contained"
                                onClick={handleSubmit}
                                color="primary" size="large"
                                type="submit" > {currentId === null| undefined ? "Add Client" : "Update Client"}</Button>
                            <Button variant="text" color="primary" size="large" sx={{ textTransform: "none" }} onClick={close} >Close</Button>
                        </Box>
                    </form>
                </Paper>
            </Container>
        </>

    )
}

export default RegForm