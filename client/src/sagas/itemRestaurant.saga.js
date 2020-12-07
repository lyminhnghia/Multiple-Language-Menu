import { call, put } from "redux-saga/effects";
import { ApiConstant } from "../const";
import ItemRestaurantAction from "../redux/itemRestaurant.redux";
import { ItemRestaurantService } from "../services";

export function* createItemRestaurant(action) {
  try {
    const { data } = action;
    let response = yield call(ItemRestaurantService.createItemRestaurant, data);
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      yield put(ItemRestaurantAction.createItemSuccess(responseData));
    } else {
      yield put(ItemRestaurantAction.createItemFailure(response.data.error));
    }
  } catch (error) {
    yield put(ItemRestaurantAction.createItemFailure(error));
  }
}

export function* removeItemRestaurant(action) {
  try {
    const { data } = action;
    let response = yield call(ItemRestaurantService.removeItemRestaurant, data);
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      yield put(ItemRestaurantAction.removeItemSuccess(responseData));
    } else {
      yield put(ItemRestaurantAction.removeItemFailure(response.data.error));
    }
  } catch (error) {
    yield put(ItemRestaurantAction.removeItemFailure(error));
  }
}
