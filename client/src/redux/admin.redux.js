import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  getListShop: ["data"],
  getListShopSuccess: ["data"],
  getListShopFailure: ["error"],

  createShop: ["data"],
  createShopSuccess: ["data"],
  createShopFailure: ["error"],

  getShop: ["data"],
  getShopSuccess: ["data"],
  getShopFailure: ["error"],

  updateShop: ["data"],
  updateShopSuccess: ["data"],
  updateShopFailure: ["error"],
});

export const AdminTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  isFetching: false,
  error: null,
  data: null,

  isFetchingCreate: false,
  errorCreate: null,
  dataCreate: null,

  isFetchingGet: false,
  errorGet: null,
  dataGet: null,

  isFetchingUpdate: false,
  errorUpdate: null,
  dataUpdate: null,
};

/* ------------- Reducers ------------- */
/* ------------- get List Shop ------------- */
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

/* ------------- create Shop ------------- */

export const createShop = (state = INITIAL_STATE) => ({
  ...state,
  isFetchingCreate: true,
});

export const createShopSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isFetchingCreate: false,
  dataCreate: action.data,
});

export const createShopFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isFetchingCreate: false,
  errorCreate: action.error,
});

/* ------------- get Shop ------------- */

export const getShop = (state = INITIAL_STATE) => ({
  ...state,
  isFetchingGet: true,
});

export const getShopSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isFetchingGet: false,
  dataGet: action.data,
});

export const getShopFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isFetchingGet: false,
  errorGet: action.error,
});

/* ------------- update Shop ------------- */

export const updateShop = (state = INITIAL_STATE) => ({
  ...state,
  isFetchingUpdate: true,
});

export const updateShopSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isFetchingUpdate: false,
  dataUpdate: action.data,
});

export const updateShopFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isFetchingUpdate: false,
  errorUpdate: action.error,
});

/* ------------- Mapping ------------- */
export const HANDLERS = {
  // get List Shop
  [Types.GET_LIST_SHOP]: getListShop,
  [Types.GET_LIST_SHOP_SUCCESS]: getListShopSuccess,
  [Types.GET_LIST_SHOP_FAILURE]: getListShopFailure,
  // create Shop
  [Types.CREATE_SHOP]: createShop,
  [Types.CREATE_SHOP_SUCCESS]: createShopSuccess,
  [Types.CREATE_SHOP_FAILURE]: createShopFailure,
  // get Shop
  [Types.GET_SHOP]: getShop,
  [Types.GET_SHOP_SUCCESS]: getShopSuccess,
  [Types.GET_SHOP_FAILURE]: getShopFailure,
  // update Shop
  [Types.UPDATE_SHOP]: updateShop,
  [Types.UPDATE_SHOP_SUCCESS]: updateShopSuccess,
  [Types.UPDATE_SHOP_FAILURE]: updateShopFailure,
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);
