import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  requestLogin: ["data"],
  loginSuccess: ["data"],
  loginFailure: ["error"],
});

export const AuthTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  isFetching: false,
  error: null,
  isLogin: false,
};

/* ------------- Reducers ------------- */
export const requestLogin = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
  isLogin: null,
});

export const loginSuccess = (state = INITIAL_STATE, action) => {
  window.isChecked = true;
  return {
    ...state,
    isFetching: false,
    isLogin: action.data.isLogin,
  };
};

export const loginFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isFetching: false,
  error: action.error,
});

/* ------------- Mapping ------------- */
export const HANDLERS = {
  [Types.REQUEST_LOGIN]: requestLogin,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);
