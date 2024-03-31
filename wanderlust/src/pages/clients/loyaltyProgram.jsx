import React from 'react';
import {
  Typography, Box, Button, Paper, Grid, Stack,
  Table, TableHead, TableBody, TableRow,
  TableCell, List, ListItem, Divider,
  ListItemText, TableContainer
}
  from '@mui/material';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import { green, amber, grey } from '@mui/material/colors';
import StarIcon from '@mui/icons-material/Star';
import ListItemIcon from '@mui/material/ListItemIcon';


const LoyaltyBenefits = ({ loyaltyStatus }) => {
  const getBenefits = () => {
    let benefits = [];

    switch (loyaltyStatus) {
      case 'Gold':
        benefits = [
          'Access to exclusive offers and discounts',
          'Priority customer support',
          'Free upgrades',
        ];
        break;
      case 'Silver':
        benefits = [
          'Discounted rates on tours',
          'Bonus loyalty points',
          'Early access to promotions',
        ];
        break;
      case 'Bronze':
        benefits = [
          'Special rewards on your birthday',
          'Regular updates on new tours and destinations',
        ];
        break;
      default:
        benefits = ['No benefits available'];
        break;
    }

    return benefits;
  };

  const benefits = getBenefits();

  return (
    <Box>
      <Typography variant="h6" sx={{ marginTop: 3 }}>
        Loyalty Benefits
      </Typography>
      <List>
        {benefits.map((benefit, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary={benefit} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
const PointHistory = () => {
  // Assume these values are fetched from an API or stored in state
  const activities = [
    { date: '2023-05-20', description: 'Tour Booking', points: 100 },
    { date: '2023-05-18', description: 'Referral Bonus', points: 50 },
    { date: '2023-05-15', description: 'Redeemed Points', points: -200 },
  ];

  return (
    <Box sx={{ marginTop: 3 }}>
      <Typography variant="h6">Point History</Typography>
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Description</TableCell>
              <TableCell align="right">Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activities.map((activity, index) => (
              <TableRow key={index}>
                <TableCell>{activity.date}</TableCell>
                <TableCell>{activity.description}</TableCell>
                <TableCell align="right">
                  {activity.points > 0 ? `+${activity.points}` : activity.points}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
// Example personalized recommendations based on loyalty status
const getRecommendations = (loyaltyStatus) => {
  // Replace with your own recommendation logic based on loyalty status and preferences
  switch (loyaltyStatus) {
    case 'Gold':
      return ['Exotic Island Getaway', 'Luxury Cruise Tour', 'Adventure Safari'];
    case 'Silver':
      return ['Historical City Tour', 'Scenic Mountain Hike', 'Cultural Immersion Trip'];
    case 'Bronze':
      return ['Weekend City Escape', 'Nature Retreat', 'Local Food Tour'];
    default:
      return ['Recommended tours unavailable'];
  }
};

const PersonalizedRecommendations = ({ loyaltyStatus }) => {
  const recommendations = getRecommendations(loyaltyStatus);

  return (
    <Box>
      <Typography variant="h6" sx={{ marginTop: 3 }}>
        Personalized Recommendations
      </Typography>
      <ul>
        {recommendations.map((recommendation, index) => (
          <li key={index}>
            <Typography variant="body2">{recommendation}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
};
const reservations = [
  { id: 1, date: '2023-05-10', destination: 'Paris', tourType: 'City Tour' },
  { id: 2, date: '2023-04-25', destination: 'Bali', tourType: 'Beach Getaway' },
  { id: 3, date: '2023-03-15', destination: 'Rome', tourType: 'Historical Tour' },
];

const ReservationHistory = () => {
  return (
    <Box sx={{ marginTop: 3 }}>
      <Typography variant="h6">Reservation History</Typography>
      {reservations.length > 0 ? (
        <Paper elevation={3} sx={{ marginTop: 2 }}>
          <List>
            {reservations.map((reservation) => (
              <ListItem key={reservation.id}>
                <ListItemText
                  primary={reservation.date}
                  secondary={`${reservation.destination} - ${reservation.tourType}`}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      ) : (
        <Typography variant="body2">No past reservations found.</Typography>
      )}
    </Box>
  );
};

const LoyaltyProgram = () => {
  // Assume these values are fetched from an API or stored in state
  const loyaltyPoints = 500;

  const getLoyaltyStatus = () => {
    if (loyaltyPoints >= 500) {
      return 'Gold';
    } else if (loyaltyPoints >= 200) {
      return 'Silver';
    } else {
      return 'Bronze';
    }
  };

  const handleRedeemPoints = () => {
    // Implement the logic for redeeming loyalty points here
  };

  const loyaltyStatus = getLoyaltyStatus();

  const getLoyaltyIconColor = () => {
    switch (loyaltyStatus) {
      case 'Gold':
        return green[500];
      case 'Silver':
        return amber[500];
      case 'Bronze':
        return grey[500];
      default:
        return grey[500];
    }
  };

  const loyaltyIconColor = getLoyaltyIconColor();

  return (
    <Box>
      <Paper elevation={3} sx={{ padding: 3, bgcolor: "#ECF2FF" }}>
        <Grid container spacing={2} >
          <Grid item>
            <LoyaltyIcon sx={{ fontSize: 60, color: loyaltyIconColor }} />
          </Grid>
          <Grid item>
            <Typography variant="h6" sx={{ marginBottom: 4 }}>
              Loyalty Program
            </Typography>
            <Stack direction="column" spacing={2}>
              <Typography variant="subtitle2" >
                <span style={{ color: "#068DA9" }}>Loyalty Status:  </span> {loyaltyStatus}
              </Typography>
              <Typography variant="subtitle2" >
                <span style={{ color: "#068DA9" }}>Loyalty Points:  </span> {loyaltyPoints}
              </Typography>
              <LoyaltyBenefits loyaltyStatus={loyaltyStatus} />
              <Divider/>
              <PointHistory />
              {/* <PersonalizedRecommendations loyaltyStatus={loyaltyStatus}/> */}
              {/* <ReservationHistory /> */}
            </Stack>
            <Button variant="contained" color="primary" onClick={handleRedeemPoints} sx={{ marginTop: 3 }}>
              Redeem Points
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default LoyaltyProgram;
