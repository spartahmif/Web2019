import * as actionTypes from "./actionTypes";

// Various action creators for authentication process

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (userId, token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    userId: userId,
    userToken: token
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    authError: error
  };
};

export const authLogout = () => {
  // Remove credentials from localstorage
  localStorage.removeItem("userId");
  localStorage.removeItem("userToken");
  localStorage.removeItem("expirationDate");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};
