import { createApi } from '@reduxjs/toolkit/query/react';
import customBaseQuery from './customBaseQuery';

export const bookingsApi = createApi({
    reducerPath: 'bookingsApi',
    baseQuery: customBaseQuery,
    tagTypes: ['Bookings'],
    endpoints: (builder) => ({
        fetchBookings: builder.query({
            query: () => '/bookings/all',
            providesTags: ['Bookings'],
        }),
        createBooking: builder.mutation({
            query: (bookingData) => ({
                url: '/bookings',
                method: 'POST',
                body: bookingData,
            }),
            invalidatesTags: ['Bookings'],
        }),
        deleteBooking: builder.mutation({
            query: (id) => ({
                url: `/bookings/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Bookings'],

        }),
        updateBooking: builder.mutation({
            query: ({ id, booking }) => ({
                url: `/bookings/${id}`,
                method: 'PUT',
                body: booking,
            }),
            invalidatesTags: ['Bookings'],
        }),
    }),
});

export const {
    useFetchBookingsQuery,
    useCreateBookingMutation,
    useDeleteBookingMutation,
    useUpdateBookingMutation,
} = bookingsApi;
