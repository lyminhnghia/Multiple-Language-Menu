import { call, put } from "redux-saga/effects";
import { ApiConstant } from "../const";
import LanguageShopAction from "../redux/languageShop.redux";
import { LanguageShopService } from "../services";

export function* getLanguageShop(action) {
  try {
    const { data } = action;
    let response = yield call(LanguageShopService.getLanguageShop, data);
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      yield put(LanguageShopAction.getLanguageSuccess(responseData));
    } else {
      yield put(LanguageShopAction.getLanguageFailure(response.data.error));
    }
  } catch (error) {
    yield put(LanguageShopAction.getLanguageFailure(error));
  }
}
