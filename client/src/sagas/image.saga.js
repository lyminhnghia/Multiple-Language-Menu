import { call, put } from "redux-saga/effects";
import { ApiConstant } from "../const";
import ImageAction from "../redux/image.redux";
import { ImageService } from "../services";

export function* requestUploadPostImage(action) {
  try {
    const { data } = action;
    let formData = new FormData();
    formData.append("file", data);
    let response = yield call(ImageService.uploadImage, formData);
    let responseData = response.data.url;
    if (response.status === ApiConstant.STT_OK) {
      yield put(ImageAction.uploadPostImageSuccess(responseData));
    } else {
      yield put(ImageAction.uploadPostImageFailure(response.data));
    }
  } catch (error) {
    yield put(ImageAction.uploadPostImageFailure(error));
  }
}
