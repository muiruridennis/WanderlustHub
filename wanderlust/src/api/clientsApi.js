import { createApi } from '@reduxjs/toolkit/query/react';
import customBaseQuery from './customBaseQuery';

export const clientsApi = createApi({
  reducerPath: 'clientsApi',
  baseQuery: customBaseQuery,
  tagTypes: ['Clients'],
  endpoints: (builder) => ({
    createClient: builder.mutation({
      query: (clientData) => ({
        url: '/clients',
        method: 'POST',
        body: clientData,
      }),
      invalidatesTags: ['Clients'],
    }),
    fetchClients: builder.query({
      query: () => '/clients',
    }),
    deleteClient: builder.mutation({
      query: (id) => ({
        url: `/clients/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Clients'],
    }),
    updateClient: builder.mutation({
      query: ({ id, client }) => ({
        url: `/clients/${id}`,
        method: 'PUT',
        body: client,
      }),
      invalidatesTags: ['Clients'],
    }),
    getClient: builder.query({
      query: (id) => `/clients/${id}`,
    }),
    getClientsBySearch: builder.query({
      query: (searchQuery) => `/clients/search/${searchQuery}`,
    }),
  }),
});

export const {
  useCreateClientMutation,
  useFetchClientsQuery,
  useDeleteClientMutation,
  useUpdateClientMutation,
  useGetClientQuery,
  useGetClientsBySearchQuery,
} = clientsApi;
