import React, { useMemo, useState, useEffect } from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";

import { BookingsTable } from "../../sections/bookings/Booking-table";
import { applyBookingsPagination } from '../../Utils/applyBooking-pagination';
import Popup from "../../Components/Popup";
import Circularprogress from "../../Components/CircularProgress";
import BookingForm from "./bookingForm";
import { fetchBookings } from "../../store/slices/bookingsSlice"


function Bookings() {

  const [bookingsByTour, setBookingsByTour] = useState({});
  const [pagination, setPagination] = useState({});
  const [searchQueries, setSearchQueries] = useState({});
  const [filterCriteria, setFilterCriteria] = useState({});
  const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
  const [openPopup, setOpenPopup] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [currentTourId, setCurrentTourId] = useState(null);
  const dispatch = useDispatch();

  const [tourCost, setTourCost] = useState(0);
  const { isLoading, bookingsData } = useSelector((state) => state.Bookings);
  console.log("bookingsData: ", bookingsData)
  const bookingsByTourData = Object.entries(
    bookingsData.reduce((acc, booking) => {
      if (!acc[booking.tour?.id]) {
        acc[booking.tour?.id] = {
          bookings: [],
          length: 0
        };
      }
      acc[booking.tour?.id].bookings.push(booking);
      acc[booking.tour?.id].length++;
      return acc;
    }, {})
  );

  function useBookings(bookingsByTourData, pagination, filterCriteria) {
    const getPageForTour = (tourId) => {
      // Set the page to 0 if filter criteria is applied
      if (Object.keys(filterCriteria).length > 0) {
        return 0;
      }

      const tourPagination = pagination[tourId];
      return tourPagination && tourPagination.page !== undefined ? tourPagination.page : 0;
    };

    const getRowsPerPageForTour = (tourId) => {
      const tourPagination = pagination[tourId];
      return tourPagination && tourPagination.rowsPerPage !== undefined ? tourPagination.rowsPerPage : 10;
    };

    return useMemo(() => {
      const bookings = bookingsByTourData.map((tour) => ({
        tourId: tour[0],
        bookings: applyBookingsPagination(
          tour[1].bookings,
          getPageForTour(tour[0]),
          getRowsPerPageForTour(tour[0]),
          filterCriteria
        ),
        length: tour[1].length
      }));

      return { bookings, pagination };
    }, [bookingsByTourData, pagination, filterCriteria]);
  }
  const { bookings } = useBookings(bookingsByTourData, pagination, filterCriteria);

  useEffect(() => {
    dispatch(fetchBookings());
  }, [dispatch]);

  const close = () => {
    setOpenPopup(false);
    setCurrentId(null);
  };

  useEffect(() => {
    const updatedBookingsByTour = {};
    bookings.forEach(({ tourId, bookings }) => {
      updatedBookingsByTour[tourId] = bookings;
    });
    setBookingsByTour(updatedBookingsByTour);
  }, [bookingsData]);
  // changed the dependency to bookingsData, which is the actual source of the bookings variable. 
  // By doing this, the effect will only be triggered when bookingsData changes,
  //  avoiding the circular dependency and the maximum update depth error.

  const handleChangePage = (tourId, newPage) => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      [tourId]: {
        ...prevPagination[tourId],
        page: newPage
      }
    }));
  };

  const handleChangeRowsPerPage = (event, tourId) => {
    const rowsPerPage = +event.target.value;
    setPagination((prevPagination) => ({
      ...prevPagination,
      [tourId]: {
        ...prevPagination[tourId],
        page: 0,
        rowsPerPage
      }
    }));
  };
  if (isLoading) {
    return <Circularprogress />

  }
  // if (bookings && bookings.length <= 0) {
  //   return (
  //     <Box sx={{display:'flex', alignItems:"center", justifyContent:"center", height:"100%"}}>
  //       <Typography align='center' variant='h5'>No bookings made</Typography>
  //     </Box>
  //   )
  // }

  return (
    <>
      <Container maxWidth="xl" sx={{ bgcolor: "#ECF8F9", paddingTop: 2 }}>

        <BookingsTable
          items={bookings}
          pagination={pagination}
          setPagination={setPagination}
          bookingsByTour={bookingsByTour}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          searchQueries={searchQueries}
          setSearchQueries={setSearchQueries}
          filterCriteria={filterCriteria}
          setFilterCriteria={setFilterCriteria}
          setOpenPopup={setOpenPopup}
          setCurrentId={setCurrentId}
          currentId={currentId}
          setTourCost={setTourCost}
          setCurrentTourId={setCurrentTourId}
        />
      </Container>
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup} currentId={currentId} setCurrentId={setCurrentId} close={close} title="Client's Booking">
        {isLoading ? <Circularprogress /> :
          <BookingForm currentId={currentId} setCurrentId={setCurrentId} setOpenPopup={setOpenPopup} notify={notify} currentTourId={currentTourId}
            close={close}
            setNotify={setNotify} bookings={bookings} tourCost={tourCost}
          />
        }
      </Popup>
    </>
  );
}

export default Bookings;
