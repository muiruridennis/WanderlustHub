import {FETCH_AVATAR, START_LOADING, END_LOADING } from "../Constants/actionTypes";

const initialState = {avatars: [], isLoading: false };
export default function (state = initialState, action) {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        // case CREATE_AVATAR:
        //     return { ...state, avatars: [...state.avatars, action.payload] };
        // case DELETE_AVATAR:
        //     let clientsAfterDelete = state.avatars.filter((client) => {
        //         return client.id != action.payload
        //     })
        //     return {
        //         ...state,
        //         clients: clientsAfterDelete,
        //         isLoading: false
        //     }
        // case UPDATE_AVATAR:
        //     return {
        //         ...state,
        //         clients: state.clients.map((client) => client.id === action.payload.id ? action.payload : client)
        //     //if client is updated it should return a new updated array of clients otherwise it should return client as was 
        //     }
        case FETCH_AVATAR:
            return {
                ...state,
                avatar: action.payload
            }
        default:
            return state;
    }
};