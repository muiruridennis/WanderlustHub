import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseUrl = `${import.meta.env.VITE_SERVER_API_URL}`;

const baseQuery = fetchBaseQuery({
     baseUrl, 
     credentials: 'include'
    });

const customBaseQuery = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    // Check if the request returns a 401 Unauthorized error
    if (result.error && result.error.status === 401) {
        try {
            // Attempt to refresh the token by sending a request to the server
            // Assuming there's an endpoint '/auth/refresh-token' to handle token refresh
            const refreshResponse = await fetch(`${baseUrl}auth/refresh-token`, {
                method: 'GET',
                credentials: 'include'
            });
            // const refreshResponse = baseQuery('/auth/refresh-token', api, extraOptions)

            // If the token refresh is successful, retry the initial query
            if (refreshResponse.status === 200) {
                result = await baseQuery(args, api, extraOptions);
            }
        } catch (error) {
            window.location.href = "/auth";
            console.error('Failed to refresh token:', error);
            throw error;
        }
    }

    return result;
};

export default customBaseQuery;
