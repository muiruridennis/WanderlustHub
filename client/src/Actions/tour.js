import {  START_LOADING, END_LOADING, DELETE_TOUR, UPDATE_TOUR, CREATE_TOUR, FETCH_TOURS } from "../Constants/actionTypes";
import * as api from '../Api/index.js';

export const createTour = (tourData) => async (dispatch) => {
    try {
        const { data } = await api.createTour(tourData);
        console.log("action data", data);
        dispatch({ type: CREATE_TOUR, payload: data })
    } catch (error) {
        console.log(error);
    }

};

export const fetchTours = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const{ data} = await api.fetchTours();
        dispatch({ type: FETCH_TOURS, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error)
    }
};