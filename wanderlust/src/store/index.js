import { configureStore, combineReducers } from '@reduxjs/toolkit';
import mpesaReducer from "../api/mpesaApi"
import { authApi } from '../api/authApi';
import { todoApi } from "../api/todoApi";
import { bookingsApi } from "../api/bookingApi";
import { customEventsApi } from "../api/customEventsApi";
import { clientsApi } from "../api/clientsApi";
import { kanbanApi } from "../api/kanbanApi";
import { toursApi } from "../api/toursApi";
import { usersApi } from "../api/usersApi";
import { emailApi } from "../api/emailApi"


const store = configureStore({
  reducer: {
    mpesa: mpesaReducer,
    [authApi.reducerPath]: authApi.reducer,
    [todoApi.reducerPath]: todoApi.reducer,
    [bookingsApi.reducerPath]: bookingsApi.reducer,
    [clientsApi.reducerPath]: clientsApi.reducer,
    [kanbanApi.reducerPath]: kanbanApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [toursApi.reducerPath]: toursApi.reducer,
    [customEventsApi.reducerPath]: customEventsApi.reducer,
    [emailApi.reducerPath]: emailApi.reducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      todoApi.middleware,
      bookingsApi.middleware,
      clientsApi.middleware,
      kanbanApi.middleware,
      usersApi.middleware,
      toursApi.middleware,
      customEventsApi.middleware,
      emailApi.middleware
    ),
});

export default store;
