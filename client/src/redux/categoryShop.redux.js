import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  getListCategory: ["data"],
  getListCategorySuccess: ["data"],
  getListCategoryFailure: ["error"],
});

export const CategoryShopTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  isListCategory: false,
  errorListCategory: null,
  listCategory: null,
};

/* ------------- Reducers ------------- */
/* ------------- get List Shop ------------- */
export const getListCategory = (state = INITIAL_STATE) => ({
  ...state,
  isListCategory: true,
});

export const getListCategorySuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isListCategory: false,
  listCategory: action.data,
});

export const getListCategoryFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isListCategory: false,
  errorListCategory: action.error,
});

/* ------------- Mapping ------------- */
export const HANDLERS = {
  // get List Shop
  [Types.GET_LIST_CATEGORY]: getListCategory,
  [Types.GET_LIST_CATEGORY_SUCCESS]: getListCategorySuccess,
  [Types.GET_LIST_CATEGORY_FAILURE]: getListCategoryFailure,
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);
