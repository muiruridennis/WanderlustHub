import { configureStore, combineReducers } from '@reduxjs/toolkit';



import authSlice from "./slices/authSlice";
import clients from "./slices/clientsSlice";
import tourClient from "./slices/tourClientSlice";
import tourSlice from "./slices/toursSlice";
import users from "./slices/usersSlice";
import mpesa from "./slices/mpesaSlice";
import Kanban from "./slices/kanbanSlice";
import Bookings from "./slices/bookingsSlice";

const rootReducer = combineReducers({
  auth:authSlice,
  tour:tourSlice,
  clients,
  tourClient,
  users,
  mpesa,
  Kanban,
  Bookings,
  // CustomEvents,

})

const store = configureStore({
  reducer: rootReducer,
});

export default store;

