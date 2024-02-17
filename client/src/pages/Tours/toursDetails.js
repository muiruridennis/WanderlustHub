import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getTour } from '../../store/actions/tour';
import Circularprogress from "../../Components/CircularProgress"
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import TourImage from "../../Images/tour-2-1.jpg";
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MovingIcon from '@mui/icons-material/Moving';
import PeopleIcon from '@mui/icons-material/People';
import StarRateIcon from '@mui/icons-material/StarRate';
import moment from 'moment';


function ToursDetails() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { tourId } = useParams();
    const navigate= useNavigate();
    const dispatch = useDispatch();
    const { tour, isLoading, error } = useSelector((state) => state.tours);

    console.log(tour, isLoading, error)

    useEffect(() => {
        dispatch(getTour(tourId));

    }, [tourId, dispatch]);
    const handleBooking= ()=>{
        return navigate(`/tours/checkout/${tour.id}`);
    }

    if (!tour && !isLoading) return "No Tours Found"

    return (
        isLoading ? <Circularprogress /> : (
            <div >
                <div style={{ position: "relative" }}>
                    <img src={TourImage}
                        style={{
                            width: "100%",
                            height: 700,
                            // opacity: 0.3
                        }}
                        alt="Cinque Terre" />
                    <div style={{
                        position: "absolute",
                        bottom: "20%",
                        right: "35%",
                    }}>
                        <Typography variant="h5" sx={{ color: "#3E54AC", fontWeight: "bold" }} >{tour.name}</Typography>
                    </div>
                </div >
                {/* <Box> */}
                <Grid container spacing={2} sx={{ marginLeft: 3, marginTop: 3 }}>
                    <Grid item xs={4} >
                        <Typography variant='h6' sx={{ color: "#10A19D" }}>Quick facts</Typography>
                        <span style={{ display: "flex", marginBottom: 3, }}><MovingIcon /><Typography variant='caption' sx={{ marginLeft: 3 }}>{`DIFFICULTY ${tour.difficulty.charAt(0).toUpperCase()}${tour.difficulty.slice(1)}`}</Typography></span>
                        <span style={{ display: "flex", marginBottom: 3 }}><CalendarMonthIcon /> <Typography variant='caption' sx={{ marginLeft: 3 }}> {`Next Date  ${moment(tour.startDate).format("Do MMM  YY")}`}</Typography></span>
                        <span style={{ display: "flex", marginBottom: 3 }}><StarRateIcon /> <Typography variant='caption' sx={{ marginLeft: 3 }}> RATING  4/5</Typography></span>

                        <Box>Your Tour Guides</Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography align='center' variant='h6' sx={{ color: "#10A19D" }}>{`ABOUT THE ${tour.name.toUpperCase()} `} </Typography>
                        <Typography variant='subtitle1'>{tour.summary}</Typography>
                        <Typography variant='caption'>{tour.etinerary}</Typography>
                    </Grid>
                </Grid>
                <Container maxWidth="md" sx={{ marginTop: 3, marginBottom: 3 }}>
                    <Paper elevation={3} sx={{ padding: 5 }} >
                        <Grid container spacing={6}  >
                            <Grid item xs={6}>
                                <Typography variant='h6' sx={{ color: "#10A19D" }}>What are you waiting for?</Typography>
                                <Typography variant='subtitle1' >Infinite memories. Make it yours today!</Typography>
                            </Grid>
                            <Grid item xs={6} sx={{ marginTop: 2 }}>
                                <Button
                                onClick={ handleBooking}
                                    variant='contained' color='success' 
                                    sx={{ borderRadius: "10rem", padding: "8px" }}
                                >
                                    {!isLoggedIn ? "Login To Book Tour" : "Make it Yours"}
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>

            </div>
        )
    )
}

export default ToursDetails
