import React, { useState } from 'react';
import { Typography, Box, Tab, Tabs, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const ClientBookings = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // Placeholder data for upcoming bookings (replace with actual data from API or state)
  const upcomingBookings = [
    {
      id: 1,
      date: '2023-06-01',
      destination: 'Paris',
      type: 'City Tour',
      amountPaid: 2700,
      loyaltyPointAwarded: 100
    },
    {
      id: 2,
      date: '2023-06-15',
      destination: 'Rome',
      type: 'Historical Tour',
      amountPaid: 3500,
      loyaltyPointAwarded: 100

    },
    // Add more upcoming bookings as needed
  ];
  const pastBookings = [
    {
      id: 1,
      date: '2023-06-01',
      destination: 'Paris',
      type: 'City Tour',
      amountPaid: 2700,
      loyaltyPointAwarded: 100
    },
    {
      id: 2,
      date: '2023-06-15',
      destination: 'Rome',
      type: 'Historical Tour',
      amountPaid: 3500,
      loyaltyPointAwarded: 100

    },
    {
      id: 2,
      date: '2023-06-15',
      destination: 'Rome',
      type: 'Historical Tour',
      amountPaid: 3500,
      loyaltyPointAwarded: 100

    },
    {
      id: 2,
      date: '2023-06-15',
      destination: 'Rome',
      type: 'Historical Tour',
      amountPaid: 3500,
      loyaltyPointAwarded: 100

    },
    // Add more upcoming bookings as needed
  ];

  return (
    <Box>
      <Paper square>
        <Tabs value={selectedTab} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
          <Tab label="Upcoming Bookings" />
          <Tab label="Past Bookings" />
        </Tabs>
      </Paper>

      {selectedTab === 0 && (
        <Box p={2} sx={{ bgcolor: "#DDE6ED", textAlign:"center" }}>
          <Typography variant="subtitle1" >Upcoming Bookings</Typography>
          {upcomingBookings.length > 0 ? (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Destination</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Points Awarded</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {upcomingBookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell>{booking.date}</TableCell>
                      <TableCell>{booking.destination}</TableCell>
                      <TableCell>{booking.type}</TableCell>
                      <TableCell>{booking.amountPaid}</TableCell>
                      <TableCell>{booking.loyaltyPointAwarded}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Typography variant="body2">No upcoming bookings</Typography>
          )}
        </Box>
      )}

      {selectedTab === 1 && (
        <Box p={2} sx={{ bgcolor: "#ECF2FF" }}>
          <Typography variant="h6">Past Bookings</Typography>
          {pastBookings.length > 0 ? (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Destination</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Points Awarded</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pastBookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell>{booking.date}</TableCell>
                      <TableCell>{booking.destination}</TableCell>
                      <TableCell>{booking.type}</TableCell>
                      <TableCell>{booking.amountPaid}</TableCell>
                      <TableCell>{booking.loyaltyPointAwarded}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Typography variant="body2">No past bookings</Typography>
          )}
        </Box>
      )}
    </Box>
  );
};

export default ClientBookings;
