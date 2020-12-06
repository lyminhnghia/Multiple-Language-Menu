import { call, put } from "redux-saga/effects";
import { ApiConstant } from "../const";
import QRCodeAction from "../redux/qrcode.redux";
import { QRCodeService } from "../services";

export function* createQRCode(action) {
  try {
    const { data } = action;
    let response = yield call(QRCodeService.createQRCode, data);
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      yield put(QRCodeAction.createQrCodeSuccess(responseData));
    } else {
      yield put(QRCodeAction.createQrCodeFailure(response.data.error));
    }
  } catch (error) {
    yield put(QRCodeAction.createQrCodeFailure(error));
  }
}

export function* getQRCode(action) {
  try {
    const { data } = action;
    let response = yield call(QRCodeService.getQRCode, data);
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      yield put(QRCodeAction.getQrCodeSuccess(responseData));
    } else {
      yield put(QRCodeAction.getQrCodeFailure(response.data.error));
    }
  } catch (error) {
    yield put(QRCodeAction.getQrCodeFailure(error));
  }
}
