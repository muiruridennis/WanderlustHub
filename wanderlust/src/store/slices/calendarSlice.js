import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../../src/api/index.js';

const initialState = {
  customEvents: [],
  message: null,
  isLoading: false,
  error: null,
};

export const createCustomEvent = createAsyncThunk(
  'customEvents/createCustomEvent',
  async (customEventData, { dispatch }) => {
    try {
      const { data } = await api.createCustomEvent(customEventData);
      dispatch(createCustomEventSuccess(data));
    } catch (error) {
      console.log(error);
    }
  }
);

export const getAllCustomEvents = createAsyncThunk(
  'customEvents/getAllCustomEvents',
  async (_, { dispatch }) => {
    try {
      dispatch(startLoading());
      const { data } = await api.getAllCustomEvents();
      dispatch(getAllCustomEventsSuccess(data));
      dispatch(endLoading());
    } catch (error) {
      console.log(error);
      dispatch(startLoading());
      dispatch(setError(error.response.data.message));
      dispatch(endLoading());
    }
  }
);

export const getCustomEventById = createAsyncThunk(
  'customEvents/getCustomEventById',
  async (id, { dispatch }) => {
    try {
      dispatch(startLoading());
      const { data } = await api.getCustomEventById(id);
      dispatch(getCustomEventByIdSuccess(data));
      dispatch(endLoading());
    } catch (error) {
      console.log(error);
      dispatch(startLoading());
      dispatch(setError(error.response.data.message));
      dispatch(endLoading());
    }
  }
);

export const deleteCustomEvent = createAsyncThunk(
  'customEvents/deleteCustomEvent',
  async (id, { dispatch }) => {
    try {
      dispatch(startLoading());
      const { data } = await api.deleteCustomEvent(id);
      dispatch(deleteCustomEventSuccess(id));
      dispatch(setMessage(data.message));
      dispatch(endLoading());
    } catch (error) {
      console.log(error);
      dispatch(startLoading());
      const errorMessage =
        error.response && error.response.data
          ? error.response.data.message
          : 'Unknown error occurred';
      dispatch(setError(errorMessage));
      dispatch(setMessage(errorMessage));
      dispatch(endLoading());
    }
  }
);

export const updateCustomEvent = createAsyncThunk(
  'customEvents/updateCustomEvent',
  async ({ id, customEventUpdates }, { dispatch }) => {
    try {
      const { data } = await api.updateCustomEvent(id, customEventUpdates);
      const { updatedEvent, message } = data;
      dispatch(updateCustomEventSuccess(updatedEvent));
      dispatch(setMessage(message));
    } catch (error) {
      console.log(error);
      dispatch(setMessage('An error occurred.'));
    }
  }
);

const customEventsSlice = createSlice({
  name: 'customEvents',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    endLoading: (state) => {
      state.isLoading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCustomEventSuccess, (state, action) => {
        state.customEvents.push(action.payload);
        state.message = 'Custom event created successfully';
      })
      .addCase(getAllCustomEventsSuccess, (state, action) => {
        state.customEvents = action.payload;
      })
      .addCase(getCustomEventByIdSuccess, (state, action) => {
        state.customEvent = action.payload;
        state.message = null;
      })
      .addCase(deleteCustomEventSuccess, (state, action) => {
        state.customEvents = state.customEvents.filter(
          (event) => event.id !== action.payload
        );
        state.message = 'Custom event deleted successfully';
      })
      .addCase(updateCustomEventSuccess, (state, action) => {
        const updatedEvents = state.customEvents.map((event) =>
          event.id === action.payload.id ? action.payload : event
        );
        state.customEvents = updatedEvents;
      });
  },
});

export const {
  startLoading,
  endLoading,
  setError,
  setMessage,
} = customEventsSlice.actions;

export default customEventsSlice.reducer;
