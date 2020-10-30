import { call, put } from "redux-saga/effects";
import { ApiConstant } from "../const";
import CategoryShopAction from "../redux/categoryShop.redux";
import { CategoryShopService } from "../services";

export function* getListCategoryShop(action) {
  try {
    const { data } = action;
    let response = yield call(CategoryShopService.getListCategoryShop, data);
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      yield put(CategoryShopAction.getListCategorySuccess(responseData));
    } else {
      yield put(CategoryShopAction.getListCategoryFailure(response.data.error));
    }
  } catch (error) {
    yield put(CategoryShopAction.getListCategoryFailure(error));
  }
}

export function* createCategoryShop(action) {
  try {
    const { data } = action;
    let response = yield call(CategoryShopService.createCategoryShop, data);
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      yield put(CategoryShopAction.createCategorySuccess(responseData));
    } else {
      yield put(CategoryShopAction.createCategoryFailure(response.data.error));
    }
  } catch (error) {
    yield put(CategoryShopAction.createCategoryFailure(error));
  }
}

export function* updateCategoryShop(action) {
  try {
    const { data } = action;
    let response = yield call(CategoryShopService.updateCategoryShop, data);
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      yield put(CategoryShopAction.updateCategorySuccess(responseData));
    } else {
      yield put(CategoryShopAction.updateCategoryFailure(response.data.error));
    }
  } catch (error) {
    yield put(CategoryShopAction.updateCategoryFailure(error));
  }
}
