import { ADD_CLIENT_TO_TOUR, DELETE_FROM_LIST } from "../Constants/actionTypes";
const initialState = { clientList: [], id: 1 };

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_CLIENT_TO_TOUR:
           
            const clientListArray = state.clientList.concat(action.payload)
            return {
                ...state, 
                clientList: clientListArray
            }
        case DELETE_FROM_LIST:
            let filtredArray = state.clientList.filter(client => client.id != action.payload)
            return {
                ...state,
                clientList: filtredArray
            }
        default:
            return state
    }
}
