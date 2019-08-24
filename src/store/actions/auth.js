import * as actionTypes from "./actionTypes";
import { userService } from "api";

// Various action creators for authentication process
const login = (nim, password) => {
  return dispatch => {
    dispatch(authStart());
    userService.login(nim, password).then(
      response => {
        const data = response.data;
        dispatch(authSuccess(nim, data.key));
      },
      error => {
        dispatch(authFail(error.toString()));
      }
    );
  };
};

const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

const authSuccess = (userId, token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    userId: userId,
    userToken: token
  };
};

const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    authMessage: {
      type: "negative",
      header: "Login Error!",
      message: error
    }
  };
};

const logout = () => {
  // Remove credentials from localstorage
  localStorage.removeItem("userId");
  localStorage.removeItem("userToken");
  localStorage.removeItem("expirationDate");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const userActions = {
  login,
  logout
};
