import {
    CREATE_BOOKING,
    FETCH_BOOKINGS,
    START_LOADING,
    END_LOADING,
    DELETE_BOOKING,
    UPDATE_BOOKING,
    FETCH_BOOKING,
    START_SEARCHING,
    END_SEARCHING,
} from "../Constants/actionTypes";
import * as api from "../Api/index.js";

export const createBooking = (bookingData) => async (dispatch) => {
    try {
        const { data } = await api.createBooking(bookingData);
        dispatch({ type: CREATE_BOOKING, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const fetchBookings = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchBookings();
        dispatch({ type: FETCH_BOOKINGS, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};

export const deleteBooking = (id) => async (dispatch) => {
    try {
        await api.deleteBooking(id);
        dispatch({ type: DELETE_BOOKING, payload: id });
    } catch (error) {
        console.log(error);
    }
};

export const updateBooking = (id, booking) => async (dispatch) => {
    try {
        const { data } = await api.updateBooking(id, booking);
        dispatch({ type: UPDATE_BOOKING, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getBooking = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.fetchBooking(id);
        dispatch({ type: FETCH_BOOKING, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error);
    }
};

//   export const getBookingsBySearch = (searchQuery) => async (dispatch) => {
//     try {
//       dispatch({ type: START_SEARCHING });
//       const { data } = await api.fetchBookingsBySearch(searchQuery);
//       dispatch({ type: FETCH_BOOKINGS_BY_SEARCH, payload: data });
//       dispatch({ type: END_SEARCHING });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
