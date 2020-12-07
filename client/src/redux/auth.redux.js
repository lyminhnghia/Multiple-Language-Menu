import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  requestLogin: ["data"],
  loginSuccess: ["data"],
  loginFailure: ["error"],

  requestLoginRestaurant: ["data"],
  loginRestaurantSuccess: ["data"],
  loginRestaurantFailure: ["error"],

  requestChangePassword: ["data"],
  changePasswordSuccess: ["data"],
  changePasswordFailure: ["error"],

  reset: [],
});

export const AuthTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  isFetching: false,
  error: null,
  isLogin: false,

  isFetchingRestaurant: false,
  errorRestaurant: null,
  isLoginRestaurant: false,

  isFetchingPassword: false,
  errorPassword: null,
  isPasswordSuccess: false,
  dataChange: null,
};

/* ------------- Reducers ------------- */
/* ------------- Login Admin ------------- */
export const requestLogin = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
  isLogin: null,
});

export const loginSuccess = (state = INITIAL_STATE, action) => {
  window.isCheckedAdmin = true;
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

/* ------------- Login Restaurant ------------- */
export const requestLoginRestaurant = (state = INITIAL_STATE) => ({
  ...state,
  isFetchingRestaurant: true,
  isLoginRestaurant: null,
});

export const loginRestaurantSuccess = (state = INITIAL_STATE, action) => {
  window.isCheckedRestaurant = true;
  return {
    ...state,
    isFetchingRestaurant: false,
    isLoginRestaurant: action.data.isLoginRestaurant,
  };
};

export const loginRestaurantFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isFetchingRestaurant: false,
  errorRestaurant: action.error,
});

/* ------------- Change Password ------------- */
export const requestChangePassword = (state = INITIAL_STATE) => ({
  ...state,
  isFetchingPassword: true,
});

export const changePasswordSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isFetchingPassword: false,
  isPasswordSuccess: true,
  dataChange: action.data,
});

export const changePasswordFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isFetchingPassword: false,
  errorPassword: action.error,
});

export const reset = () => INITIAL_STATE;
/* ------------- Mapping ------------- */
export const HANDLERS = {
  [Types.REQUEST_LOGIN]: requestLogin,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,

  [Types.REQUEST_LOGIN_RESTAURANT]: requestLoginRestaurant,
  [Types.LOGIN_RESTAURANT_SUCCESS]: loginRestaurantSuccess,
  [Types.LOGIN_RESTAURANT_FAILURE]: loginRestaurantFailure,

  [Types.REQUEST_CHANGE_PASSWORD]: requestChangePassword,
  [Types.CHANGE_PASSWORD_SUCCESS]: changePasswordSuccess,
  [Types.CHANGE_PASSWORD_FAILURE]: changePasswordFailure,

  [Types.RESET]: reset,
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);
