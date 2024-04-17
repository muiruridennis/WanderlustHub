import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api/api';

const initialState = {
  clients: [],
  client: null,
  isLoading: false,
  isSearching: true,
};

export const createClient = createAsyncThunk(
  'clients/createClient',
  async (clientData, { dispatch }) => {
    try {
      const { data } = await api.createClient(clientData);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const fetchClients = createAsyncThunk(
  'clients/fetchClients',
  async (_, { dispatch }) => {
    try {
      dispatch(startLoading());
      const { data } = await api.fetchClients();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      dispatch(endLoading());
    }
  }
);

export const deleteClient = createAsyncThunk(
  'clients/deleteClient',
  async (id, { dispatch }) => {
    try {
      await api.deleteClient(id);
      return id;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const updateClient = createAsyncThunk(
  'clients/updateClient',
  async ({ id, client }, { dispatch }) => {
    try {
      const { data } = await api.updateClient(id, client);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const getClient = createAsyncThunk(
  'clients/getClient',
  async (id, { dispatch }) => {
    try {
      dispatch(startLoading());
      const { data } = await api.fetchClient(id);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      dispatch(endLoading());
    }
  }
);

export const getClientsBySearch = createAsyncThunk(
  'clients/getClientsBySearch',
  async (searchQuery, { dispatch }) => {
    try {
      dispatch(startSearching());
      const { data } = await api.fetchClientsBySearch(searchQuery);
      return data;
    } catch (error) {
      console.log(error.message);
      throw error;
    } finally {
      dispatch(endSearching());
    }
  }
);

const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createClient.fulfilled, (state, action) => {
        state.clients.push(action.payload);
      })
      .addCase(fetchClients.fulfilled, (state, action) => {
        state.clients = action.payload;
      })
      .addCase(deleteClient.fulfilled, (state, action) => {
        state.clients = state.clients.filter((client) => client.id !== action.payload);
      })
      .addCase(updateClient.fulfilled, (state, action) => {
        const updatedIndex = state.clients.findIndex((client) => client.id === action.payload.id);
        if (updatedIndex !== -1) {
          state.clients[updatedIndex] = action.payload;
        }
      })
      .addCase(getClient.fulfilled, (state, action) => {
        state.client = action.payload;
      })
      .addCase(getClientsBySearch.fulfilled, (state, action) => {
        state.clients = action.payload;
      });
  },
});

export const { startLoading, endLoading, startSearching, endSearching } = clientsSlice.actions;

export default clientsSlice.reducer;
