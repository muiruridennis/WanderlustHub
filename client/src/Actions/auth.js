import {
    AUTH, LOGOUT, LOGGED_USER, IS_FAILURE, ERROR, START_LOADING,
    END_LOADING, RECOVER_PASSWORD, RESET_PASSWORD, CONFIRM_EMAIL, RESEND_CONFIRM_EMAIL
} from "../Constants/actionTypes";
import { ROUTES } from "../Constants/routes"
import * as api from '../Api/index.js';

export const signin = (formData, navigate) => async dispatch => {

    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.signIn(formData);
        dispatch({ type: AUTH, data });

        dispatch({ type: END_LOADING });
        navigate(ROUTES.main)
    } catch (error) {
        dispatch({ type: START_LOADING })
        dispatch({ type: ERROR, payload: error.response.data.message })
        setTimeout(() => {
            dispatch({ type: ERROR, payload: null }); // Set the message to null after a delay
        }, 3000); // Delay in milliseconds (adjust as needed)
        dispatch({ type: END_LOADING })
    }
};

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        //sign up the user
        dispatch({ type: START_LOADING })
        const { data } = await api.signUp(formData);
        dispatch({ type: AUTH, data });
        dispatch({ type: END_LOADING });
        navigate(ROUTES.main)
    } catch (error) {
        dispatch({ type: START_LOADING })
        dispatch({ type: ERROR, payload: error.response.data.message })
        dispatch({ type: END_LOADING })
    }

};
export const recoverPassword = (email) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.recoverPassword(email);
        dispatch({ type: RECOVER_PASSWORD, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        dispatch({ type: ERROR, payload: error.response.data.message })
        dispatch({ type: END_LOADING })
    }
}
export const resetPassword = (resetData) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.resetPassword(resetData);
        dispatch({ type: RESET_PASSWORD, data });
        dispatch({ type: END_LOADING })
    } catch (error) {
        dispatch({ type: ERROR, payload: error.response.data.message })
        dispatch({ type: END_LOADING })
    }
}
export const confirmEmail = (token) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.confirmEmail(token);
        dispatch({ type: CONFIRM_EMAIL, data });
        dispatch({ type: END_LOADING })
    } catch (error) {
        dispatch({ type: ERROR, payload: error.response.data.message })
        dispatch({ type: END_LOADING })
    }
}
export const resendConfirmEmail = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.resendConfirmEmail();
        dispatch({ type: RESEND_CONFIRM_EMAIL, data });
        dispatch({ type: END_LOADING })
    } catch (error) {
        dispatch({ type: ERROR, payload: error.response.data.message })
        dispatch({ type: END_LOADING })
    }
}

export const logOut = () => async (dispatch) => {
    try {
        const { data } = await api.logOut();
        dispatch({ type: LOGOUT, payload: data.msg });
        setTimeout(() => {
            dispatch({ type: LOGOUT, payload: null }); 
        }, 3000); 
    } catch (error) {
        dispatch({ type: START_LOADING })
        dispatch({ type: ERROR, payload: error.response.data.message })
        dispatch({ type: END_LOADING })
    }
};

export const getUthenticatedUser = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.getUthenticatedUser();
        dispatch({ type: LOGGED_USER, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        dispatch({ type: START_LOADING })
        dispatch({ type: ERROR, payload: error.response.data.message })
        dispatch({ type: END_LOADING })
    }
}