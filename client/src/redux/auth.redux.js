import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  requestLogin: ["data"],
  loginSuccess: ["data"],
  loginFailure: ["error"],

  requestLoginShop: ["data"],
  loginShopSuccess: ["data"],
  loginShopFailure: ["error"],

  reset: [],
});

export const AuthTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  isFetching: false,
  error: null,
  isLogin: false,

  isFetchingShop: false,
  errorShop: null,
  isLoginShop: false,
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

/* ------------- Login Shop ------------- */
export const requestLoginShop = (state = INITIAL_STATE) => ({
  ...state,
  isFetchingShop: true,
  isLoginShop: null,
});

export const loginShopSuccess = (state = INITIAL_STATE, action) => {
  window.isCheckedShop = true;
  return {
    ...state,
    isFetchingShop: false,
    isLoginShop: action.data.isLoginShop,
  };
};

export const loginShopFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isFetchingShop: false,
  errorShop: action.error,
});

export const reset = () => INITIAL_STATE;
/* ------------- Mapping ------------- */
export const HANDLERS = {
  [Types.REQUEST_LOGIN]: requestLogin,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,

  [Types.REQUEST_LOGIN_SHOP]: requestLoginShop,
  [Types.LOGIN_SHOP_SUCCESS]: loginShopSuccess,
  [Types.LOGIN_SHOP_FAILURE]: loginShopFailure,
  [Types.RESET]: reset,
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);
