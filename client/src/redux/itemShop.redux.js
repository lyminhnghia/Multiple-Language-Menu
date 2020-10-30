import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  createItem: ["data"],
  createItemSuccess: ["data"],
  createItemFailure: ["error"],
});

export const ItemShopTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  isCreate: false,
  errorCreate: null,
  isCreateSuccess: false,
  dataCreate: null,
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

/* ------------- Mapping ------------- */
export const HANDLERS = {
  // create Item
  [Types.CREATE_ITEM]: createItem,
  [Types.CREATE_ITEM_SUCCESS]: createItemSuccess,
  [Types.CREATE_ITEM_FAILURE]: createItemFailure,
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);
