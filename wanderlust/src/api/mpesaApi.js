import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define async thunk
export const stkPush = createAsyncThunk(
  'mpesa/stkPush',
  async (stkPushData) => {
    try {
      const response = await api.stkPush(stkPushData);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const initialState = {
  mpesa: [],
  isTransacting: false,
  mpesaError: null,
};

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
