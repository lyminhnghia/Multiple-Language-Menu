import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  getContract: ["data"],
  getContractSuccess: ["data"],
  getContractFailure: ["error"],

  getShopInfo: ["data"],
  getShopInfoSuccess: ["data"],
  getShopInfoFailure: ["error"],
});

export const ShopInfoTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  isContract: false,
  errorContract: null,
  isContractSuccess: false,
  contract: null,

  isShopInfo: false,
  errorShopInfo: null,
  isShopInfoSuccess: false,
  ShopInfo: null,
};

/* ------------- Reducers ------------- */
/* ------------- get Contract Shop ------------- */
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

/* ------------- get Shop Information ------------- */
export const getShopInfo = (state = INITIAL_STATE) => ({
  ...state,
  isShopInfo: true,
});

export const getShopInfoSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isShopInfo: false,
  isShopInfoSuccess: true,
  ShopInfo: action.data,
});

export const getShopInfoFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isShopInfo: false,
  errorShopInfo: action.error,
});

/* ------------- Mapping ------------- */
export const HANDLERS = {
  // get List Shop
  [Types.GET_CONTRACT]: getContract,
  [Types.GET_CONTRACT_SUCCESS]: getContractSuccess,
  [Types.GET_CONTRACT_FAILURE]: getContractFailure,

  // get Shop Information
  [Types.GET_SHOP_INFO]: getShopInfo,
  [Types.GET_SHOP_INFO_SUCCESS]: getShopInfoSuccess,
  [Types.GET_SHOP_INFO_FAILURE]: getShopInfoFailure,
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);
