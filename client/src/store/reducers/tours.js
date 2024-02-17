import { START_LOADING, END_LOADING, DELETE_TOUR, UPDATE_TOUR, CREATE_TOUR, FETCH_TOURS, ERROR, FETCH_TOUR } from "../../Constants/actionTypes";
const initialState = { tours: [], isLoading: false, error: null, }

export default function (state = initialState, action) {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case CREATE_TOUR:
            return { ...state, tours: [...state.tours, action.payload] };
        case FETCH_TOURS:
            return { ...state, tours: action.payload };
        case FETCH_TOUR:
            return { ...state, tour: action.payload };
        case DELETE_TOUR:
            let toursAfterDelete = state.tours.filter((tour) => {
                return tour.id !== action.payload
            })
            return { ...state, tours: toursAfterDelete, }
        case UPDATE_TOUR:
            return {
                ...state,
                tours: state.tours.map((tour) => tour.id === action.payload.id ? action.payload : tour)
                //if tour is updated it should return a new updated array of tours otherwise it should return tour as was 
            };
        case ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};