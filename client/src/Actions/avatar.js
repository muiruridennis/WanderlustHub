import {FETCH_AVATAR } from "../Constants/actionTypes";
import * as api from '../Api/index.js';

export const fetchUserAvatar = (id) => async (dispatch) => {
    try {
        await api.fetchUserAvatar(id);
        dispatch({ type: FETCH_AVATAR, payload: id })
    } catch (error) {
        console.log(error);
    }
};