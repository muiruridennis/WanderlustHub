import { createApi } from '@reduxjs/toolkit/query/react';
import customBaseQuery from './customBaseQuery';

export const emailApi = createApi({
    reducerPath: 'emailApi',
    baseQuery: customBaseQuery,
    tagTypes: ['Email'],
    endpoints: (builder) => ({
        confirmEmail: builder.mutation({
            query: (token) => ({
                url: '/email-confirmation/confirm',
                method: 'POST',
                body: token,
            }),
        }),
        resendConfirmEmail: builder.mutation({
            query: () => ({
                url: '/email-confirmation/resend-confirmation-link',
                method: 'POST',
            }),
        }),

    }),
});

export const {
    useConfirmEmailMutation,
    useResendConfirmEmailMutation,
} = emailApi;

