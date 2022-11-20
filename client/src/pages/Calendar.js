import React, { useState } from 'react';
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import Popup from "../Components/Popup"
import { Button, Tooltip, Paper, TextField, Grid, Typography, Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});
const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2022, 9, 22),
        end: new Date(2022, 9, 24),
    },
    {
        title: "Vacation",
        start: new Date(2022, 10, 7),
        end: new Date(2022, 10, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    },
];


function CalendarApp() {
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);
    const [openPopup, setOpenPopup] = useState(false);

    const handleAddEvent = () => {
        setAllEvents([...allEvents, newEvent]);
        setOpenPopup(false);
    }

    return (
        <Container maxWidth="lg" >
            <Typography variant="h5">Calendar</Typography>
            <Tooltip title="Add client">
                <Button onClick={() => setOpenPopup(true)}>
                    <AddIcon />
                    Add New Event
                </Button>
            </Tooltip>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
            <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} title="Create a new Event" >
                <Paper style={{ m: 1, height: "320px" }} elevation={0}>
                    <TextField sx={{ ml: 1 }} label="Add Title" margin="dense" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
                    {/* <label style={styling.label}>Start Date</label> */}
                    <Grid container spacing={1} >
                        <Grid item>
                            <DatePicker placeholderText="Start Date" selected={newEvent.start}
                                onChange={(start) =>
                                    setNewEvent({ ...newEvent, start })
                                }
                            />
                        </Grid>
                        <Grid item>
                            <DatePicker placeholderText="End Date" selected={newEvent.end}
                                onChange={(end) => {
                                    setNewEvent({ ...newEvent, end })
                                }} />
                        </Grid>
                    </Grid>
                    <Button
                        variant="contained"
                        sx={{ position: "absolute", right: 6, mt: 2, bottom: 2 }}
                        onClick={handleAddEvent}
                    >
                        Add Event
                    </Button>
                </Paper>
            </Popup>
        </Container >
    )
}

export default CalendarApp