import { call, put } from "redux-saga/effects";
import { ApiConstant, AppConstant } from "../const";
import AuthAction from "../redux/auth.redux";
import { AuthService } from "../services";
import Cookie from "js-cookie";

export function* requestLogin(action) {
  try {
    const { data } = action;
    let response = yield call(AuthService.login, data);
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      yield put(AuthAction.loginSuccess(responseData));
      Cookie.set(AppConstant.KEY_TOKEN, responseData, {
        expires: AppConstant.EXPIRES_TOKEN,
      });
    } else {
      yield put(AuthAction.loginFailure(response.data.error));
    }
  } catch (error) {
    yield put(AuthAction.loginFailure(error));
  }
}
