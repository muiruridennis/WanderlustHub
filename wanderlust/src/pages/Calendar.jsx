import React, { useState } from 'react';
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import { isBefore, parseISO, formatISO, isSameDay } from 'date-fns';
import startOfWeek from "date-fns/startOfWeek";
import enUSLocale from 'date-fns/locale/en-US'
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { LocalizationProvider, MobileDateTimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { Button, Tooltip, Paper, Grid, Typography, Container, Stack, Switch, FormControlLabel, IconButton } from '@mui/material';
import Popup from "../Components/Popup"
import Input from "../Components/TextFieldInput"
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import CircularProgress from "../Components/CircularProgress"
import { useCreateCustomEventMutation, useDeleteCustomEventMutation, useGetAllCustomEventsQuery, useUpdateCustomEventMutation } from "../api/customEventsApi";

const locales = {
    "en-US": enUSLocale,
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});


const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    startDate: Yup.date(),
    endDate: Yup.date(),
    description: Yup.string(),
});

function CalendarApp() {
    const [openPopup, setOpenPopup] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [error, setError] = React.useState(null);
    const { data: customEvents, isLoading } = useGetAllCustomEventsQuery();
    const [deleteCustomEvent, { isError: deletingError, isSuccess: deletingSuccess, }] = useDeleteCustomEventMutation();
    const [updateCustomEvent, { isError: updateError, isSuccess: updatingSucess }] = useUpdateCustomEventMutation();
    const [createCustomEvent, { isSuccess: createSuccess, isError: createError }] = useCreateCustomEventMutation();

    const handleEventClick = (event) => {
        setSelectedEvent({
            ...event,
            startDate: new Date(event.startDate),
            endDate: new Date(event.endDate)
        });
        setOpenPopup(true);
    };

    const close = () => {
        setOpenPopup(false);
        setSelectedEvent(null);
    }
    const initialValues = selectedEvent || {
        title: "",
        startDate: new Date(),
        endDate: new Date(),
        description: "",
        allDay: false,
    };

    const handleAddEvent = (values) => {
        createCustomEvent(values);
        setOpenPopup(false);
        setSelectedEvent(null)
    };

    const handleUpdateEvent = ( values) => {

        const formattedValues = {
            ...values,
            startDate: formatISO(values.startDate),
            endDate: formatISO(values.endDate)
        };
        updateCustomEvent( formattedValues);
        setOpenPopup(false);
        setSelectedEvent(null);
    };

    const handleDeleteEvent = (id) => {
        deleteCustomEvent(id)
        setSelectedEvent(null)
        setOpenPopup(false);
    };
    if (isLoading) {
        return <CircularProgress />
    }
    // if (updateError || deletingError || createError) {
    //     toast.error("an error occurred while performing the operation")
    // }
    // if (updatingSucess || deletingSuccess || createSuccess) {
    //     toast.success(" operation completed successfully")
    // }
    // Parse startDate and endDate strings to Date objects
    const parsedEvents = customEvents.map(event => ({
        ...event,
        startDate: parseISO(event.startDate),
        endDate: parseISO(event.endDate)
    }));

    return (
        <Container maxWidth="xl" >
            <Typography variant="h5">Calendar</Typography>
            <Grid container justifyContent="flex-end" alignItems="center" spacing={2} marginRight={4}>
                <Grid item>
                    <Tooltip title="Add New Event">
                        <Button
                            variant='contained'
                            onClick={() => setOpenPopup(true)}
                            color="success"
                            size='large'
                        >
                            <AddIcon />
                            New Event
                        </Button>
                    </Tooltip>
                </Grid>
            </Grid>
            <Calendar
                localizer={localizer}
                events={parsedEvents}
                startAccessor="startDate"
                endAccessor="endDate"
                style={{ height: 500, margin: "50px" }}
                onSelectEvent={(event) => handleEventClick(event)}

            />
            <Popup
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                close={close}
                title="Add Event"
            >
                <Paper sx={{ maxWidth: 400, margin: 'auto', padding: '16px' }} elevation={0}>
                    <Formik
                        initialValues={initialValues}
                        enableReinitialize={true} // Enable reinitialization

                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            selectedEvent ? handleUpdateEvent(values) : handleAddEvent(values);
                        }}

                    >
                        {formik => (

                            < form
                                onSubmit={formik.handleSubmit}
                                noValidate
                            >
                                <Grid container spacing={2}>
                                    <Input
                                        name="title"
                                        label=" Title"
                                        type="text"
                                        multiline
                                        value={formik.values.title}
                                        handleChange={formik.handleChange}
                                        fullWidth
                                        required
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.title && Boolean(formik.errors.title)}
                                        helperText={formik.touched.title && formik.errors.title}
                                    />
                                    <Input
                                        name="description"
                                        label=" Description"
                                        type="text"
                                        multiline
                                        value={formik.values.description}
                                        handleChange={formik.handleChange}
                                        fullWidth
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.description && Boolean(formik.errors.description)}
                                        helperText={formik.touched.description && formik.errors.description}
                                    />
                                    <Grid item xs={12} lg={12}>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    name="allDay"
                                                    color="success"
                                                    checked={formik.values.allDay}
                                                    onChange={formik.handleChange}
                                                />
                                            }
                                            label="All Day"
                                        />
                                    </Grid>
                                    <Grid item xs={12} lg={12}>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <MobileDateTimePicker
                                                label="Start Date"
                                                value={formik.values.startDate}
                                                onChange={(newValue) => {
                                                    formik.setFieldValue('startDate', newValue);
                                                }}
                                                sx={{
                                                    width: '100%',
                                                    marginBottom: 2,

                                                }}
                                            />
                                        
                                            <MobileDateTimePicker
                                                label="End Date"
                                                value={formik.values.endDate}
                                                shouldDisableDate={(date) => isBefore(date, formik.values.startDate)}
                                                onChange={(newValue) => {
                                                    formik.setFieldValue('endDate', newValue);
                                                }}
                                                onError={(error) => {
                                                    // Handle error and set error state
                                                    if (error === 'shouldDisableDate') {
                                                        setError('End date should not be before start date');
                                                    }
                                                }}
                                                sx={{
                                                    width: '100%',
                                                }}
                                            />
                                            {formik.touched.endDate && formik.errors.endDate && (
                                                <div className="error">{formik.errors.endDate}</div>
                                            )}
                                        </LocalizationProvider>
                                    </Grid>

                                    <Grid item xs={12} lg={12}>
                                        <Stack direction="row" spacing={3}>

                                            {selectedEvent &&
                                                < IconButton
                                                    onClick={() => handleDeleteEvent(selectedEvent.id)}
                                                >
                                                    <DeleteIcon color='error' />
                                                </IconButton>
                                            }

                                            <Button
                                                fullWidth
                                                variant="text"
                                                color='inherit'
                                                onClick={close}
                                            >
                                                Cancel
                                            </Button>
                                            <Button
                                                type='submit'
                                                fullWidth
                                                variant="contained"
                                            >
                                                {!selectedEvent ? "Add" : "Update"}
                                            </Button>
                                        </Stack>
                                    </Grid>
                                </Grid>


                            </form>
                        )}
                    </Formik>
                </Paper>
            </Popup>
        </Container >
    )
}

export default CalendarApp

