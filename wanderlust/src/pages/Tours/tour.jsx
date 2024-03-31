import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box, Avatar, Divider, IconButton, Grid } from "@mui/material";
import moment from 'moment';
import {useNavigate} from "react-router-dom"
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TourIcon from '@mui/icons-material/Tour';
import PeopleIcon from '@mui/icons-material/People';
function Tour({ tour, setTourId, tourId }) {
const navigate= useNavigate()
    const faces = [
        "http://i.pravatar.cc/300?img=1",
        "http://i.pravatar.cc/300?img=2",
        "http://i.pravatar.cc/300?img=3",
        "http://i.pravatar.cc/300?img=4"
    ];
    const viewMoreDetails = () => {
        return navigate(`/tours/${tour.id}`);

    }
    return (
        <Box>
            <Card sx={{
                maxWidth: 400,
                margin: "auto",
                transition: "0.3s",
                boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
                "&:hover": {
                    boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
                }
            }} >
                <CardMedia
                    image={"https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"} sx={{ paddingTop: "56.25%" }} />
                <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }} >{tour.name}</Typography>
                    <Typography variant="body2">{moment(tour.createdAt).fromNow()}</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 400, color: "#1A0000", fontStyle: "italic", fontFamily: "Lato", marginTop: 1 }} >{tour.summary}</Typography>
                    <Divider light sx={{ m: 1 }} />
                    <Grid container spacing={3}>
                        <Grid item >
                            <span style={{ display: "flex", marginBottom: "10px" }}><PlaceIcon /><Typography variant='caption' sx={{ marginLeft: 1 }}>{tour.name}</Typography></span>
                            <span style={{ display: "flex" }}><CalendarMonthIcon /><Typography variant='caption' sx={{ marginLeft: 1 }}> {moment(tour.startDate).format("Do MMM  YY")}</Typography></span>
                        </Grid>
                        <Grid item>
                            <span style={{ display: "flex", marginBottom: "10px" }}><TourIcon /><Typography variant='caption' sx={{ marginLeft: 1 }}>{tour.difficulty}</Typography></span>
                            <span style={{ display: "flex" }}><PeopleIcon /><Typography variant='caption' sx={{ marginLeft: 1 }}>{tour.imageCover}</Typography></span>

                        </Grid>
                    </Grid>
                    <Divider light sx={{ m: 1 }} />
                    {/* {faces.map(face => (
                        <Avatar sx={{
                            display: "inline-block",
                            border: "2px solid white",
                            "&:not(:first-of-type)": {
                                marginLeft: -1
                            }
                        }} key={face} src={face} />
                    ))} */}
                </CardContent>
                <CardActions >
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <Button size="small"
                        variant="contained"
                        color="primary"
                        sx={{ textTransform: "none" }}
                        onClick={viewMoreDetails }
                    >
                        More Details
                    </Button>
                    <Button size="small" color="success" variant="contained" sx={{ textTransform: "none" }} >
                        Book
                    </Button>
                </CardActions>

            </Card>
        </Box >
    )
}

export default Tour
