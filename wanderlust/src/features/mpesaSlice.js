import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api/api';

const initialState = {
  mpesa: [],
  isTransacting: true,
  mpesaError: null,
};

export const stkPush = createAsyncThunk(
  'auth/stkPush',
  async (stkPushData) => {
    try {
      const { data } = await api.stkPush(stkPushData);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const mpesaSlice = createSlice({
  name: 'mpesa',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(stkPush.pending, (state) => {
      state.isTransacting = true;
    });
    builder.addCase(stkPush.fulfilled, (state, action) => {
      state.authData = action.payload;
      state.isTransacting = false;
    });
    builder.addCase(stkPush.rejected, (state, action) => {
      state.mpesaError = action.error.message;
      state.isTransacting = false;
    });
  },
});


export default mpesaSlice.reducer;
