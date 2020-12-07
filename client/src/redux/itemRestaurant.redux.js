import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  createItem: ["data"],
  createItemSuccess: ["data"],
  createItemFailure: ["error"],

  removeItem: ["data"],
  removeItemSuccess: ["data"],
  removeItemFailure: ["error"],

  resetItem: [],
});

export const ItemRestaurantTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  isCreate: false,
  errorCreate: null,
  isCreateSuccess: false,
  dataCreate: null,

  isRemove: false,
  errorRemove: null,
  isRemoveSuccess: false,
  dataRemove: null,
};

/* ------------- Reducers ------------- */
/* ------------- create Item ------------- */
export const createItem = (state = INITIAL_STATE) => ({
  ...state,
  isCreate: true,
});

export const createItemSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isCreate: false,
  isCreateSuccess: true,
  dataCreate: action.data,
});

export const createItemFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isCreate: false,
  errorCreate: action.error,
});

/* ------------- remove Item ------------- */
export const removeItem = (state = INITIAL_STATE) => ({
  ...state,
  isRemove: true,
});

export const removeItemSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isRemove: false,
  isRemoveSuccess: true,
  dataRemove: action.data,
});

export const removeItemFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isRemove: false,
  errorRemove: action.error,
});

/* ------------- reset Item ------------- */
export const resetItem = (state = INITIAL_STATE) => ({
  ...state,
  isCreateSuccess: false,
  isRemoveSuccess: false,
});

/* ------------- Mapping ------------- */
export const HANDLERS = {
  // create Item
  [Types.CREATE_ITEM]: createItem,
  [Types.CREATE_ITEM_SUCCESS]: createItemSuccess,
  [Types.CREATE_ITEM_FAILURE]: createItemFailure,
  // remove Item
  [Types.REMOVE_ITEM]: removeItem,
  [Types.REMOVE_ITEM_SUCCESS]: removeItemSuccess,
  [Types.REMOVE_ITEM_FAILURE]: removeItemFailure,
  // reset Item
  [Types.RESET_ITEM]: resetItem,
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);
