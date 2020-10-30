import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  getListCategory: ["data"],
  getListCategorySuccess: ["data"],
  getListCategoryFailure: ["error"],

  createCategory: ["data"],
  createCategorySuccess: ["data"],
  createCategoryFailure: ["error"],

  updateCategory: ["data"],
  updateCategorySuccess: ["data"],
  updateCategoryFailure: ["error"],

  resetCategory: [],
});

export const CategoryShopTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  isListCategory: false,
  errorListCategory: null,
  isListCategorySuccess: false,
  listCategory: null,

  isCreate: false,
  errorCreate: null,
  isCreateSuccess: false,
  dataCreate: null,

  isUpdate: false,
  errorUpdate: null,
  isUpdateSuccess: false,
  dataUpdate: null,
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
  isListCategorySuccess: true,
  listCategory: action.data,
});

export const getListCategoryFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isListCategory: false,
  errorListCategory: action.error,
});

/* ------------- create Category ------------- */
export const createCategory = (state = INITIAL_STATE) => ({
  ...state,
  isCreate: true,
});

export const createCategorySuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isCreate: false,
  isCreateSuccess: true,
  dataCreate: action.data,
});

export const createCategoryFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isCreate: false,
  errorCreate: action.error,
});

/* ------------- update Category ------------- */
export const updateCategory = (state = INITIAL_STATE) => ({
  ...state,
  isUpdate: true,
});

export const updateCategorySuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isUpdate: false,
  isUpdateSuccess: true,
  dataUpdate: action.data,
});

export const updateCategoryFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isUpdate: false,
  errorUpdate: action.error,
});

/* ------------- reset Category ------------- */
export const resetCategory = (state = INITIAL_STATE) => ({
  ...state,
  isCreateSuccess: false,
  isUpdateSuccess: false,
});

/* ------------- Mapping ------------- */
export const HANDLERS = {
  // get List Shop
  [Types.GET_LIST_CATEGORY]: getListCategory,
  [Types.GET_LIST_CATEGORY_SUCCESS]: getListCategorySuccess,
  [Types.GET_LIST_CATEGORY_FAILURE]: getListCategoryFailure,

  // create Category
  [Types.CREATE_CATEGORY]: createCategory,
  [Types.CREATE_CATEGORY_SUCCESS]: createCategorySuccess,
  [Types.CREATE_CATEGORY_FAILURE]: createCategoryFailure,

  // update Category
  [Types.UPDATE_CATEGORY]: updateCategory,
  [Types.UPDATE_CATEGORY_SUCCESS]: updateCategorySuccess,
  [Types.UPDATE_CATEGORY_FAILURE]: updateCategoryFailure,

  // reset Category
  [Types.RESET_CATEGORY]: resetCategory,
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);
