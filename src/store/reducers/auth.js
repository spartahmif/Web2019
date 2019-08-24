import * as actionTypes from "../actions/actionTypes";

const initialState = {
  usedId: null,
  userToken: null,
  authError: null,
  authLoading: false,
  authMessage: null
};

const authStart = prevState => {
  return { ...prevState, authLoading: true, authError: null };
};

const authSuccess = (prevState, action) => {
  return { ...prevState, ...action };
};

const authFail = (prevState, action) => {
  return { ...prevState, ...action, authLoading: false };
};

const authLogout = prevState => {
  return {
    ...prevState,
    userId: null,
    userToken: null,
    authLoading: false,
    authError: false
  };
};

export const authReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(prevState);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(prevState, action);
    case actionTypes.AUTH_FAIL:
      return authFail(prevState, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(prevState);
    default:
      return prevState;
  }
};
