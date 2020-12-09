import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  getListCategoryCustomer: ["data"],
  getListCategoryCustomerSuccess: ["data"],
  getListCategoryCustomerFailure: ["error"],

  getListItemCustomer: ["data"],
  getListItemCustomerSuccess: ["data"],
  getListItemCustomerFailure: ["error"],

  getLanguageCustomer: ["data"],
  getLanguageCustomerSuccess: ["data"],
  getLanguageCustomerFailure: ["error"],
});

export const CustomerTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  isCategory: false,
  errorCategory: null,
  isCategorySuccess: false,
  category: null,

  isItem: false,
  errorItem: null,
  isItemSuccess: false,
  item: null,

  isLanguage: false,
  errorLanguage: null,
  isLanguageSuccess: false,
  language: null,
};

/* ------------- Reducers ------------- */
/* ------------- get List Category Customer------------- */
export const getListCategoryCustomer = (state = INITIAL_STATE) => ({
  ...state,
  isCategory: true,
});

export const getListCategoryCustomerSuccess = (
  state = INITIAL_STATE,
  action
) => ({
  ...state,
  isCategory: false,
  isCategorySuccess: true,
  category: action.data,
});

export const getListCategoryCustomerFailure = (
  state = INITIAL_STATE,
  action
) => ({
  ...state,
  isCategory: false,
  errorCategory: action.error,
});

/* ------------- get List Item Customer ------------- */
export const getListItemCustomer = (state = INITIAL_STATE) => ({
  ...state,
  isItem: true,
});

export const getListItemCustomerSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isItem: false,
  isItemSuccess: true,
  item: action.data,
});

export const getListItemCustomerFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isItem: false,
  errorItem: action.error,
});

/* ------------- get Language Customer ------------- */
export const getLanguageCustomer = (state = INITIAL_STATE) => ({
  ...state,
  isLanguage: true,
});

export const getLanguageCustomerSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isLanguage: false,
  isLanguageSuccess: true,
  language: action.data,
});

export const getLanguageCustomerFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isLanguage: false,
  errorLanguage: action.error,
});

/* ------------- Mapping ------------- */
export const HANDLERS = {
  // get List Category
  [Types.GET_LIST_CATEGORY_CUSTOMER]: getListCategoryCustomer,
  [Types.GET_LIST_CATEGORY_CUSTOMER_SUCCESS]: getListCategoryCustomerSuccess,
  [Types.GET_LIST_CATEGORY_CUSTOMER_FAILURE]: getListCategoryCustomerFailure,

  // get List Item
  [Types.GET_LIST_ITEM_CUSTOMER]: getListItemCustomer,
  [Types.GET_LIST_ITEM_CUSTOMER_SUCCESS]: getListItemCustomerSuccess,
  [Types.GET_LIST_ITEM_CUSTOMER_FAILURE]: getListItemCustomerFailure,

  // get Language
  [Types.GET_LANGUAGE_CUSTOMER]: getLanguageCustomer,
  [Types.GET_LANGUAGE_CUSTOMER_SUCCESS]: getLanguageCustomerSuccess,
  [Types.GET_LANGUAGE_CUSTOMER_FAILURE]: getLanguageCustomerFailure,
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);
