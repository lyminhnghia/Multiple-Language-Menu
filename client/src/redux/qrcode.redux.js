import { createReducer, createActions } from "reduxsauce";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  createQrCode: ["data"],
  createQrCodeSuccess: ["data"],
  createQrCodeFailure: ["error"],

  getQrCode: ["data"],
  getQrCodeSuccess: ["data"],
  getQrCodeFailure: ["error"],
});

export const QRCodeTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  isCreate: false,
  errorCreate: null,
  isCreateSuccess: false,
  dataCreate: null,

  isGet: false,
  errorGet: null,
  isGetSuccess: false,
  dataGet: null,
};

/* ------------- Reducers ------------- */
/* ------------- create QR Code ------------- */
export const createQrCode = (state = INITIAL_STATE) => ({
  ...state,
  isCreate: true,
});

export const createQrCodeSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isCreate: false,
  isCreateSuccess: true,
  dataCreate: action.data,
});

export const createQrCodeFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isCreate: false,
  errorCreate: action.error,
});

/* ------------- get QR Code ------------- */
export const getQrCode = (state = INITIAL_STATE) => ({
  ...state,
  isGet: true,
});

export const getQrCodeSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  isGet: false,
  isGetSuccess: true,
  dataGet: action.data,
});

export const getQrCodeFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isGet: false,
  errorGet: action.error,
});

/* ------------- Mapping ------------- */
export const HANDLERS = {
  // create QR Code
  [Types.CREATE_QR_CODE]: createQrCode,
  [Types.CREATE_QR_CODE_SUCCESS]: createQrCodeSuccess,
  [Types.CREATE_QR_CODE_FAILURE]: createQrCodeFailure,
  // get QR Code
  [Types.GET_QR_CODE]: getQrCode,
  [Types.GET_QR_CODE_SUCCESS]: getQrCodeSuccess,
  [Types.GET_QR_CODE_FAILURE]: getQrCodeFailure,
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);
