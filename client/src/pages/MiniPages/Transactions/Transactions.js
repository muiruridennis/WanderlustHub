import React, { useState } from 'react'
import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { transactionsData } from "../../../Constants/DummyData";
import Popup from "../../../Components/Popup";
import Transaction from './Transaction';
import moment from "moment";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Transactions() {
  const [openPopup, setOpenPopup] = useState(false);

  var now = moment();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div style={{ minWidth: isSmallScreen ? "auto" : "960px", }}>
      <Typography align="center"
        sx={{
          marginBottom: "0.5rem",
          fontFamily: "Roboto",
          fontWeight: 700,
          lineHeight: 1.1,
          color: "#364a63",
          pt: "1.5em",
        }} > Recent Transactions </Typography>
      <Typography align="center" variant="body1">All the recent transaction made by user.</Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Details</TableCell>
              <TableCell align="right">Type</TableCell>
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
                <TableCell align="right">{now.format('YYYY-MM-DD')}</TableCell>
                <TableCell align="right">{row.reference}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => setOpenPopup(true)} variant="text" >
                    <ChevronRightIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Popup title="Transaction #TNX93303219" setOpenPopup={setOpenPopup} openPopup={openPopup}>
        <Transaction setOpenPopup={setOpenPopup} />
      </Popup>
    </div>)
}

export default Transactions