import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  getListRestaurant: ["data"],
  getListRestaurantSuccess: ["data"],
  getListRestaurantFailure: ["error"],

  createRestaurant: ["data"],
  createRestaurantSuccess: ["data"],
  createRestaurantFailure: ["error"],

  getRestaurant: ["data"],
  getRestaurantSuccess: ["data"],
  getRestaurantFailure: ["error"],

  updateRestaurant: ["data"],
  updateRestaurantSuccess: ["data"],
  updateRestaurantFailure: ["error"],

  deleteRestaurant: ["data"],
  deleteRestaurantSuccess: ["data"],
  deleteRestaurantFailure: ["error"],

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

  isFetchingDelete: false,
  errorDelete: null,
  isDeleteSuccess: false,
  dataDelete: null,

  isFetchingProfile: false,
  errorProfile: null,
  isProfileSuccess: false,
  dataProfile: null,
};

/* ------------- Reducers ------------- */
/* ------------- get List Restaurant ------------- */
export const getListRestaurant = (state = INITIAL_STATE) => ({
  ...state,
  isFetching: true,
});

export const getListRestaurantSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isFetching: false,
  isSuccess: true,
  data: action.data,
});

export const getListRestaurantFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isFetching: false,
  error: action.error,
});

/* ------------- create Restaurant ------------- */
export const createRestaurant = (state = INITIAL_STATE) => ({
  ...state,
  isFetchingCreate: true,
});

export const createRestaurantSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isFetchingCreate: false,
  isCreateSuccess: true,
  dataCreate: action.data,
});

export const createRestaurantFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isFetchingCreate: false,
  errorCreate: action.error,
});

/* ------------- get Restaurant ------------- */
export const getRestaurant = (state = INITIAL_STATE) => ({
  ...state,
  isFetchingGet: true,
});

export const getRestaurantSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isFetchingGet: false,
  isGetSuccess: true,
  dataGet: action.data,
});

export const getRestaurantFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isFetchingGet: false,
  errorGet: action.error,
});

/* ------------- update Restaurant ------------- */
export const updateRestaurant = (state = INITIAL_STATE) => ({
  ...state,
  isFetchingUpdate: true,
});

export const updateRestaurantSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isFetchingUpdate: false,
  isUpdateSuccess: true,
  dataUpdate: action.data,
});

export const updateRestaurantFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isFetchingUpdate: false,
  errorUpdate: action.error,
});

/* ------------- delete Restaurant ------------- */
export const deleteRestaurant = (state = INITIAL_STATE) => ({
  ...state,
  isFetchingDelete: true,
});

export const deleteRestaurantSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isFetchingDelete: false,
  isDeleteSuccess: true,
  dataDelete: action.data,
});

export const deleteRestaurantFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isFetchingDelete: false,
  errorDelete: action.error,
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
  isDeleteSuccess: false,
  isProfileSuccess: false,
});

/* ------------- Mapping ------------- */
export const HANDLERS = {
  // get List Restaurant
  [Types.GET_LIST_RESTAURANT]: getListRestaurant,
  [Types.GET_LIST_RESTAURANT_SUCCESS]: getListRestaurantSuccess,
  [Types.GET_LIST_RESTAURANT_FAILURE]: getListRestaurantFailure,
  // create Restaurant
  [Types.CREATE_RESTAURANT]: createRestaurant,
  [Types.CREATE_RESTAURANT_SUCCESS]: createRestaurantSuccess,
  [Types.CREATE_RESTAURANT_FAILURE]: createRestaurantFailure,
  // get Restaurant
  [Types.GET_RESTAURANT]: getRestaurant,
  [Types.GET_RESTAURANT_SUCCESS]: getRestaurantSuccess,
  [Types.GET_RESTAURANT_FAILURE]: getRestaurantFailure,
  // update Restaurant
  [Types.UPDATE_RESTAURANT]: updateRestaurant,
  [Types.UPDATE_RESTAURANT_SUCCESS]: updateRestaurantSuccess,
  [Types.UPDATE_RESTAURANT_FAILURE]: updateRestaurantFailure,
  // delete Restaurant
  [Types.DELETE_RESTAURANT]: deleteRestaurant,
  [Types.DELETE_RESTAURANT_SUCCESS]: deleteRestaurantSuccess,
  [Types.DELETE_RESTAURANT_FAILURE]: deleteRestaurantFailure,
  // profile Admin
  [Types.GET_PROFILE_ADMIN]: getProfileAdmin,
  [Types.GET_PROFILE_ADMIN_SUCCESS]: getProfileAdminSuccess,
  [Types.GET_PROFILE_ADMIN_FAILURE]: getProfileAdminFailure,
  // reset Admin
  [Types.RESET_ADMIN]: resetAdmin,
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);
