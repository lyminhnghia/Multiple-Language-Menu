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
      Cookie.set(AppConstant.KEY_TOKEN, responseData.token, {
        expires: AppConstant.EXPIRES_TOKEN,
      });
      Cookie.set(AppConstant.KEY_ROLE, responseData.role, {
        expires: AppConstant.EXPIRES_TOKEN,
      });
      if (responseData.role) {
        yield put(AuthAction.loginSuccess({ isLogin: true }));
      }
    } else {
      yield put(AuthAction.loginFailure(response.data.error));
    }
  } catch (error) {
    yield put(AuthAction.loginFailure(error));
  }
}

export function* requestLoginShop(action) {
  try {
    const { data } = action;
    let response = yield call(AuthService.loginShop, data);
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      Cookie.set(AppConstant.KEY_TOKEN, responseData.token, {
        expires: AppConstant.EXPIRES_TOKEN,
      });
      Cookie.set(AppConstant.KEY_ROLE, responseData.role, {
        expires: AppConstant.EXPIRES_TOKEN,
      });
      if (!responseData.role) {
        yield put(AuthAction.loginShopSuccess({ isLoginShop: true }));
      }
    } else {
      yield put(AuthAction.loginShopFailure(response.data.error));
    }
  } catch (error) {
    yield put(AuthAction.loginShopFailure(error));
  }
}
