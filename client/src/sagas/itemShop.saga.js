import { call, put } from "redux-saga/effects";
import { ApiConstant } from "../const";
import ItemShopAction from "../redux/itemShop.redux";
import { ItemShopService } from "../services";

export function* createItemShop(action) {
  try {
    const { data } = action;
    let response = yield call(ItemShopService.createItemShop, data);
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      yield put(ItemShopAction.createItemSuccess(responseData));
    } else {
      yield put(ItemShopAction.createItemFailure(response.data.error));
    }
  } catch (error) {
    yield put(ItemShopAction.createItemFailure(error));
  }
}

export function* removeItemShop(action) {
  try {
    const { data } = action;
    let response = yield call(ItemShopService.removeItemShop, data);
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      yield put(ItemShopAction.removeItemSuccess(responseData));
    } else {
      yield put(ItemShopAction.removeItemFailure(response.data.error));
    }
  } catch (error) {
    yield put(ItemShopAction.removeItemFailure(error));
  }
}
