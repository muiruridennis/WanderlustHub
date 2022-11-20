// import React from 'react';
// import Typography from "@mui/material/Typography";
// import {bookings } from  "../Constants/DummyData";
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Button from '@mui/material/Button';
// import Paper from '@mui/material/Paper';
// import moment from "moment";
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

// function Bookings() {
//   var now = moment();

//   return (
//     <div>
//        <Typography paragraph>
//          Bookings
//         </Typography>
//         <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Event</TableCell>
//               <TableCell align="right">Clients Name</TableCell>
//               <TableCell align="right">Amount</TableCell>
//               <TableCell align="right"> Payment Mode</TableCell>
//               <TableCell align="right">Status</TableCell>
//               <TableCell align="right">Approved</TableCell>
//               <TableCell align="right">Booking Date</TableCell>
//               <TableCell align="right"></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {bookings.map((row) => (
//               <TableRow
//                 key={row.id}
//                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//               >
//                 <TableCell component="th" scope="row">
//                   {row.eventsName}
//                 </TableCell>
//                 <TableCell align="right">{row.clientsName}</TableCell>
//                 <TableCell align="right">{row.amount}</TableCell>
//                 <TableCell align="right">{row.paymentMode}</TableCell>
//                 <TableCell align="right">{row.isComplete === true ? "Completed" : "Not complete"}</TableCell>
//                 <TableCell align="right">{row.isApproved === true ? "Approved" : "Not Approved"}</TableCell>
//                 <TableCell align="right">{now.format('YYYY-MM-DD')}</TableCell>
//                 <TableCell align="right">
//                   <Button size="small" sx={{borderRadius:"25px"}}><MoreHorizIcon/></Button>                 
//                   </TableCell>
                
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   )
// }

// export default Bookings
import React, { useState }from 'react';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Modal from "@mui/material/Modal"
const styles = {
  body: {
    display: "flex",
    flexDirection: "row",
    margin: 2
  },
  button: {
    zIndex: 1000,
    height: 100,
    width: 100,
    margin: 6.5,
    borderRadius: 0
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    margin: "5px 50px",
    backgroundColor: "white",
    padding: 6.5
  },
  modal: {
    position: "absolute",
    width: 400,
    backgroundColor: "white",
    boxShadow: "none",
    padding: 10,
    outline: "none",
    top: "15%",
    left: "50%",
    transform: `translate(-50%, -50%)`
  }
};
const stationData = [
  { id: 1, number: "1" },
  { id: 2, number: "2" },
  { id: 3, number: "3" }
];

function Bookings() {

  const [open, setOpen] = useState(false);
  const [stationNumber, setStationNumber] = useState(null);



  const handleOpen = (stationNumber) => {
    // get which button was pressed via `stationNumber`
    // open the modal and set the `stationNumber` state to that argument
    setStationNumber(stationNumber);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.body}>
        <Paper square elevation={0} style={styles.container}>
          {stationData.map((station, index) => (
            <div key={index}>
              <Button
                variant="contained"
                color="primary"
                style={styles.button}
                // pass which button was clicked as an argument
                onClick={() => handleOpen(station.number)}
              >
                {station.number}
              </Button>
            </div>
          ))}
        </Paper>

        {/* add only one modal */}
        <Modal open={open} onClose={handleClose}>
          {/* display the content based on newly set state */}
          <div style={styles.modal}>{stationNumber}</div>
        </Modal>
      </div>
    </div>
  );
}

export default Bookings