import { FETCH_USERS, START_LOADING, END_LOADING } from "../Constants/actionTypes";
import * as api from '../Api/index.js';

export const fetchUsers = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const{ data} = await api.fetchAllUsers();
        dispatch({ type: FETCH_USERS, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error)
    }


};