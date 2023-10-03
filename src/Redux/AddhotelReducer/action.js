import axios from 'axios';
import { ADD_HOTEL_SUCCESS, ADD_HOTEL_FAILURE } from '../actionType'; // Define your action types

// Action to add a new hotel
export const addHotel = (hotelData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:8080/hotels', hotelData);
      dispatch({
        type: ADD_HOTEL_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ADD_HOTEL_FAILURE,
        payload: error.message,
      });
    }
  };
};