import React from 'react';
import { Box, Container, Divider, Grid, Paper, Typography } from '@mui/material';
import SyncAltIcon from '@mui/icons-material/SyncAlt';


function Transaction() {
    const isComplete = false;
    const titleStyle = {
        fontSize: "11px",
        letterSpacing: ".2em",
        lineHeight: 1.2,
        fontWeight: 700,
        textTransform: "uppercase",
        paddingTop: 1,
        paddingBottom: 1, 
        color: "#364a63"
    }
    const spanStyle = {
        fontSize: "13px",
        color: "000000",
        marginRight: "2rem"

    }
    const spanCaption = {
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: 1.5,
        letterSpacing: "-0.01em",
        textAlign: "center",
    }

    return (
        <Container maxWidth="sm"  >
            <Paper elevation={0} sx={{ margin: 0 }}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 2
                }}>
                    <Box sx={{ padding: "0.5rem", display: "flex", alignItems: "center" }}>
                        <SyncAltIcon fontSize="large"
                            sx={{

                                bgcolor: "#E8F9FD",
                                borderRadius: "25px",
                                color: "#66BFBF",
                                mr: 1
                            }}
                        />
                        <div >
                            <Typography variant="h5" >115.00 USD</Typography>
                            <span style={{
                                fontSize: "13px",
                                color: "#8094ae",
                            }}>Aug 12, 2022 09:00 AM</span>
                        </div>
                    </Box>
                    <Box sx={{
                        bgcolor: "#1ee0ac",
                        p: 1,
                        color: "#FFFFFF"
                    }}>
                        Completed
                    </Box>
                </Box>
                <Divider />
                <Box  >
                    <Grid container spacing={6}>
                        <Grid item lg={6}>
                            <Typography variant="h6"
                                sx={titleStyle}
                            > In Account</Typography>
                            <div style={{ display: 'inline' }}>
                                <span style={spanStyle}> Amount</span>
                                <span style={spanCaption}> 14500 ksh</span>
                            </div>
                            <div>
                                <span style={spanStyle}> User Account</span>
                                <span style={spanCaption}> 0001034Dt</span>
                            </div>
                            <div>
                                <span style={spanStyle}> Amount</span>
                                <span style={spanCaption}> 14500 ksh</span>
                            </div>
                        </Grid>
                        <Grid item lg={6}>
                            <Typography variant="h6"
                                sx={titleStyle}
                            > In Transaction</Typography>
                            <div>
                                <span style={spanStyle}> Amount</span>
                                <span style={spanCaption}> 14500 ksh</span>
                            </div>
                            <div>
                                <span style={spanStyle}> Amount</span>
                                <span style={spanCaption}> 14500 ksh</span>
                            </div>
                            <div>
                                <span style={spanStyle}> Amount</span>
                                <span style={spanCaption}> 14500 ksh</span>
                            </div>

                        </Grid>
                    </Grid>
                </Box>
                <Divider />
                <Box>
                    <Typography variant="h6"
                        sx={titleStyle}
                    > Booking Details</Typography>
                    <Grid container  spacing={1.5}>
                        <Grid item lg={6}>
                            <div>
                                <span style={spanStyle}> Order Date</span>
                                <span style={spanCaption}> 9/12/2022</span>
                            </div>
                            <div>
                                <span style={spanStyle}> Completed At</span>
                                <span style={spanCaption}> 9/12/2022</span>
                            </div>

                        </Grid>
                        <Grid item lg={6}>
                            <div>
                                <span style={spanStyle}> Placed By</span>
                                <span style={spanCaption}> John Doe</span>
                            </div>
                            <div>
                                <span style={spanStyle}> Approved By</span>
                                <span style={spanCaption}> Jane Smith</span>
                            </div>

                        </Grid>
                    </Grid>
                </Box>
                <Divider />
                <Box >
                    <Typography variant="h6"
                        sx={titleStyle}
                    > Additional Details</Typography>
                    <Grid container spacing={2}>
                        <Grid item lg={12}>
                            <div>
                                <span style={spanStyle}> Transaction Type</span>
                                <span style={spanCaption}> Mpesa Deposit</span>
                            </div>
                            <div>
                                <span style={spanStyle}> Payment Gateway</span>
                                <span style={spanCaption}>  Mpesa</span>
                            </div>
                            <div>
                                <span style={spanStyle}> Payment From</span>
                                <span style={spanCaption}> 07348789878989</span>
                            </div>
                            <div>
                                <span style={spanStyle}> Payment To</span>
                                <span style={spanCaption}> Bank Account </span>
                            </div>
                            <div>
                                <span style={spanStyle}> Updated Balance</span>
                                <span style={spanCaption}> 073487</span>
                            </div>
                        </Grid>

                    </Grid>
                </Box>
            </Paper>

        </Container >
    )
}

export default Transaction