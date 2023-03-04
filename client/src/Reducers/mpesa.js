import {
    START_LOADING, END_LOADING, STK_PUSH,
    ERROR, END_SEARCHING
} from "../Constants/actionTypes";

const initialStates = { mpesa: [], isLoading: true, error: null };

const AuthReducer = (state = initialStates, action) => {

    switch (action.type) {
        case END_LOADING:
            return { ...state, isLoading: false };
        case START_LOADING:
            return { ...state, isLoading: true };
        case ERROR:
            return { ...state, error: action.payload };;
        case STK_PUSH:
            return { ...state, authData: action?.data };
        
        default:
            return state;
    }
}
export default AuthReducer;
