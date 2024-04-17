import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api/api';

const initialState = { tours: [], isLoading: false, error: null };

export const createTour = createAsyncThunk(
  'tour/createTour',
  async (tourData) => {
    try {
      const { data } = await api.createTour(tourData);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const fetchTours = createAsyncThunk(
  'tour/fetchTours',
  async () => {
    try {
      const { data } = await api.fetchTours();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const getTour = createAsyncThunk(
  'tour/getTour',
  async (id) => {
    try {
      const { data } = await api.fetchTour(id);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const tourSlice = createSlice({
  name: 'tour',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createTour.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createTour.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tours.push(action.payload);
      })
      .addCase(createTour.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchTours.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTours.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tours = action.payload;
      })
      .addCase(fetchTours.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getTour.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTour.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tour = action.payload;
      })
      .addCase(getTour.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default tourSlice.reducer;
