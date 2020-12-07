import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  getLanguage: ["data"],
  getLanguageSuccess: ["data"],
  getLanguageFailure: ["error"],
});

export const LanguageRestaurantTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  isGet: false,
  errorGet: null,
  isGetSuccess: false,
  getData: null,
};

/* ------------- Reducers ------------- */
/* ------------- get Language ------------- */
export const getLanguage = (state = INITIAL_STATE) => ({
  ...state,
  isGet: true,
});

export const getLanguageSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isGet: false,
  isGetSuccess: true,
  getData: action.data,
});

export const getLanguageFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isGet: false,
  errorGet: action.error,
});

/* ------------- Mapping ------------- */
export const HANDLERS = {
  // get Language
  [Types.GET_LANGUAGE]: getLanguage,
  [Types.GET_LANGUAGE_SUCCESS]: getLanguageSuccess,
  [Types.GET_LANGUAGE_FAILURE]: getLanguageFailure,
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);
