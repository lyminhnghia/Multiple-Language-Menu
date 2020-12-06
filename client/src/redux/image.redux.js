import { createReducer, createActions } from "reduxsauce";
/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  requestUploadPostImage: ["data"],
  uploadPostImageSuccess: ["data"],
  uploadPostImageFailure: ["data"],
});

export const ImageTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  //upload attachment
  dataURL: null,
  isUpLoadFetching: false,
  isUploadSuccess: false,
  errorUploadImage: null,
};

/* ------------- Reducers ------------- */

export const requestUploadPostImage = (state = INITIAL_STATE) => {
  return {
    ...state,
    isUploadFetching: true,
  };
};

export const uploadPostImageSuccess = (state = INITIAL_STATE, action) => {
  let temp = action.data;
  return {
    ...state,
    isUpLoadFetching: false,
    isUploadSuccess: true,
    dataURL: temp,
  };
};

export const uploadPostImageFailure = (state = INITIAL_STATE, action) => ({
  ...state,
  isUploadFetching: false,
  isUploadSuccess: false,
  errorUploadImage: action.error,
});
/* ------------- Mapping ------------- */
export const HANDLERS = {
  [Types.REQUEST_UPLOAD_POST_IMAGE]: requestUploadPostImage,
  [Types.UPLOAD_POST_IMAGE_SUCCESS]: uploadPostImageSuccess,
  [Types.UPLOAD_POST_IMAGE_FAILURE]: uploadPostImageFailure,
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, HANDLERS);
