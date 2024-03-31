import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const recentTransactions = [
  { id: 1, date: '2023-07-01', description: 'Hotel Booking', amount: '$150.00', status: 'In progress' },
  { id: 2, date: '2023-07-05', description: 'Flight Ticket', amount: '$300.00', status: 'Completed' },
  { id: 3, date: '2023-07-10', description: 'Tour Package', amount: '$500.00', status: 'Failed' },
  { id: 4, date: '2023-07-15', description: 'Dining Expense', amount: '$75.00', status: 'Refunded' },
  { id: 5, date: '2023-07-20', description: 'Car Rental', amount: '$200.00', status: 'Approved' },
];

const getStatusColor = (status) => {
  if (status === 'Completed') {
    return 'green';
  } else if (status === 'In progress') {
    return 'orange';
  } else if (status === 'Failed') {
    return 'red';
  } else {
    return 'black';
  }
};

const RecentTransactions = () => {
  return (
    <Paper elevation={2} sx={{ padding: '1rem' }}>
      <Typography variant="h6" gutterBottom>
        Recent Transactions
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Description</TableCell>
              <TableCell align="left">Amount</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recentTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell align="left">{transaction.amount}</TableCell>
                <TableCell align="left">
                  <span style={{ color: getStatusColor(transaction.status) }}>{transaction.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default RecentTransactions;
