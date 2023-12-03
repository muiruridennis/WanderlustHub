

import React from 'react';
import { Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { transactionsData } from '../../Constants/DummyData';
function MonetaryAnalysis() {
  const startDate = new Date('2023-01-01');
  const endDate = new Date('2023-12-31');


  // Filter transactions within the specified time period
  const transactionsInTimePeriod = transactionsData.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    return transactionDate >= startDate && transactionDate <= endDate;
  });

  // Calculate total revenue
  const totalRevenue = transactionsInTimePeriod.reduce(
    (total, transaction) => total + parseFloat(transaction.amount.replace('$', '')),
    0
  );

  // Format currency with two decimal places
  const formatCurrency = (amount) => `$${amount.toFixed(2)}`;

  // Calculate revenue breakdown by service type
  const serviceRevenueBreakdown = transactionsInTimePeriod.reduce((breakdown, transaction) => {
    const serviceType = transaction.serviceType || 'Other'; // Fallback to 'Other' if serviceType is missing
    const amount = parseFloat(transaction.amount.replace('$', ''));

    if (!breakdown[serviceType]) {
      breakdown[serviceType] = 0;
    }
    breakdown[serviceType] += amount;

    return breakdown;
  }, {});


  return (
    <div>
       <Typography variant="h6" gutterBottom>
        Monetary Analysis
      </Typography>
      <Typography variant="body1">
        Total Revenue for {startDate.toLocaleDateString()} to {endDate.toLocaleDateString()}: {formatCurrency(totalRevenue)}
      </Typography>

      <Typography variant="h6" gutterBottom>
        Revenue Breakdown by Service
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Service Type</TableCell>
              <TableCell align="right">Total Revenue</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(serviceRevenueBreakdown).map(([serviceType, revenue]) => (
              <TableRow key={serviceType}>
                <TableCell component="th" scope="row">
                  {serviceType}
                </TableCell>
                <TableCell align="right">{formatCurrency(revenue)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default MonetaryAnalysis;
