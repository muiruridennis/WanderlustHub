import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

const VendorInvoices = (props) => {
  const { invoicesForVendor } = props.vendor;

  return (
    <div>
      <Typography variant="h6" sx={{m:1}}>Invoices for Vendor</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Transaction ID</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Invoice Due Date</TableCell>
              <TableCell>Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoicesForVendor.map((invoice) => (
              <TableRow key={invoice.invoiceNumber}>
                <TableCell>{invoice.date}</TableCell>
                <TableCell>{invoice.amount}</TableCell>
                <TableCell>{invoice.transactionID}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell>{invoice.status}</TableCell>
                <TableCell>{invoice.dueDate}</TableCell>
                <TableCell>{invoice.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default VendorInvoices;
