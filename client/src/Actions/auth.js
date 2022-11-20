
import { AUTH, LOGOUT, LOGGED_USER } from "../Constants/actionTypes";
import {ROUTES} from "../Constants/routes"
import * as api from '../Api/index.js';

export const signin = (formData, navigate) => async dispatch => {
    
    try {
        //logging in the user
        const { data } = await api.signIn(formData);
        dispatch({ type: AUTH, data });
        navigate(ROUTES.main) 
    } catch (error) {
        console.log(error)

    }
};

export const signup = (formData, navigate) => async (dispatch) => {
    try {
        //sign up the user
        const {data} = await api.signUp(formData);
        dispatch({type: AUTH, data}); 
        navigate(ROUTES.main)
    } catch (error) {
        console.log(error)
        
    }

};
export const logOut = async (dispatch) => {
    try {
       const {data}= await api.logOut();
       dispatch({type:LOGOUT, data}); 
        console.log("logOutMessage", data);
       
    } catch (error) {
        console.log(error)
    }
}

export const fetchLoggedUser = ()=> async (dispatch) => {
    try {
        const { data} = await api.fetchLoggedUser();
        dispatch({ type :LOGGED_USER, payload: data})
    } catch (error) {
        console.log(error)
    }
}