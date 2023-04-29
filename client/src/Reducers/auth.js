import {
    AUTH, LOGOUT, LOGGED_USER,  ERROR,
    END_LOADING, RECOVER_PASSWORD, RESET_PASSWORD, CONFIRM_EMAIL, RESEND_CONFIRM_EMAIL,START_LOADING
} from "../Constants/actionTypes";
const initialStates ={ authData: {}, isLoading: false, error: null, user: null,}

const AuthReducer = (state = initialStates, action) => {

    switch (action.type) {
        case END_LOADING:
            return { ...state, isLoading: false };
        case START_LOADING:
            return { ...state, isLoading: true };
        case ERROR:
            return { ...state, error: action.payload };
        case AUTH:
            return { ...state, authData: action?.data };
        case RECOVER_PASSWORD:
            return { ...state, authData: action.payload, };
        case RESET_PASSWORD:
            return { ...state, authData: action?.data };
        case CONFIRM_EMAIL:
            return { ...state, authData: action?.data };
        case LOGOUT:
            return { ...state, authData: action?.data };
        case RESEND_CONFIRM_EMAIL:
            return { ...state, authData: action?.data };
        case LOGGED_USER:
            return { ...state, user: action?.payload };
        default:
            return state;
    }
}
export default AuthReducer;
