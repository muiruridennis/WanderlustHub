import { createApi } from '@reduxjs/toolkit/query/react';
import customBaseQuery from './customBaseQuery';


export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: customBaseQuery,
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    fetchUsers: builder.query({
      query: () => ({
        url: "/users/all",
        method: "GET",
    }),
      providesTags: ['Users'],
    }),
  }),
});

export const { useFetchUsersQuery } = usersApi;
