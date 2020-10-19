import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  getListShop: ["data"],
  getListShopSuccess: ["data"],
  getListShopFailure: ["error"],
});

export const AdminTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  isFetching: false,
  error: null,
  data: null,
};

/* ------------- Reducers ------------- */
export const getListShop = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
});

export const getListShopSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isFetching: false,
  data: action.data,
});

export const getListShopFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isFetching: false,
  error: action.error,
});

/* ------------- Mapping ------------- */
export const HANDLERS = {
  [Types.GET_LIST_SHOP]: getListShop,
  [Types.GET_LIST_SHOP_SUCCESS]: getListShopSuccess,
  [Types.GET_LIST_SHOP_FAILURE]: getListShopFailure,
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);
