import { createApi } from '@reduxjs/toolkit/query/react';
import customBaseQuery from './customBaseQuery';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: customBaseQuery,
    tagTypes: ['Auth'],
    endpoints: (builder) => ({

        signIn: builder.mutation({
            query: (formData) => ({
                url: '/auth/login',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['Auth'],
        }),

        signUp: builder.mutation({
            query: (formData) => ({
                url: '/auth/register',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['Auth'],
        }),

        logOut: builder.mutation({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
            }),
            invalidatesTags: ['Auth'],
        }),

        resetPassword: builder.mutation({
            query: (resetData) => ({
                url: '/auth/resetPassword',
                method: 'PATCH',
                body: resetData,
            }),
        }),

        recoverPassword: builder.mutation({
            query: (email) => ({
                url: '/auth/recoverPassword',
                method: 'POST',
                body: email,
            }),
        }),

        getCurrentUserData: builder.query({
            query: () => ({
                url: '/auth/currentuser',
                method: 'GET',
            }),
            providesTags: ['Auth'],
        }),
        
    }),
});

export const {
    useSignInMutation,
    useSignUpMutation,
    useLogOutMutation,
    useResetPasswordMutation,
    useGetCurrentUserDataQuery,
    useRecoverPasswordMutation
} = authApi;

