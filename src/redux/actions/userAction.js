import axios from 'axios';
import {ShowErrorAlert, ShowSuccessAlert} from '../../utils/utils';
import {
  ERROR_USER_DATA,
  RECEIVED_USER_DATA,
  REQUEST_USER_DATA,
} from './actionTypes';

export const userAction = {
  postLogin,
};

function postLogin({email, password}) {
  return dispatch => {
    dispatch(request());
    axios
      .post('https://api.realworld.io/api/users/login', {
        user: {
          email,
          password,
        },
      })
      .then(response => {
        if (response.status === 200) {
          dispatch(success(response.data));
        } else {
          dispatch(failure(response));
        }
      })
      .catch(error => {
        dispatch(failure(error));
      });
  };

  function request() {
    return {type: REQUEST_USER_DATA};
  }
  function success(data) {
    ShowSuccessAlert({desc: 'Successfully logged in.'});
    return {type: RECEIVED_USER_DATA, payload: data};
  }
  function failure(error) {
    ShowErrorAlert({desc: 'Failed to proceed, try again.'});
    return {type: ERROR_USER_DATA, error};
  }
}
