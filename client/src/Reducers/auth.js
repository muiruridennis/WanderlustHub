import { AUTH, LOGOUT, LOGGED_USER } from "../Constants/actionTypes";

const AuthReducer = (state = { authData: null }, action) => {

    switch (action.type) {
        case AUTH:
            return { ...state, authData: action?.data };

        case LOGOUT:
            return { ...state, authData: action?.data };
        case LOGGED_USER:
            return { ...state, authData: action.payload };
        default:
            return state;
    }
}
export default AuthReducer;
