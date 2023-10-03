
import axios from 'axios';
import { EDIT_USER, DELETE_USER } from '../actionType';


export const editUser = (userId, updatedData) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(`http://localhost:8080/users/${userId}`, updatedData);
      dispatch({
        type: EDIT_USER,
        payload: response.data,
      });
    } catch (error) {
      console.log(error)
    }
  };
};

export const deleteUser = (userId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:8080/users/${userId}`);
      dispatch({
        type: DELETE_USER,
        payload: userId,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
