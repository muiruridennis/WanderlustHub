import React, { useState } from 'react';
import { Typography, useMediaQuery, useTheme, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { transactionsData } from '../../../Constants/DummyData';
import Popup from '../../../Components/Popup';
import Transaction from './Transaction';
import moment from 'moment';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Transactions() {
  const [openPopup, setOpenPopup] = useState(false);
  const [transactionId, setTransactionId] = useState(null)

  var now = moment();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const close = () => {
    setOpenPopup(false);
  };
  const handleSeeTransaction = (transaction) => {
    setOpenPopup(true);
    setTransactionId(transaction);

  }



  return (
    <div style={{ minWidth: isSmallScreen ? 'auto' : '960px' }}>
      <Typography
        align="center"
        sx={{
          marginBottom: '0.5rem',
          fontFamily: 'Roboto',
          fontWeight: 700,
          lineHeight: 1.1,
          color: '#364a63',
          pt: '1.5em',
        }}
      >
        Recent Payment History
      </Typography>
      <Typography align="center" variant="body1">
        All the recent transactions made by the user.
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Details</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Is Approved</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Reference</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactionsData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.details}
                </TableCell>
                <TableCell align="right">{row.type}</TableCell>
                <TableCell align="right" sx={{ color: row.isApproved ? "green" : "red" }}>{row.isApproved === true ? "Approved" : "Not Approved"}</TableCell>
                <TableCell align="right" sx={{ color: row.status === "success" ? "green" : "red" }}>{row.status}</TableCell>
                <TableCell align="right">{now.format('YYYY-MM-DD')}</TableCell>
                <TableCell align="right">{row.reference}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleSeeTransaction(row.id)} variant="text">
                    <ChevronRightIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Popup
        title="Transaction Details"
        close={close} openPopup={openPopup}>
        <Transaction
          setOpenPopup={setOpenPopup}
          transactionId={transactionId}
          transactionsData={transactionsData}

        />
      </Popup>
    </div>
  );
}

export default Transactions;

