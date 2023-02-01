import {
    AUTH, LOGOUT, LOGGED_USER, IS_FAILURE, ERROR,
    END_LOADING, RECOVER_PASSWORD, RESET_PASSWORD
} from "../Constants/actionTypes";
const initialStates ={ authData: {}, isLoading: true, error: null, user: null, isSuccess: true}

const AuthReducer = (state = initialStates, action) => {

    switch (action.type) {
        case END_LOADING:
            return { ...state, isLoading: false };
        case IS_FAILURE:
            return { ...state, isSuccess: false };
        case ERROR:
            return { ...state, error: action.payload };;
        case AUTH:
            return { ...state, authData: action?.data };
        case RECOVER_PASSWORD:
            return { ...state, authData: action.payload, };
        case RESET_PASSWORD:
            return { ...state, authData: action?.data };
        case LOGOUT:
            return { ...state, authData: action?.data };
        case LOGGED_USER:
            return { ...state, user: action?.payload };
        default:
            return state;
    }
}
export default AuthReducer;
