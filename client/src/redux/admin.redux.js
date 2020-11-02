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

  getProfileAdmin: ["data"],
  getProfileAdminSuccess: ["data"],
  getProfileAdminFailure: ["error"],

  resetAdmin: [],
});

export const AdminTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  isFetching: false,
  error: null,
  isSuccess: false,
  data: null,

  isFetchingCreate: false,
  errorCreate: null,
  isCreateSuccess: false,
  dataCreate: null,

  isFetchingGet: false,
  errorGet: null,
  isGetSuccess: false,
  dataGet: null,

  isFetchingUpdate: false,
  errorUpdate: null,
  isUpdateSuccess: false,
  dataUpdate: null,

  isFetchingProfile: false,
  errorProfile: null,
  isProfileSuccess: false,
  dataProfile: null,
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
  isSuccess: true,
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
  isCreateSuccess: true,
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
  isGetSuccess: true,
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
  isUpdateSuccess: true,
  dataUpdate: action.data,
});

export const updateShopFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isFetchingUpdate: false,
  errorUpdate: action.error,
});

/* ------------- profile Admin ------------- */
export const getProfileAdmin = (state = INITIAL_STATE) => ({
  ...state,
  isFetchingProfile: true,
});

export const getProfileAdminSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isFetchingProfile: false,
  isProfileSuccess: true,
  dataProfile: action.data,
});

export const getProfileAdminFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isFetchingProfile: false,
  errorProfile: action.error,
});

/* ------------- reset Admin ------------- */
export const resetAdmin = (state = INITIAL_STATE) => ({
  ...state,
  isSuccess: false,
  isCreateSuccess: false,
  isGetSuccess: false,
  isUpdateSuccess: false,
  isProfileSuccess: false,
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
  // profile Admin
  [Types.GET_PROFILE_ADMIN]: getProfileAdmin,
  [Types.GET_PROFILE_ADMIN_SUCCESS]: getProfileAdminSuccess,
  [Types.GET_PROFILE_ADMIN_FAILURE]: getProfileAdminFailure,
  // reset Admin
  [Types.RESET_ADMIN]: resetAdmin,
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);
