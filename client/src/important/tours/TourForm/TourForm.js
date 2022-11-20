import React, { useState } from 'react';
import {
    Paper, Grid, Button, Typography, TextField, Container, MenuItem, Select, FormHelperText,
    InputLabel, Radio, RadioGroup, FormLabel, FormControl, FormControlLabel, Checkbox, FormGroup, Tooltip
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AddIcon from '@mui/icons-material/Add';
import { useSelector, useDispatch} from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import useStyles from "./styles";
import Popup from "./popup/popup";
import Client from "./clients/client";
import Input from "../../../components/input/input";
import ClientsTable from "./clients/ClientsTable";
import tourSchema from "./validation";
import {createTour} from "../../../Actions/tour";

function TourForm() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { clientList } = useSelector((state) => state.tourClient);

    const initialValues = {
        status: "Pending",
        tourName: "",
        cost: "",
        plannedDate: new Date(),
        targetGroup: "DayTrip",
        packageName: "",
        hotelName: "",
        cookchecked: false,
        photoGrapher: false,
        campingChairs: false,
        truck: false,
        tents: false,
        utensils: false,
        venue: "",
        coordinator: "",

    }
    const [openPopup, setOpenPopup] = useState(false);

    const handleOpenPopUp = () => {
        setOpenPopup(true);
    }

    return (

        <Container component="main" maxWidth="md" className={classes.container}>
            <Paper className={classes.paper} elevation={3}>
                <Typography className={classes.title} variant="h6" >Create a new Tour</Typography>
                <Formik
                    initialValues={initialValues}
                    validationSchema={tourSchema}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            const tourdata = {...values, clients: clientList}
                            dispatch(createTour(tourdata))
                            //  console.log("values :", tourdata);
                            actions.setSubmitting(false);
                            actions.resetForm({
                                values: initialValues
                            })

                        }, 3000);

                    }}

                >
                    {formik => {
                        const { values, setFieldValue, isSubmitting, errors, setValues } = formik;
                        console.log("errors : ", errors);
                        return (
                            <Form onSubmit={formik.handleSubmit} className={`${classes.root} ${classes.form}`} >
                                <Grid container spacing={4}>
                                    <Grid item md={6}>
                                        <Input name="tourName" label="Tour Name" handleChange={formik.handleChange} />
                                        <ErrorMessage className={classes.validationErrors} component="span" name="tourName" />
                                        <Input name="cost" label="Cost" handleChange={formik.handleChange} />
                                        <ErrorMessage className={classes.validationErrors} component="span" name="cost" />

                                        <FormControl fullWidth>
                                            <FormLabel id="demo-controlled-radio-buttons-group">Status</FormLabel>
                                            <RadioGroup
                                                className={classes.status}
                                                row
                                                aria-labelledby="demo-controlled-radio-buttons-group"
                                                name="status"
                                                value={values.status}
                                                onChange={(event) => setFieldValue("status", event.target.value)}
                                            >
                                                <FormControlLabel value="Pending" control={<Radio />} label="Pending" />
                                                <FormControlLabel value="Successful" control={<Radio />} label="Successful" />
                                                <FormControlLabel value="Unsuccessful" control={<Radio />} label="Unsuccessful" />
                                            </RadioGroup>
                                        </FormControl>
                                        <FormControl fullWidth>
                                            <FormLabel id="demo-controlled-radio-buttons-group">Planned Date</FormLabel>
                                            <DatePicker className={classes.datePicker} selected={values.plannedDate} onChange={(date) => setFieldValue("plannedDate", date)} variant="contained" />

                                        </FormControl >
                                        <Typography className={classes.subTitle1} variant="h6">Tour Essentials</Typography>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox
                                                    color="success"
                                                    name="truck"
                                                    checked={values.truck}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                    onChange={(event) => setFieldValue("truck", event.target.checked)}
                                                />}
                                                label="Truck"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox
                                                    color="success"
                                                    checked={values.utensils}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                    onChange={(event) => setFieldValue("utensils", event.target.checked)} />}
                                                label="Utensils"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox
                                                    color="success"
                                                    checked={values.campingChairs}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                    onChange={(event) => setFieldValue("campingChairs", event.target.checked)} />}
                                                label="Camping Chairs"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox
                                                    color="success"
                                                    checked={values.tents}
                                                    inputProps={{ 'aria-label': 'controlled' }}
                                                    onChange={(event) => setFieldValue("tents", event.target.checked)} />}

                                                label="Tents"
                                            />
                                        </FormGroup>
                                    </Grid>
                                    <Grid item md={6}>

                                        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                                            <InputLabel id="demo-simple-select-filled-label">Tour Type</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-filled-label"
                                                id="demo-simple-select-filled"
                                                value={values.targetGroup}
                                                onChange={event => setFieldValue("targetGroup", event.target.value)}
                                            >

                                                <MenuItem value={"DayTrip"}>Day /Camping Trip</MenuItem>
                                                <MenuItem value={"Corporates"}>Corporates</MenuItem>
                                                <MenuItem value={"Packages"}>Packages</MenuItem>
                                            </Select>
                                            <FormHelperText>Please select</FormHelperText>
                                        </FormControl>
                                        {(
                                            () => {
                                                if (values.targetGroup === "Corporates") {
                                                    return (
                                                        <div className={classes.tourType}>
                                                            <Grid item className={classes.addClient}>
                                                                <Tooltip title="Add client">
                                                                    <Button variant="contained" color="primary" onClick={handleOpenPopUp} >
                                                                        <AddIcon />
                                                                        Add Client
                                                                    </Button>
                                                                </Tooltip>
                                                            </Grid>
                                                            {clientList.length === 0 ? null : <ClientsTable />}
                                                            <Input name="venue" label="Venue" handleChange={formik.getFieldHelpershandleChange} />
                                                            <ErrorMessage className={classes.validationErrors} component="span" name="venue" />

                                                            <Input name="coordinator" label="coordinator" handleChange={formik.handleChange} />
                                                            <ErrorMessage className={classes.validationErrors} component="span" name="coordinator" />
                                                        </div>
                                                    )
                                                } else if (values.targetGroup === "DayTrip") {
                                                    return (
                                                        <div className={classes.tourType}>
                                                            <Grid item className={classes.addClient}>
                                                                <Tooltip title="Add client">
                                                                    <Button variant="contained" color="primary" onClick={handleOpenPopUp} >
                                                                        <AddIcon />
                                                                        Add Client
                                                                    </Button>
                                                                </Tooltip>
                                                            </Grid>
                                                            {clientList.length === 0 ? null : <ClientsTable />}
                                                            <Input name="coordinator" label="Coordinator" handleChange={formik.handleChange} />
                                                            <ErrorMessage className={classes.validationErrors} component="span" name="coordinator" />
                                                            <Typography className={classes.subTitle} variant="h6">Other day trip essentials</Typography>

                                                            <FormGroup>
                                                                <FormControlLabel
                                                                    control={<Checkbox
                                                                        color="success"
                                                                        checked={values.cookchecked}
                                                                        inputProps={{ 'aria-label': 'controlled' }}
                                                                        onChange={event => setFieldValue("cookchecked", event.target.checked)}
                                                                    />}
                                                                    label="Cook"
                                                                />
                                                            </FormGroup>
                                                            <FormGroup>
                                                                <FormControlLabel
                                                                    control={<Checkbox
                                                                        color="success"
                                                                        checked={values.photoGrapher}
                                                                        inputProps={{ 'aria-label': 'controlled' }}
                                                                        onChange={event => setFieldValue("photoGrapher", event.target.checked)}
                                                                    />}
                                                                    label="Photographer"
                                                                />
                                                            </FormGroup>                                            </div>
                                                    )
                                                } else if (values.targetGroup === "Packages") {
                                                    return (
                                                        <div className={classes.tourType}>
                                                            <Grid item className={classes.addClient}>
                                                                <Tooltip title="Add client">
                                                                    <Button variant="contained" color="primary" onClick={handleOpenPopUp} >
                                                                        <AddIcon />
                                                                        Add Client
                                                                    </Button>
                                                                </Tooltip>
                                                            </Grid>
                                                            {clientList.length === 0 ? null : <ClientsTable />}
                                                            <Input name="packageName" label="Package Name" handleChange={formik.handleChange} />
                                                            <ErrorMessage className={classes.validationErrors} component="span" name="packageName" />
                                                            <Input name="hotelName" label="Hotel Name" handleChange={formik.handleChange} />
                                                            <ErrorMessage className={classes.validationErrors} component="span" name="hotelName" />
                                                        </div>
                                                    )
                                                } else
                                                    return null
                                            }
                                        )()}
                                        <Grid container spacing={4} >
                                            <Grid item md={6}>
                                                <Button type="submit" variant="contained" size="medium" fullWidth disabled={isSubmitting} >{isSubmitting ? "Saving ..." : "Save"}</Button>
                                            </Grid>
                                            <Grid item md={6}>
                                                <Button variant="contained" color="inherit" size="medium" onClick={() => setValues({ ...initialValues })} fullWidth>Reset</Button>
                                            </Grid>
                                        </Grid>

                                    </Grid>


                                </Grid>

                            </Form>
                        )

                    }}


                </Formik>
            </Paper>
            <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} >
                <Client setOpenPopup={setOpenPopup} cost={initialValues.cost} openPopup={openPopup} />
            </Popup >

        </Container >

    )
}

export default TourForm