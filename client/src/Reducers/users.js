import {START_LOADING, END_LOADING, FETCH_USERS} from "../Constants/actionTypes";

const initialState = { users: [], isLoading: true }

export default function (state = initialState, action) {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
};