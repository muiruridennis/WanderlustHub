import { CREATE_CLIENT, FETCH_CLIENTS, 
    START_LOADING, END_LOADING, DELETE_CLIENT,FETCH_CLIENTS_BY_SEARCH,
     UPDATE_CLIENT, FETCH_CLIENT, START_SEARCHING, END_SEARCHING } from "../Constants/actionTypes";
import * as api from '../Api/index.js';

export const createClient = (clientdata) => async (dispatch) => {
    try {
        const { data } = await api.createClient(clientdata);
        dispatch({ type: CREATE_CLIENT, payload: data })
    } catch (error) {
        console.log(error);
    }
};
export const fetchClients = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const{ data} = await api.fetchClients();
        dispatch({ type: FETCH_CLIENTS, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error)
    }
};

export const deleteClient = (id) => async (dispatch) => {
    try {
        await api.deleteClient(id);
        dispatch({ type: DELETE_CLIENT, payload: id })
    } catch (error) {
        console.log(error);
    }

};
export const updateClient = (id, client) => async (dispatch) => {
    try {
        const { data } = await api.updateClient(id, client);
        dispatch({ type: UPDATE_CLIENT, payload : data })
    } catch (error) {
        console.log(error);
    }

};
export const getClient = (id) => async (dispatch) => {
    try {
        dispatch({type:START_LOADING});
        const {data} = await api.fetchClient(id);
        dispatch({type: FETCH_CLIENT, payload: data});
        dispatch({type:END_LOADING});
        
    } catch (error) {
        console.log(error);
    }
};

export const getClientsBySearch =  (searchQuery)=> async (dispatch)=>{
    try {
        dispatch({type:START_SEARCHING });
        const {data } = await api.fetchClientsBySearch(searchQuery);
        dispatch({type: FETCH_CLIENTS_BY_SEARCH, payload: data});
        
        dispatch({type: END_SEARCHING });

    } catch (error) {
        console.log(error.message);
        
    }
}
