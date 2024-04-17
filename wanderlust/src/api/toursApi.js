import { createApi  } from '@reduxjs/toolkit/query/react';
import customBaseQuery from './customBaseQuery';

export const toursApi = createApi({
    baseQuery: customBaseQuery,
    reducerPath: 'toursApi',
    tagTypes: ['Tours'],
    endpoints: (builder) => ({
        createTour: builder.mutation({
            query: (tourData) => api.createTour(tourData),
            invalidatesTags: ['Tours'],
        }),
        getTour: builder.query({
            query: (id) => ({
                url: `/tours/tour/${id}`,
                method: "GET", 
            }),
            providesTags: ['Tours'],
        }),
        getTours: builder.query({
            query: () => ({
                url: "/tours/all",
                method: "GET",
            }),
            providesTags: ['Tours'],
        }),
    }),
});

export const { useCreateTourMutation, useGetTourQuery, useGetToursQuery } = toursApi;
