import {
    START_LOADING, END_LOADING, STK_PUSH,
    ERROR, 
} from "../../Constants/actionTypes";
import * as api from '../../api/index.js';

export const stkPush = (stkPushData) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.stkPush(stkPushData);
        dispatch({ type: STK_PUSH, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        dispatch({ type: START_LOADING })
        dispatch({ type: ERROR, payload: error.response.data.message })
        dispatch({ type: END_LOADING })
    }
};