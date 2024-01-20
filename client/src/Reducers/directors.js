import { CREATE_DIRECTOR, FETCH_DIRECTORS, START_LOADING, END_LOADING, DELETE_DIRECTOR, UPDATE_DIRECTOR } from "../Constants/actionTypes";

const initialState = { directors: [], isLoading: false }

export default function (state = initialState, action) {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case CREATE_DIRECTOR:
            return { ...state, directors: [...state.directors, action.payload] };
        case FETCH_DIRECTORS:
            return {
                ...state,
                directors: action.payload,
                isLoading: false
            };
        case DELETE_DIRECTOR:
            let directorsAfterDelete = state.directors.filter((director) => {
                return director.id != action.payload
            })
            return {
                ...state,
                directors: directorsAfterDelete,
                isLoading: false
            }
        case UPDATE_DIRECTOR:
            return {
                ...state,
                directors: state.directors.map((director) => director.id === action.payload.id ? action.payload : director)
            //if a director is updated it should return a new updated array of directors otherwise it should return director as it was 
            }
        default:
            return state;
    }
};