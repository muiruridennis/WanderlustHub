import {
    CREATE_CLIENT, FETCH_CLIENTS,
    START_LOADING, END_LOADING, DELETE_CLIENT,
    UPDATE_CLIENT, FETCH_CLIENT, FETCH_CLIENTS_BY_SEARCH,
    START_SEARCHING, END_SEARCHING
}
    from "../Constants/actionTypes";

const initialState = { clients: [], isLoading: false,  isSearching: true }

export default function (state = initialState, action) {
    switch (action.type) {
        case START_SEARCHING:
            return { ...state, isSearching: true };
        case END_SEARCHING:
            return { ...state, isSearching: false };
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case CREATE_CLIENT:
            return { ...state, clients: [...state.clients, action.payload] };
        case FETCH_CLIENT:
            return { ...state, client: action.payload }; //client is sent from backend
        case FETCH_CLIENTS:
            return {
                ...state,
                clients: action.payload,
                isLoading: false,
            };
        case FETCH_CLIENTS_BY_SEARCH:
            return {
                ...state,
                clients: action.payload,
                isSearching: false,
            };
        case DELETE_CLIENT:
            let clientsAfterDelete = state.clients.filter((client) => {
                return client.id != action.payload
            })
            return {
                ...state,
                clients: clientsAfterDelete,
                isLoading: false,
            }
        case UPDATE_CLIENT:
            return {
                ...state,
                clients: state.clients.map((client) => client.id === action.payload.id ? action.payload : client)
                //if client is updated it should return a new updated array of clients otherwise it should return client as was 
            }
        default:
            return state;
    }
};