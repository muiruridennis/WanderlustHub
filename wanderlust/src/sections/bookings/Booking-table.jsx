import React, { useState, useEffect } from 'react';
import {
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Select,
  TableContainer,
  Stack,
  InputLabel,
  MenuItem,
  FormControl,
  Divider,
  Typography,
  IconButton
} from '@mui/material';
import moment from 'moment';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { BookingsSearch } from "./Booking-search";
import { useParams, useNavigate, Link } from 'react-router-dom';


export const BookingsTable = ({
  items = [],
  pagination,
  bookingsByTour,
  handleChangePage,
  handleChangeRowsPerPage,
  searchQueries,
  setSearchQueries,
  filterCriteria,
  setFilterCriteria,
  setOpenPopup,
  setCurrentId,
  setTourCost,
  setCurrentTourId,
}) => {

  const tourColors = ['#AFD3E2', '#FCC8D1', '#ACBCFF', '#FCE9F1', '#ECF8F9'];
  // Handle search query change
  const handleSearchChange = (event, tourId) => {
    const { value } = event.target;
    setSearchQueries((prevSearchQueries) => ({
      ...prevSearchQueries,
      [tourId]: value
    }));
  };


  // Handle filter criteria change
  const handleFilterChange = (event, tourId) => {
    const { value } = event.target;
    if (value === "") {
      // Clear the filter criteria for the specified tourId
      setFilterCriteria((prevFilterCriteria) => {
        const updatedFilterCriteria = { ...prevFilterCriteria };
        delete updatedFilterCriteria[tourId];
        return updatedFilterCriteria;
      });
    } else {
      // Set the filter criteria for the specified tourId
      setFilterCriteria((prevFilterCriteria) => ({
        ...prevFilterCriteria,
        [tourId]: value
      }));
    }
  };

  const handleOpenModal = (booking) => {
    setOpenPopup(true);
    setTourCost(booking?.tour?.price)
    setCurrentId(booking?.id)

  };
  const handleAddBooking = (bookingTourId) => {
    setOpenPopup(true);
    setCurrentTourId(bookingTourId)
  };

  return (
    <>
      {items.map(({ tourId, length, bookings }, index) => {
        const tourColor = tourColors[index % tourColors.length];
        const { page, rowsPerPage } = pagination[tourId] || {};
        const tour = bookings[0]?.tour;
        const searchQuery = searchQueries[tourId] || '';
        const tourFilterCriteria = filterCriteria[tourId] || '';

        let filteredBookings = bookingsByTour[tourId];

        switch (tourFilterCriteria) {
          // case 'amountPaid':
          //   filteredBookings = filteredBookings?.filter((booking) => booking?.payment?.amountPaid > 4000);
          //   break;
          case 'status':
            filteredBookings = filteredBookings?.filter((booking) => booking.status === '6trtt');
            break;
          case 'id':
            filteredBookings = filteredBookings?.filter((booking) => booking.id > 40);

            break;
          // Add more cases for additional filter criteria as needed
        }

        filteredBookings = filteredBookings?.filter((booking) =>
          booking?.user?.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return (
          <div component={Paper} elevation={15} key={tourId} style={{ marginTop: "34px" }}>
            <Typography variant="h6" sx={{ marginBottom: 3 }}>
              {tour?.name}
            </Typography>
            <Stack spacing={8}>
              <Stack direction="row" spacing={5} sx={{ position: "relative" }}>
                <BookingsSearch
                  handleSearchChange={(event) => handleSearchChange(event, tourId)}
                  searchQuery={searchQueries[tourId] || ''}
                />
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                  <InputLabel id="demo-simple-select-autowidth-label">Filter</InputLabel>
                  <Select
                    value={tourFilterCriteria}
                    onChange={(event) => handleFilterChange(event, tourId)}
                    autoWidth
                    label="Filter"
                  // sx={{bgcolor:"#FCC8D1"}}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {/* <MenuItem value="amountPaid">Amount Paid</MenuItem> */}
                    <MenuItem value="status">Status</MenuItem>
                    <MenuItem value="id">Id</MenuItem>
                    {/* Add more filter options as needed */}
                  </Select>
                </FormControl>
                <Button
                  variant='contained'
                  color='success'
                  onClick={() => handleAddBooking(tourId)}
                  sx={{ position: "absolute", right: 3 }}
                >
                  <AddIcon /> Add
                </Button>
              </Stack>
            </Stack>
            <TableContainer >
              <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{ backgroundColor: tourColor }}>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Client's Name</TableCell>
                    <TableCell align="left">Amount Paid</TableCell>
                    <TableCell align="left">Balance</TableCell>
                    <TableCell align="left">Payment Mode</TableCell>
                    <TableCell align="left">Status</TableCell>
                    {/* <TableCell align="left">Approved</TableCell> */}
                    <TableCell align="left">Booking Date</TableCell>
                    <TableCell align="left">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                  {filteredBookings?.length ? (
                    filteredBookings.map((booking) => (

                      <TableRow key={booking.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell align="left">{booking.user.name}</TableCell>
                        <TableCell align="left">
                          {booking.payments.length > 0 ? (
                            booking.payments.map((payment, index) => (
                              <span key={index}>{payment.amountPaid}</span>
                            ))
                          ) : (
                            <span>No payments</span>
                          )}
                        </TableCell>
                        <TableCell align="left">{booking.remainingBalance}</TableCell>
                        <TableCell align="left">
                          {booking.payments.length > 0 ? (
                            booking.payments.map((payment, index) => (
                              <span key={index}>{payment.paymentMethod}</span>
                            ))
                          ) : (
                            <span>No payments</span>
                          )}
                        </TableCell>
                        <TableCell align="left">{booking.status}</TableCell>
                        {/* <TableCell align="left">{booking.status === 'Approved' ? 'Approved' : 'Not Approved'}</TableCell> */}
                        <TableCell align="left">
                          {moment(booking.bookedAtDate).format('YYYY-MM-DD HH:mm')}
                        </TableCell>
                        <TableCell align="left">
                          <Stack direction="row" spacing={3}>
                            <IconButton
                              onClick={() => handleOpenModal(booking)}
                            >
                              <EditIcon color='primary' />
                            </IconButton>
                            <IconButton component={Link} to={"#"}>
                              <ArrowForwardIcon />
                            </IconButton>

                          </Stack>
                        </TableCell>

                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} align="center">
                        Opps! No results found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>

            <TablePagination
              component="div"
              count={length}
              onPageChange={(event, newPage) => handleChangePage(tourId, newPage)}
              onRowsPerPageChange={(event) => handleChangeRowsPerPage(event, tourId)}
              page={page || 0}
              rowsPerPage={rowsPerPage || 10}
              rowsPerPageOptions={[10, 15, 20]}
            />
            <Divider light />
          </div>
        );
      })}
    </>
  );
};

