import React from 'react'
import { Typography, useMediaQuery, useTheme} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {activities} from "../../Constants/DummyData";
import moment from "moment";
import Arrow from '@mui/icons-material/KeyboardDoubleArrowRight';

function Activities() {
  const now = moment();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div style={{  minWidth: isSmallScreen ? "auto" : "960px" }}>
      <Typography align="center"
        sx={{
          marginBottom: "0.5rem",
          fontFamily: "Roboto",
          fontWeight: 700,
          lineHeight: 1.1,
          color: "#364a63",
          pt: "1.5em"
        }} > Login Activities </Typography>
      <Typography align="center" variant="body1">The activities of login for the user.</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Browser</TableCell>
              <TableCell align="right">IP</TableCell>
              <TableCell align="right">Time</TableCell>           
            </TableRow>
          </TableHead>
          <TableBody>
            {activities.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.browser}
                </TableCell>
                <TableCell align="right">{row.ip}</TableCell>
                <TableCell align="right">{now.format('YYYY-MM-DD')}</TableCell>                  
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Activities