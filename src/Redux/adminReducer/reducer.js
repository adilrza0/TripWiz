
import { EDIT_USER, DELETE_USER } from '../actionType';

const initialState = {
  loginData: [], 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_USER:
      return {
        ...state,
        loginData: state.loginData.map((user) =>
          user.id === action.payload.id ? { ...user, ...action.payload } : user
        ),
      };
    case DELETE_USER:
      return {
        ...state,
        loginData: state.loginData.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export {reducer};
