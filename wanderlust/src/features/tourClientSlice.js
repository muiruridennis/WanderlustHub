import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ADD_CLIENT_TO_TOUR, DELETE_FROM_LIST } from '../Constants/actionTypes';

const initialState = {
  clientList: [],
  id: 1,
};

export const addToTour = createAsyncThunk(
  'tour/addToTour',
  async (clientData, { getState, dispatch }) => {
    // Here you can dispatch other actions if needed
    // For example, dispatch(startLoading()) if loading state management is needed
    const state = getState();
    // Any other logic before API call
    try {
      // Simulating async API call
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(clientData); // Resolve with the client data
        }, 1000); // Simulated delay
      });
      return response; // Return response to be handled by the fulfilled action
    } catch (error) {
      // Handle error if necessary
      throw error;
    }
  }
);

const tourSlice = createSlice({
  name: 'tour',
  initialState,
  reducers: {
    deleteFromList(state, action) {
      const filteredArray = state.clientList.filter((client) => client.id !== action.payload);
      state.clientList = filteredArray;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToTour.fulfilled, (state, action) => {
      state.clientList.push(action.payload); // Assuming action.payload is the client data
    });
  },
});

export const { deleteFromList } = tourSlice.actions;

export default tourSlice.reducer;
