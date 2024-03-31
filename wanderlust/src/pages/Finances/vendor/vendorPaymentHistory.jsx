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
function VendorPaymentHistory(props) {
  const { paymentHistory } = props.vendor;
  return (
    <>
      <Typography variant="h6" sx={{ m: 1 }}>Payment History</Typography>
      <TableContainer component={Paper} elevation={2}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Invoice Number</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell>Transaction ID</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paymentHistory.map((payment, index) => (
              <TableRow key={index}>
                <TableCell>{payment.date}</TableCell>
                <TableCell>{payment.amount}</TableCell>
                <TableCell>{payment.invoiceNumber}</TableCell>
                <TableCell>{payment.paymentMethod}</TableCell>
                <TableCell>{payment.transactionID}</TableCell>
                <TableCell>{payment.status}</TableCell>
                <TableCell>{payment.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default VendorPaymentHistory