import { call, put } from "redux-saga/effects";
import { ApiConstant } from "../const";
import CategoryRestaurantAction from "../redux/categoryRestaurant.redux";
import { CategoryRestaurantService } from "../services";

export function* getListCategoryRestaurant(action) {
  try {
    const { data } = action;
    let response = yield call(
      CategoryRestaurantService.getListCategoryRestaurant,
      data
    );
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      yield put(CategoryRestaurantAction.getListCategorySuccess(responseData));
    } else {
      yield put(
        CategoryRestaurantAction.getListCategoryFailure(response.data.error)
      );
    }
  } catch (error) {
    yield put(CategoryRestaurantAction.getListCategoryFailure(error));
  }
}

export function* createCategoryRestaurant(action) {
  try {
    const { data } = action;
    let response = yield call(
      CategoryRestaurantService.createCategoryRestaurant,
      data
    );
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      yield put(CategoryRestaurantAction.createCategorySuccess(responseData));
    } else {
      yield put(
        CategoryRestaurantAction.createCategoryFailure(response.data.error)
      );
    }
  } catch (error) {
    yield put(CategoryRestaurantAction.createCategoryFailure(error));
  }
}

export function* updateCategoryRestaurant(action) {
  try {
    const { data } = action;
    let response = yield call(
      CategoryRestaurantService.updateCategoryRestaurant,
      data
    );
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      yield put(CategoryRestaurantAction.updateCategorySuccess(responseData));
    } else {
      yield put(
        CategoryRestaurantAction.updateCategoryFailure(response.data.error)
      );
    }
  } catch (error) {
    yield put(CategoryRestaurantAction.updateCategoryFailure(error));
  }
}

export function* removeCategoryRestaurant(action) {
  try {
    const { data } = action;
    let response = yield call(
      CategoryRestaurantService.removeCategoryRestaurant,
      data
    );
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      yield put(CategoryRestaurantAction.removeCategorySuccess(responseData));
    } else {
      yield put(
        CategoryRestaurantAction.removeCategoryFailure(response.data.error)
      );
    }
  } catch (error) {
    yield put(CategoryRestaurantAction.removeCategoryFailure(error));
  }
}
