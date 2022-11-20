import React from 'react';
import { Card, Paper, Grid, Container, Box, useMediaQuery, useTheme } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import {Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Moving, ArrowForward } from '@mui/icons-material';

function Widget() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Container maxWidth="lg" sx={{ ml: "-20px", }}>
            <Grid container spacing={{ xs: 2, md: 3, lg: 2 }} >
                <Grid item xs={6} md={6} lg={3}  >
                    <Paper elevation={3} sx={{ borderRadius: "15px", textTransform: "none" }}>
                        <Card
                            sx={{
                                minWidth: isSmallScreen ? "auto" : 265,
                                borderRadius: "15px"
                            }}>
                            <CardContent >
                                <Grid container spacing={1}
                                    sx={{ textAlign: "start", marginTop: "-21px" }} >
                                    <Grid item>
                                        <Typography gutterBottom variant="h6"  >
                                            Active Clients
                                        </Typography>
                                    </Grid>
                                    <Grid item >
                                        <Box sx={{ backgroundColor: "#C1F4C5", borderRadius: "10px" }}>
                                            <Typography sx={{ p: 0.2 }} color="#0E185F" >
                                                <Moving /> 3.8%
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <Typography variant="h4" color="black" align="left" >676</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Link to="/clients">
                                            <Button sx={{ marginTop: "8px",textTransform: "none"}}>See Details <ArrowForward /></Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={6} lg={3}  >
                    <Paper elevation={3} sx={{ borderRadius: "15px" }}>
                        <Card
                            sx={{
                                minWidth: isSmallScreen ? "auto" : 265,
                                // backgroundColor: "#7A0BC0",
                                borderRadius: "15px"
                            }}>
                            <CardContent >
                                <Grid container spacing={1}
                                    sx={{ textAlign: "start",marginTop: "-21px"  }} >
                                    <Grid item>
                                        <Typography gutterBottom variant="h6"  >
                                            Complete Tours
                                        </Typography>
                                    </Grid>
                                    <Grid item >
                                        <Box sx={{ backgroundColor: "#C1F4C5", borderRadius: "10px" }}>
                                            <Typography sx={{ p: 0.2 }} color="#0E185F" >
                                                <Moving /> 1.3%
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <Typography variant="h4" color="black" align="left" >32</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Link to="/tours">
                                            <Button sx={{ marginTop: "8px",textTransform: "none" }}>See Details <ArrowForward /></Button>
                                        </Link>                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={6} lg={3}  >
                    <Paper elevation={3} sx={{ borderRadius: "15px" }}>
                        <Card
                            sx={{
                                minWidth: isSmallScreen ? "auto" : 265,
                                // backgroundColor: "#7A0BC0",
                                borderRadius: "15px"
                            }}>
                            <CardContent >
                                <Grid container spacing={2}
                                    sx={{ textAlign: "start",marginTop: "-30px"  }} >
                                    <Grid item>
                                        <Typography gutterBottom variant="h6"  >
                                            Total  Revenue
                                        </Typography>
                                    </Grid>
                                    <Grid item >
                                        <Box sx={{ backgroundColor: "#C1F4C5", borderRadius: "10px" }}>
                                            <Typography sx={{ p: 0.2 }} color="#0E185F" >
                                                <Moving /> 54.1%
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <Typography variant="h5" color="black" align="left" >675677</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Link to="/revenue">
                                            <Button sx={{ marginTop: "8px",textTransform: "none" }}>See Details <ArrowForward /></Button>
                                        </Link>                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={6} lg={3}  >
                    <Paper elevation={3} sx={{ borderRadius: "15px" }}>
                        <Card
                            sx={{
                                minWidth: isSmallScreen ? "auto" : 265,
                                // backgroundColor: "#7A0BC0",
                                borderRadius: "15px"
                            }}>
                            <CardContent >
                                <Grid container spacing={2}
                                    sx={{ textAlign: "start", marginTop: "-30px"  }} >
                                    <Grid item>
                                        <Typography gutterBottom variant="h6"  >
                                            Total Bookings
                                        </Typography>
                                    </Grid>
                                    <Grid item >
                                        <Box sx={{ backgroundColor: "#C1F4C5", borderRadius: "10px" }}>
                                            <Typography sx={{ p: 0.2 }} color="#0E185F" >
                                                <Moving /> 3.8%
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <Typography variant="h4" color="black" align="left" >56</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Link to="/Bookings">
                                            <Button sx={{ marginTop: "8px",textTransform: "none" }}>See Details <ArrowForward /></Button>
                                        </Link>                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>

            </Grid >
        </Container >
    )
}

export default Widget