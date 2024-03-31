import React from 'react'
import {
    Typography,
    Box,
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    IconButton,
    Divider,
    Grid,
    Stack,
    Avatar
} from '@mui/material';
import { Link } from 'react-router-dom';
import displayPhoto from "../../../Images/display-photo.jpg";

const detailSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
};
function VendorGeneralInfo(props) {
    const { name, email, address, serviceType,
        paymentMethod, contractTerms, notes, paymentDetails,
        phoneNumber } = props.vendor

    return (
        <Box sx={{ py: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Stack>
                        <Paper elevation={3} sx={{ padding: 3 }}>

                            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
                                <Avatar src={displayPhoto} alt="Display Photo" sx={{ width: 56, height: 56 }} />
                                <Typography variant="subtitle2" sx={{ marginLeft: 2 }}>
                                    <span style={{ color: "#068DA9" }}>Name:  </span> {name}
                                </Typography>

                            </Box>
                            <Divider sx={{ marginY: 2 }} />
                            <Box>
                                <Typography variant="h6">Contact Details</Typography>
                            </Box>
                            <Divider sx={{ marginY: 2 }} />

                            <Box sx={detailSectionStyle}>
                                <Typography variant="subtitle2" gutterBottom sx={{ color: "#068DA9" }} >
                                    Email:
                                </Typography>
                                <Typography variant="body1">{email}</Typography>
                            </Box>
                            <Divider sx={{ marginY: 2 }} />

                            <Box sx={detailSectionStyle}>
                                <Typography variant="subtitle2" gutterBottom sx={{ color: "#068DA9" }} >
                                    Phone:
                                </Typography>
                                <Typography variant="body1">{phoneNumber}</Typography>
                            </Box>
                            <Divider sx={{ marginY: 2 }} />

                            <Box sx={detailSectionStyle}>
                                <Typography variant="subtitle2" gutterBottom sx={{ color: "#068DA9" }} >
                                    Country:
                                </Typography>
                                <Typography variant="body1">Kenya</Typography>
                            </Box>
                            <Divider sx={{ marginY: 2 }} />
                            <Stack>
                                <Typography align='left' variant="subtitle2" gutterBottom sx={{ color: "#068DA9" }} >
                                    Address:
                                </Typography>
                                <Stack direction="row" spacing={2}>
                                    <Typography variant="body1">{`street: ${address.street}`}</Typography>
                                    <Typography variant="body1">{`City: ${address.city}`}</Typography>
                                    <Typography variant="body1">{`State: ${address.state}`}</Typography>
                                </Stack>
                            </Stack>

                            <Divider sx={{ marginY: 2 }} />

                        </Paper>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Stack>
                        <Paper elevation={3} sx={{ padding: 3 }}>
                            <Typography variant="h6">Additional Information</Typography>
                            <Divider sx={{ marginY: 2 }} />

                            <Box sx={detailSectionStyle}>
                                <Typography variant="subtitle2" gutterBottom sx={{ color: "#068DA9" }} >
                                    Service Type:
                                </Typography>
                                <Typography variant="body1">{serviceType}</Typography>
                            </Box>
                            <Divider sx={{ marginY: 2 }} />

                            <Box sx={detailSectionStyle}>
                                <Typography variant="subtitle2" gutterBottom sx={{ color: "#068DA9" }} >
                                    Payment Method:
                                </Typography>
                                <Typography variant="body1">{paymentMethod}</Typography>
                            </Box>
                            <Divider sx={{ marginY: 2 }} />
                            <Box sx={detailSectionStyle}>
                                <Typography variant="subtitle2" gutterBottom sx={{ color: "#068DA9" }} >
                                    Contract Terms:
                                </Typography>
                                <Typography variant="body1">{contractTerms}</Typography>
                            </Box>
                            <Divider sx={{ marginY: 2 }} />
                            <Box sx={detailSectionStyle}>
                                <Typography variant="subtitle2" gutterBottom sx={{ color: "#068DA9" }} >
                                    Payment Details:
                                </Typography>
                                <Typography variant="body1">{paymentDetails}</Typography>
                            </Box>
                            <Divider sx={{ marginY: 2 }} />
                            <Box sx={detailSectionStyle}>
                                <Typography variant="subtitle2" gutterBottom sx={{ color: "#068DA9" }} >
                                    Notes:
                                </Typography>
                                <Typography variant="body1">{notes}</Typography>
                            </Box>
                            <Divider sx={{ marginY: 2 }} />

                        </Paper>
                    </Stack>
                </Grid>
            </Grid>
            {/* <IconButton component={Link} to={`/overview/finances/vendor`}>
                <ArrowBackIcon />
                Back to Vendor List
            </IconButton> */}
        </Box>
    )
}

export default VendorGeneralInfo
