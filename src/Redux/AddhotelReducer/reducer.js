import { ADD_HOTEL_SUCCESS, ADD_HOTEL_FAILURE } from '../actionType'; // Import your action types

const initialState = {
  hotels: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HOTEL_SUCCESS:
      return {
        ...state,
        hotels: [...state.hotels, action.payload],
        error: null,
      };
    case ADD_HOTEL_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};