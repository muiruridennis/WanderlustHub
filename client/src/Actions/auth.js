import {
    AUTH, LOGOUT, LOGGED_USER, IS_FAILURE, ERROR,
    END_LOADING, RECOVER_PASSWORD, RESET_PASSWORD
} from "../Constants/actionTypes";
import { ROUTES } from "../Constants/routes"
import * as api from '../Api/index.js';

export const signin = (formData, navigate) => async dispatch => {

    try {
        //logging in the user
        const { data } = await api.signIn(formData);
        dispatch({ type: AUTH, data });
        dispatch({ type: END_LOADING });
        navigate(ROUTES.main)
    } catch (error) {
        dispatch({ type: IS_FAILURE});
        dispatch({ type: ERROR, payload: error.response.data.message })
    }
};

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        //sign up the user
        const { data } = await api.signUp(formData);
        dispatch({ type: AUTH, data });
        dispatch({ type: END_LOADING });
        navigate(ROUTES.main)
    } catch (error) {
        dispatch({ type: IS_FAILURE})
        dispatch({ type: ERROR, payload: error.response.data.message })
    }

};
export const recoverPassword = (email) => async (dispatch) => {
    try {
        const { data } = await api.recoverPassword(email);
        dispatch({ type: RECOVER_PASSWORD, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        dispatch({ type: ERROR, payload: error.response.data.message })
        console.log(error.response.data)
    }
}
export const resetPassword = (resetData) => async (dispatch) => {
    try {
        const { data } = await api.resetPassword(resetData);
        dispatch({ type: RESET_PASSWORD, data });
    } catch (error) {
        dispatch({ type: ERROR, payload: error.response.data.message })
        console.log(error.response.data.message)
    }
}

export const logOut = async (dispatch) => {
    try {
        const { data } = await api.logOut();
        dispatch({ type: LOGOUT, data });
    } catch (error) {
        console.log(error)
    }
}

export const fetchLoggedUser = () => async (dispatch) => {
    try {
        const { data } = await api.fetchLoggedUser();
        dispatch({ type: LOGGED_USER, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error)
    }
}