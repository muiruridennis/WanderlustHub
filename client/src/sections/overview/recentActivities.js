import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Typography, Divider, Box, Button, Paper } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const recentActivitiesData = [
    {
        id: 1,
        icon: <AccessTimeIcon />,
        text: 'User John Doe booked the "Maasai Mara Adventure Tour"',
        time: '2 hours ago',
    },
    {
        id: 2,
        icon: <AccountCircleIcon />,
        text: 'User Jane Smith updated her profile information',
        time: '4 hours ago',
    },
    {
        id: 3,
        icon: <PaymentIcon />,
        text: 'New booking received for the "Island Paradise Getaway"',
        time: '1 day ago',
     },
    {
        id: 4,
        icon: <LocalOfferIcon />,
        text: 'Discount offer applied to the "Amazing Adventure Tour"',
        time: '2 days ago',
    },
];

function RecentActivities() {
    return (
        <Box>
            <Paper  sx={{paddingLeft:1}} elevation={3}>
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    Recent Activities
                </Typography>
                <List>
                    {recentActivitiesData.map((activity) => (
                        <React.Fragment key={activity.id}>
                            <ListItem disablePadding>
                                <ListItemIcon >{activity.icon}</ListItemIcon>
                                <ListItemText primary={activity.text} secondary={activity.time} />
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    ))}
                </List>
                <Button>See all Recent Activities <ArrowRightAltIcon /> </Button>
            </Paper>
        </Box>
    );
}

export default RecentActivities;
