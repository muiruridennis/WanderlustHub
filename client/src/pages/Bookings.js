import React from 'react';
import Typography from "@mui/material/Typography";
import {bookings } from  "../Constants/DummyData";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import moment from "moment";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Bookings() {
  var now = moment();

  return (
    <div>
       <Typography paragraph >
         Bookings
        </Typography>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Event</TableCell>
              <TableCell align="right">Clients Name</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right"> Payment Mode</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Approved</TableCell>
              <TableCell align="right">Booking Date</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.eventsName}
                </TableCell>
                <TableCell align="right">{row.clientsName}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">{row.paymentMode}</TableCell>
                <TableCell align="right">{row.isComplete === true ? "Completed" : "Not complete"}</TableCell>
                <TableCell align="right">{row.isApproved === true ? "Approved" : "Not Approved"}</TableCell>
                <TableCell align="right">{now.format('YYYY-MM-DD')}</TableCell>
                <TableCell align="right">
                  <Button size="small" sx={{borderRadius:"25px"}}><MoreHorizIcon/></Button>                 
                  </TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Bookings
