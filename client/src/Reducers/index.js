import { combineReducers } from "redux";

import auth from "./auth";
import clients from "./clients";
import tourClient from "./tourClient";
import directors from "./directors";
import tours from "./tours";
import users from "./users";
import avatar from "./avatar";
import mpesa from "./mpesa";
import Kanban from "./kanban";

export default combineReducers(
    {
        auth,
        clients,
        tourClient,
        tours,
        directors, 
        users,
        avatar,
        mpesa,
        Kanban
    });