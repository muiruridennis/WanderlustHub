import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api/api';

const initialState = { users: [], isLoading: false };

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { dispatch }) => {
    try {
      dispatch(startLoading());
      const { data } = await api.fetchAllUsers();
      dispatch(endLoading());
      return data;
    } catch (error) {
      console.error("Error fetching users:", error);
      dispatch(endLoading());
      throw error;
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    startLoading: state => {
      state.isLoading = true;
    },
    endLoading: state => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      });
  },
});

export const { startLoading, endLoading } = userSlice.actions;
export default userSlice.reducer;
