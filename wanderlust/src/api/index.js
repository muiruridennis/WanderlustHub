import axios from "axios";

export const URL_USER_AUTHENTICATE = "/auth/login";
export const URL_REFRESH_TOKEN = "/auth/refresh";
const baseUrl = `${import.meta.env.VITE_REACT_APP_API_URL}`;


const API = axios.create({
  baseURL: baseUrl, // Corrected typo: should be 'baseURL' instead of 'baseUrl'
  withCredentials: true
});

API.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // Handle various HTTP error responses
    if (error.response.status === 401) {
      try {
        // Attempt to refresh the token
        const refreshResponse = await axios.get(baseUrl + URL_REFRESH_TOKEN, {
          withCredentials: true,
        });
        // If token refresh is successful, retry the original request
        if (refreshResponse.status === 200) {
          return axios(error.config);
        }
      } catch (refreshError) {
        console.error("Failed to refresh token:", refreshError);
        // Handle refresh token error
        window.location.href = "/auth";
      }
    // } else if (error.response.status === 500) {
    //   alert("An error occurred. Please try again later.");
    // } else if (error.response.status === 404) {
    //   alert("The requested resource was not found.");
    } else {
      console.error("Rest promise error", error.response.data);
    }
    return Promise.reject(error);
  }
);
//auth
export const signUp = (formData) => API.post("/auth/register", formData);
export const signIn = (formData) => API.post("/auth/login", formData);
// export const googleOauth = () => API.post("google-authentication", );
export const logOut = () => API.post("/auth/logout");
export const getCurrentUserData = () => API.get("/auth/currentuser");
export const fetchUsers = () => API.get("/auth/users");
export const recoverPassword = (email) => API.post("/auth/forgotPassword", email);
export const resetPassword = (resetData) => API.patch("/auth/resetPassword", resetData);

// email-confirmation
export const confirmEmail = (token) => API.post("/email-confirmation/confirm", token);
export const resendConfirmEmail = () => API.post("/email-confirmation/resend-confirmation-link");

//mpesa
export const stkPush = (stkPushData) => API.post("/mpesa/stkpush", stkPushData);
export const fetchMpesas = () => API.get("/mpesa/all");
export const updateMpesa = (id, mpesa) => API.patch(`${"/mpesa/update"}/${id}`, mpesa);
export const deleteMpesa = (id) => API.delete(`${"/mpesa/delete"}/${id}`);
export const fetchMpesa = (id) => API.get(`${"/mpesa/mpesa"}/${id}`);
export const fetchMpesaBySearch = (searchQuery) => API.get(`/mpesa/search?group=${searchQuery}`);


//clients
export const createClient = (clientData) => API.post("/clients/create", clientData);
export const fetchClients = () => API.get("/clients/allclients");
export const updateClient = (id, client) => API.patch(`${"/clients/update"}/${id}`, client);
export const deleteClient = (id) => API.delete(`${"/clients/delete"}/${id}`);
export const fetchClient = (id) => API.get(`${"/clients/client"}/${id}`);
export const fetchClientsBySearch = (searchQuery) => API.get(`/clients/search?group=${searchQuery}`);

//Tours
export const createTour = (tourData) => API.post("destinations/create", tourData);
export const fetchTours = () => API.get("/tours/all");
export const fetchTour = (id) => API.get(`/tours/tour/${id}`)

//Directors
export const createDirectors = (directorsData) => API.post("/directors/create", directorsData);

// user
export const fetchAllUsers = () => API.get("/users/all");

// Avatar
export const fetchUserAvatar = (id) => API.get(`/localfile/${id}`)

// Kanban
export const createTask = (taskData) => API.post("/tasks/create", taskData);
export const fetchAllTasks = () => API.get("/tasks");
export const deleteTask = (id) => API.delete(`${"/tasks/delete"}/${id}`);
export const fetchTask = (id) => API.get(`${"/tasks"}/${id}`);
export const updateTask = (id, task) => API.patch(`${"/tasks/update"}/${id}`, task);

export const createTaskComment = (comment) => API.post("/tasks/task/comment", comment);
export const deleteTaskComment = (id) => API.delete(`${"/tasks/task/comment"}/${id}`);
export const fetchAllTaskComments = () => API.get("/tasks/task/comment");

export const createTaskChecklist = (checklist) => API.post("/tasks/task/checklist", checklist);
export const deleteTaskChecklist = (id) => API.delete(`${"/tasks/task/checklist/delete"}/${id}`);
export const fetchAllTaskChecklists = () => API.get("/tasks/task/checklist");
export const updateTaskChecklist = (id, checklist) => API.patch(`${"/tasks/task/update"}/${id}`, checklist);

// Bookings
export const createBooking = (bookingData) => API.post("/bookings/create", bookingData);
export const fetchBookings = () => API.get("/bookings/all");
export const fetchBooking = (id) => API.get(`/bookings/booking/${id}`);
export const updateBooking = (id, bookingData) => API.patch(`/bookings/update/${id}`, bookingData);
export const deleteBooking = (id) => API.delete(`/bookings/delete/${id}`);

// Custom Events
export const createCustomEvent = (customEventData) => API.post("/calendar/events", customEventData);
export const getAllCustomEvents = () => API.get("/calendar/events");
export const deleteCustomEvent = (id) => API.delete(`${"/calendar/events"}/${id}`);
export const getCustomEventById = (id) => API.get(`${"/calendar/events"}/${id}`);
export const updateCustomEvent = (id, eventUpdates) => API.put(`${"/calendar/events"}/${id}`, eventUpdates);
