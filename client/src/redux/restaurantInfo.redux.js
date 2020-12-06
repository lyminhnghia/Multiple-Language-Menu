import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  getContract: ["data"],
  getContractSuccess: ["data"],
  getContractFailure: ["error"],

  getRestaurantInfo: ["data"],
  getRestaurantInfoSuccess: ["data"],
  getRestaurantInfoFailure: ["error"],
});

export const RestaurantInfoTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  isContract: false,
  errorContract: null,
  isContractSuccess: false,
  contract: null,

  isRestaurantInfo: false,
  errorRestaurantInfo: null,
  isRestaurantInfoSuccess: false,
  RestaurantInfo: null,
};

/* ------------- Reducers ------------- */
/* ------------- get Contract Restaurant ------------- */
export const getContract = (state = INITIAL_STATE) => ({
  ...state,
  isContract: true,
});

export const getContractSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isContract: false,
  isContractSuccess: true,
  contract: action.data,
});

export const getContractFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isContract: false,
  errorContract: action.error,
});

/* ------------- get Restaurant Information ------------- */
export const getRestaurantInfo = (state = INITIAL_STATE) => ({
  ...state,
  isRestaurantInfo: true,
});

export const getRestaurantInfoSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isRestaurantInfo: false,
  isRestaurantInfoSuccess: true,
  RestaurantInfo: action.data,
});

export const getRestaurantInfoFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isRestaurantInfo: false,
  errorRestaurantInfo: action.error,
});

/* ------------- Mapping ------------- */
export const HANDLERS = {
  // get List Restaurant
  [Types.GET_CONTRACT]: getContract,
  [Types.GET_CONTRACT_SUCCESS]: getContractSuccess,
  [Types.GET_CONTRACT_FAILURE]: getContractFailure,

  // get Restaurant Information
  [Types.GET_RESTAURANT_INFO]: getRestaurantInfo,
  [Types.GET_RESTAURANT_INFO_SUCCESS]: getRestaurantInfoSuccess,
  [Types.GET_RESTAURANT_INFO_FAILURE]: getRestaurantInfoFailure,
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);
