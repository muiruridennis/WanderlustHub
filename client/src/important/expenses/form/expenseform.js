import React, { useState, useEffect } from 'react';
import { Paper, TextField, Button, Typography, Grid } from '@mui/material';
import useStyles from './styles';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

const initialState = {
    name:"", 
    description:"", 
    cost: "", 
    date: new Date(),
    
}


function Expenseform() {
    const [selectedDate, handleDateChange] = useState(new Date());
    const [expensesData, setExpensesData] = useState(initialState)
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('data to submit', expensesData)
       
    };
    const clears = () => {
        setExpensesData(initialState);
    }
    return (
        <Paper className={classes.paper} elevation={10}>
            <form onSubmit={handleSubmit}>
                <Grid className={classes.grid}>
                <Typography className={classes.title}>Add Expenses</Typography>
                </Grid>
                <TextField className={classes.textField} name="name" variant="outlined" label="Name" fullWidth value={expensesData.name} onChange={(e) => setExpensesData({...expensesData, name : e.target.value })} />
                <TextField className={classes.textField} name="description" variant="outlined" label="Description" fullWidth value={expensesData.description} onChange={(e) => setExpensesData({...expensesData, description : e.target.value })} />
                <TextField className={classes.textField} name="cost" variant="outlined" label="Cost" fullWidth value={expensesData.cost} onChange={(e) => setExpensesData({...expensesData, cost : e.target.value })} />
                <p className={classes.label}>Date</p>
                <DatePicker className={classes.datePicker} selected={expensesData.date} onChange={(date) => setExpensesData({...expensesData, date})}  />
                <Button className={classes.buttonSubmit} type="submit"   variant="contained" color="primary" size="large">Save</Button>
                <Button type="clear" color="secondary" size="large" variant="contained" onClick={clears}>Clear</Button>
            </form>


        </Paper>
    )
}

export default Expenseform