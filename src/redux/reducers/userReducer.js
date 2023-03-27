import {
  ERROR_USER_DATA,
  RECEIVED_USER_DATA,
  REQUEST_USER_DATA,
} from '../actions/actionTypes';

const initialState = {
    loading: true,
    error: false,
    user: {},
  },
  userReducer = (state = initialState, action) => {
    switch (action.type) {
      case REQUEST_USER_DATA:
        return {
          ...state,
          loading: true,
        };
      case RECEIVED_USER_DATA:
        return Object.assign({}, state, {
          ...state,
          loading: false,
          user: action.payload.user,
        });
      case ERROR_USER_DATA:
        return {
          ...state,
          loading: false,
          error: true,
        };
      default:
        return state;
    }
  };

export default userReducer;
