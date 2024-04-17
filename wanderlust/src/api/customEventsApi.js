import { createApi } from '@reduxjs/toolkit/query/react';
import customBaseQuery from './customBaseQuery';

export const customEventsApi = createApi({
  reducerPath: 'customEventsApi',
  baseQuery: customBaseQuery,
  tagTypes: ['CustomEvents'],

  endpoints: (builder) => ({
    createCustomEvent: builder.mutation({
      query: (customEventData) => ({
        url: '/calendar-events/create',
        method: 'POST',
        body: customEventData,
      }),
      invalidatesTags: ['CustomEvents'],
    }),
    getAllCustomEvents: builder.query({
      query: () => ({
        url: '/calendar-events/events',
        method: 'GET',
      }),
      providesTags: ['CustomEvents'],
    }),
    getCustomEventById: builder.query({
      query: (id) => ({
        url: `/calendar-events/events/${id}`,
        method: 'GET',
      }),
      providesTags: ['CustomEvents'],
    }),

    deleteCustomEvent: builder.mutation({
      query: (id) => ({
        url: `/calendar-events/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['CustomEvents'],
    }),

    updateCustomEvent: builder.mutation({
      query: (customEventUpdates) => ({
        url: `/calendar-events/update/${customEventUpdates?.id}`,
        method: 'PATCH',
        body: customEventUpdates,
      }),
      invalidatesTags: ['CustomEvents'],
    }),


  }),
});

export const {
  useCreateCustomEventMutation,
  useGetAllCustomEventsQuery,
  useGetCustomEventByIdQuery,
  useDeleteCustomEventMutation,
  useUpdateCustomEventMutation
} = customEventsApi;
