import { createReducer, createActions } from "reduxsauce";
import { getError } from "../utils";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  resetError: [],
  failure: ["data"],
});

export const ErrorTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  error: null, // Detail content of error
  status: null,
};

/* ------------- Reducers ------------- */
export const raise = (state, action) => {
  const data = action.data ? action.data : {};
  let error = getError(data);
  return { ...state, ...data, error: error };
};
export const reset = () => INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.FAILURE]: raise,
  [Types.RESET_ERROR]: reset,
});
