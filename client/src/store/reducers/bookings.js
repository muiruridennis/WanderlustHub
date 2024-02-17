import {
    CREATE_BOOKING,
    FETCH_BOOKINGS,
    START_LOADING,
    END_LOADING,
    DELETE_BOOKING,
    UPDATE_BOOKING,
    FETCH_BOOKING,
  } from "../../Constants/actionTypes";
  
  const initialState = {
    bookingsData: [],
    isLoading: false,
  };
  
  export default function bookingsReducer(state = initialState, action) {
    switch (action.type) {
      case START_LOADING:
        return { ...state, isLoading: true };
      case END_LOADING:
        return { ...state, isLoading: false };
      case CREATE_BOOKING:
        return { ...state, bookingsData: [...state.bookingsData, action.payload] };
      case FETCH_BOOKING:
        return { ...state, booking: action.payload };
      case FETCH_BOOKINGS:
        return {
          ...state,
          bookingsData: action.payload,
          isLoading: false,
        };
      case DELETE_BOOKING:
        const bookingsAfterDelete = state.bookingsData.filter(
          (booking) => booking.id !== action.payload
        );
        return {
          ...state,
          bookingsData: bookingsAfterDelete,
          isLoading: false,
        };
      case UPDATE_BOOKING:
        return {
          ...state,
          bookingsData: state.bookingsData.map((booking) =>
            booking.id === action.payload.id ? action.payload : booking
          ),
        };
      default:
        return state;
    }
  }
  