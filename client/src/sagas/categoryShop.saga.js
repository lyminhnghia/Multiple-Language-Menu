import { call, put } from "redux-saga/effects";
import { ApiConstant } from "../const";
import CategoryShopAction from "../redux/admin.redux";
import { CategoryShopService } from "../services";

export function* getListCategoryShop(action) {
  try {
    const { data } = action;
    let response = yield call(CategoryShopService.getListCategory, data);
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data;
      yield put(CategoryShopAction.getListCategorySuccess(responseData));
    } else {
      yield put(CategoryShopAction.getListCategoryFailure(response.data.error));
    }
  } catch (error) {
    yield put(CategoryShopAction.getListCategoryFailure(error));
  }
}
