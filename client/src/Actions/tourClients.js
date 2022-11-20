import { ADD_CLIENT_TO_TOUR, DELETE_FROM_LIST  } from "../Constants/actionTypes";

export const addToList = (clientData) => {
  return {
      type: ADD_CLIENT_TO_TOUR,
      payload: clientData
  }
};
export const deleteFromList = (id) => {
  return {
      type: DELETE_FROM_LIST,
      payload: id
  }
}
