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

const initialState = {
    customEvents: [],
    message: null,
    isLoading: false,
    error: null,
};

const CustomEventReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case ERROR:
            return { ...state, error: action.payload, isLoading: false };
        case MESSAGE:
            return { ...state, message: action.payload };
        case CREATE_CUSTOM_EVENT:
            return {
                ...state,
                customEvents: [...state.customEvents, action.payload],
                message: 'Custom event created successfully',
            };
        case GET_CUSTOM_EVENT_BY_ID:
            return { ...state, customEvent: action.payload, message: null };

        case GET_ALL_CUSTOM_EVENTS:
            return { ...state, customEvents: action.payload };
        case UPDATE_CUSTOM_EVENT:
            const updatedEvents = state.customEvents.map(event =>
                event.id === action.payload.id ? action.payload : event
            );
            return {
                ...state,
                customEvents: updatedEvents,
            };

        case DELETE_CUSTOM_EVENT:
            // Handle deleting a custom event, you may want to remove the event from the customEvents array.
            const filteredEvents = state.customEvents.filter(
                event => event.id !== action.payload
            );
            return {
                ...state,
                customEvents: filteredEvents,
                message: 'Custom event deleted successfully',
            };
        default:
            return state;
    }
};

export default CustomEventReducer;
