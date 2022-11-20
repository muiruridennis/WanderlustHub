import {  START_LOADING, END_LOADING, DELETE_TOUR, UPDATE_TOUR, CREATE_TOUR, FETCH_TOURS } from "../Constants/actionTypes";
const initialState = { tours: [], isLoading: true }

export default function (state = initialState, action) {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case CREATE_TOUR:
            return { ...state, tours: [...state.tours, action.payload] };
        case FETCH_TOURS:
            return {
                ...state,
                tours: action.payload,
                isLoading: false
            };
        case DELETE_TOUR:
            let toursAfterDelete = state.tours.filter((tour) => {
                return tour.id != action.payload
            })
            return {
                ...state,
                tours: toursAfterDelete,
                isLoading: false
            }
        case UPDATE_TOUR:
            return {
                ...state,
                tours: state.tours.map((tour) => tour.id === action.payload.id ? action.payload : tour)
            //if tour is updated it should return a new updated array of tours otherwise it should return tour as was 
            }
        default:
            return state;
    }
};