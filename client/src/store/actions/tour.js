import {  START_LOADING, END_LOADING, DELETE_TOUR, UPDATE_TOUR, CREATE_TOUR, FETCH_TOURS, ERROR, FETCH_TOUR } from "../../Constants/actionTypes";
import * as api from '../../api/index.js';

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
        dispatch({ type: START_LOADING })
        dispatch({ type: ERROR, payload: error.response.data.message })
        dispatch({ type: END_LOADING })
    }
};
export const getTour = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const{ data} = await api.fetchTour(id);
        dispatch({ type: FETCH_TOUR, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        dispatch({ type: START_LOADING })
        dispatch({ type: ERROR, payload: error.response.data.message })
        dispatch({ type: END_LOADING })
    }
};