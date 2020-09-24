import { call, put } from "redux-saga/effects";
import AuthAction from "../redux/auth.redux";

export function* requestLogin(action) {
  try {
    const { data } = action;
    console.log("requestLogin saga", data);
    yield put(AuthAction.loginSuccess(data));
    // let response = yield call(AuthService.login, data);
    // if (response.status == APIConstant.STT_OK) {
    //   yield put(AuthAction.loginSuccess(response));
    // } else {
    //   yield put(AuthAction.loginFailure(response));
    // }
  } catch (error) {
    yield put(AuthAction.loginFailure(error));
  }
}
