import React from 'react';
import { Box, Typography, Container, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

function Personal({ client }) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const Wider = styled('div')(() => ({
        display: "flex",
        justifyContent:"space-between",
        paddingTop: "0.75rem ",
        paddingdown: "0.75rem ",
        color: "#000000",
    }));
    const Spanlabel = styled('span')(() => ({
        // display:" inline-flex",
        letterSpacing: "-0.01em",
        width: "120px",
        flexShrink: 0,
        color: "#00000",
        textAlign: "left",
        paddingLeft:"8px"

    }));
    const Spanvalue = styled('span')(() => ({
        textAlign: "left",
        fontWeight: 500,
        width: "100%",
        paddingLeft:isSmallScreen ? 2: "48px"

    }));
    const SubTitle = styled(Typography)(({ theme }) => ({
        fontSize: ".7rem",
        lineHeight: 1.2,
        letterSpacing: "0.2em",
        color: "#000000",
        textTransform: "uppercase",
        fontWeight: 700,
        marginTop: "16px",
        textAlign: "left",
        paddingLeft:"8px"
    }));

    return (
        <div style={{  minWidth: isSmallScreen ? "auto" : "960px",}} >
            <Typography align="center"
                sx={{
                    marginBottom: "0.5rem",
                    fontFamily: "Roboto",
                    fontWeight: 700,
                    lineHeight: 1.1,
                    color: "#364a63",
                    pt: "1.5em"
                }}
            >Personal Information</Typography>
            <Typography align="center" variant="subtitle1">Basic info, like name and address etc that used on platform.</Typography>
            <Box
                sx={{
                    display: isSmallScreen ? "block" : 'flex',
                    marginTop: 3,
                    flexWrap: "wrap",
                    // maxWidth: isSmallScreen ? "auto" : "1060px",
                }}
            >
                <Box sx={{
                    width: isSmallScreen ? "auto" : "50%",
                }}>
                    <SubTitle >BASIC INFORMATION</SubTitle>
                    <Wider>
                        <Spanlabel>Username</Spanlabel>
                        <Spanvalue> Aby003</Spanvalue>
                    </Wider>
                    <Wider>
                        <Spanlabel>Email Address</Spanlabel>
                        <Spanvalue> {client.email}</Spanvalue>
                    </Wider>
                    <Wider>
                        <Spanlabel>Full Name</Spanlabel>
                        <Spanvalue>{`${client.firstName} ${client.lastName}`} </Spanvalue>
                    </Wider>
                    <Wider>
                        <Spanlabel>Display Name</Spanlabel>
                        <Spanvalue> {`${client.firstName}`}</Spanvalue>
                    </Wider>
                    <Wider>
                        <Spanlabel>Mobile Number</Spanlabel>
                        <Spanvalue> {client.phoneNumber}</Spanvalue>
                    </Wider>
                    <Wider>
                        <Spanlabel>Gender</Spanlabel>
                        <Spanvalue> Not updated yet </Spanvalue>
                    </Wider>
                </Box>
                <Box sx={{
                    width: isSmallScreen ? "auto" : "50%",
                    padding: isSmallScreen ? "auto" : " 0 3.25rem"
                }}>
                    <SubTitle >RESIDENTIAL INFORMATION</SubTitle>
                    <Wider>
                        <Spanlabel>Address Line</Spanlabel>
                        <Spanvalue>{client.address}</Spanvalue>
                    </Wider>
                    <Wider>
                        <Spanlabel>City</Spanlabel>
                        <Spanvalue>  {client.address}</Spanvalue>
                    </Wider>
                    <Wider>
                        <Spanlabel>State / Province</Spanlabel>
                        <Spanvalue>  Not updated yet</Spanvalue>
                    </Wider>
                    <Wider>
                        <Spanlabel>Zip / Postal Code</Spanlabel>
                        <Spanvalue>  Not updated yet</Spanvalue>
                    </Wider>
                    <Wider>
                        <Spanlabel>Country</Spanlabel>
                        <Spanvalue>  Not updated yet</Spanvalue>
                    </Wider>
                </Box>


            </Box>
            <Box sx={
                {
                    width: !isSmallScreen ? "50%" : "100%",
                    marginTop: 4

                }}>
                <SubTitle >ADDITIONAL INFORMATION</SubTitle>
                <Wider>
                    <Spanlabel>Join Date</Spanlabel>
                    <Spanvalue> May 20, 2021</Spanvalue>
                </Wider>
                <Wider>
                    <Spanlabel>Email Verified At</Spanlabel>
                    <Spanvalue>  May 20, 2021 04:53 AM</Spanvalue>
                </Wider>
                <Wider>
                    <Spanlabel>Email Unusal Activities</Spanlabel>
                    <Spanvalue>  Enabled</Spanvalue>
                </Wider>
                <Wider>
                    <Spanlabel>Reg Method</Spanlabel>
                    <Spanvalue>  By Email</Spanvalue>
                </Wider>
                <Wider>
                    <Spanlabel>Save Activity Logs</Spanlabel>
                    <Spanvalue>  Enabled</Spanvalue>
                </Wider>
            </Box>
        </div>
    )
}

export default Personal