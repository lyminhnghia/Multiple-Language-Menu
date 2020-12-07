import { call, put } from "redux-saga/effects";
import { ApiConstant } from "../const";
import LanguageRestaurantAction from "../redux/languageRestaurant.redux";
import { LanguageRestaurantService } from "../services";

export function* getLanguageRestaurant(action) {
  try {
    const { data } = action;
    let response = yield call(
      LanguageRestaurantService.getLanguageRestaurant,
      data
    );
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      yield put(LanguageRestaurantAction.getLanguageSuccess(responseData));
    } else {
      yield put(
        LanguageRestaurantAction.getLanguageFailure(response.data.error)
      );
    }
  } catch (error) {
    yield put(LanguageRestaurantAction.getLanguageFailure(error));
  }
}
