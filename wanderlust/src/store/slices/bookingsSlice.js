import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../../src/api/index.js';

const initialState = {
  bookingsData: [],
  isLoading: false,
};

export const fetchBookings = createAsyncThunk(
  'bookings/fetchBookings',
  async (_, { dispatch }) => {
    try {
      dispatch(startLoading());
      const { data } = await api.fetchBookings();
      dispatch(fetchBookingsSuccess(data));
      dispatch(endLoading());
    } catch (error) {
      console.log(error);
      dispatch(endLoading());
    }
  }
);

export const createBooking = createAsyncThunk(
  'bookings/createBooking',
  async (bookingData, { dispatch }) => {
    try {
      const { data } = await api.createBooking(bookingData);
      dispatch(createBookingSuccess(data));
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteBooking = createAsyncThunk(
  'bookings/deleteBooking',
  async (id, { dispatch }) => {
    try {
      await api.deleteBooking(id);
      dispatch(deleteBookingSuccess(id));
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateBooking = createAsyncThunk(
  'bookings/updateBooking',
  async ({ id, booking }, { dispatch }) => {
    try {
      const { data } = await api.updateBooking(id, booking);
      dispatch(updateBookingSuccess(data));
    } catch (error) {
      console.log(error);
    }
  }
);

const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    endLoading: (state) => {
      state.isLoading = false;
    },
    fetchBookingsSuccess: (state, action) => {
      state.bookingsData = action.payload;
    },
    createBookingSuccess: (state, action) => {
      state.bookingsData.push(action.payload);
    },
    deleteBookingSuccess: (state, action) => {
      state.bookingsData = state.bookingsData.filter(
        (booking) => booking.id !== action.payload
      );
    },
    updateBookingSuccess: (state, action) => {
      state.bookingsData = state.bookingsData.map((booking) =>
        booking.id === action.payload.id ? action.payload : booking
      );
    },
  },
});

export const {
  startLoading,
  endLoading,
  fetchBookingsSuccess,
  createBookingSuccess,
  deleteBookingSuccess,
  updateBookingSuccess,
} = bookingsSlice.actions;

export default bookingsSlice.reducer;
