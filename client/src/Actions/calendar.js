import {
    START_LOADING,
    END_LOADING,
    ERROR,
    MESSAGE,
    CREATE_CUSTOM_EVENT,
    GET_CUSTOM_EVENT_BY_ID,
    GET_ALL_CUSTOM_EVENTS,
    UPDATE_CUSTOM_EVENT,
    DELETE_CUSTOM_EVENT

} from "../Constants/actionTypes";
import * as api from '../Api/index.js';

const setMessage = (dispatch, message, duration = 3000) => {
    dispatch({ type: MESSAGE, payload: message });

    setTimeout(() => {
        dispatch({ type: MESSAGE, payload: null });
    }, duration);
};

export const createCustomEvent = (customEventData) => async (dispatch) => {
    try {
        const { data } = await api.createCustomEvent(customEventData);
        dispatch({ type: CREATE_CUSTOM_EVENT, payload: data });
    } catch (error) {
        console.log(error);
    }
}
export const getAllCustomEvents = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.getAllCustomEvents();
        dispatch({ type: GET_ALL_CUSTOM_EVENTS, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        dispatch({ type: START_LOADING })
        dispatch({ type: ERROR, payload: error.response.data.message })
        dispatch({ type: END_LOADING })
    }
};

export const getCustomEventById = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.getCustomEventById(id);
        dispatch({ type: GET_CUSTOM_EVENT_BY_ID, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        dispatch({ type: START_LOADING })
        dispatch({ type: ERROR, payload: error.response.data.message })
        dispatch({ type: END_LOADING })
    }
};


export const deleteCustomEvent = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const { data } = await api.deleteCustomEvent(id);

        dispatch({ type: DELETE_CUSTOM_EVENT, payload: id });
        dispatch({ type: MESSAGE, payload: data.message });
        setTimeout(() => {
            dispatch({ type: MESSAGE, payload: null }); // Set the message to null after a delay
        }, 3000); // Delay in milliseconds (adjust as needed)
        dispatch({ type: END_LOADING });
    } catch (error) {
        const errorMessage = error.response && error.response.data ? error.response.data.message : 'Unknown error occurred';
        dispatch({ type: START_LOADING });
        dispatch({ type: ERROR, payload: errorMessage });
        setTimeout(() => {
            dispatch({ type: ERROR, payload: null }); 
        }, 3000); 
        dispatch({ type: END_LOADING });
    }
};
export const updateCustomEvent = (id, customEventUpdates) => async (dispatch) => {
    try {
        const { data } = await api.updateCustomEvent(id, customEventUpdates);
        const{updatedEvent, message}= data
        dispatch({ type: UPDATE_CUSTOM_EVENT, payload: updatedEvent });
        setMessage(dispatch, message);
    } catch (error) {
        console.log(error);
        setMessage(dispatch, "An error occurred.", 3000);
    }
};