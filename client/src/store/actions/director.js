import { CREATE_DIRECTOR, FETCH_DIRECTORS, START_LOADING, END_LOADING, DELETE_DIRECTOR, UPDATE_DIRECTOR } from "../Constants/actionTypes";

export const createDirector = (Directordata) => async (dispatch) => {
    try {
        const { data } = await api.createDirector(Directordata);
        dispatch({ type: CREATE_Director, payload: data })
    } catch (error) {
        console.log(error);
    }
};
export const fetchDirectors = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING });
        const{ data} = await api.fetchDirectors();
        dispatch({ type: FETCH_DIRECTORS, payload: data });
        dispatch({ type: END_LOADING });
    } catch (error) {
        console.log(error)
    }


};

export const deleteDirector = (id) => async (dispatch) => {
    try {
        await api.deleteDirector(id);
        dispatch({ type: DELETE_DIRECTORS, payload: id })
    } catch (error) {
        console.log(error);
    }

};
export const updateDirector = (id, DirectorData) => async (dispatch) => {
    try {
        const { data } = await api.updateDirector(id, DirectorData);
        dispatch({ type: UPDATE_Director, payload : data })
    } catch (error) {
        console.log(error);
    }

};