import axios from "axios";
import {Navigate } from "react-router-dom";

export const URL_USER_AUTHENTICATE = "/auth/login";
export const URL_REFRESH_TOKEN = "/auth/refresh";
const BASE_URL = "http://localhost:5000";

const API = axios.create({
    baseUrl: BASE_URL,
    withCredentials: true
});

API.interceptors.response.use((response) => {
    return response
},
    (error) => {
        //Catches 403 error from our axios request
        console.log("INTERCEPTOR RES - ERROR", error.response.data);
        // Store the original request
        const originalReq = error.config;
        // Check if the response is having error code as 401
        // and is not a retry (to avoid infinite retries) and 
        // avoid checking on the authenticate URL as it may be due to user
        // entering wrong password.
        if (error.response.status === 401 &&
            !originalReq._retry &&
            error.response.config.url !== URL_USER_AUTHENTICATE) {
            // Set the retry flag to true
            originalReq._retry = true;
            // Call the refresh_token API
            return axios.get(BASE_URL + URL_REFRESH_TOKEN, {})
                .then((res) => {

                    // If the response is success , then log
                    if (res.data.status === "success") {
                        // Log the message
                        console.log("token refreshed");
                        // Return the original request. ie. retry
                        return axios(originalReq);
                    }
                }).catch((error) => { window.location.href = "/"});
        }
        // Log
        console.log("Rest promise error",  error.response.data);

        // If not matched , then return the error
        return Promise.reject(error);
    }
);
//auth
export const signUp = (formData) => API.post("/auth/register", formData);
export const signIn = (formData) => API.post("/auth/login", formData);
export const logOut = () => API.post("/auth/logout");
export const fetchLoggedUser = () => API.get("/auth/loggeduser");
export const fetchUsers = () => API.get("/auth/")

//clients
export const createClient = (clientData) => API.post("/clients/create", clientData);
export const fetchClients = () => API.get("/clients/allclients");
export const updateClient = (id, client) => API.patch(`${"/clients/update"}/${id}`, client);
export const deleteClient = (id) => API.delete(`${"/clients/delete"}/${id}`);
export const fetchClient = (id) => API.get(`${"/clients/client"}/${id}`);
export const fetchClientsBySearch = (searchQuery) => API.get(`/clients/search?group=${searchQuery}`);

//Tours
export const createTour = (tourData) => API.post("destinations/create", tourData);
export const fetchTours = () => API.get("/destinations/alldestinations");

//Directors
export const createDirectors = (directorsData) => API.post("/directors/create", directorsData);

// user
export const fetchAllUsers = () => API.get("/users/all");

// Avatar
export const fetchUserAvatar = (id) => API.get(`/localfile/${id}`)