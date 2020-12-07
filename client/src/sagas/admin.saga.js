import { call, put } from "redux-saga/effects";
import { ApiConstant } from "../const";
import AdminAction from "../redux/admin.redux";
import { AdminService } from "../services";

export function* getListRestaurantAdmin(action) {
  try {
    const { data } = action;
    let response = yield call(AdminService.getListRestaurantAdmin, data);
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data;
      yield put(AdminAction.getListRestaurantSuccess(responseData));
    } else {
      yield put(AdminAction.getListRestaurantFailure(response.data.error));
    }
  } catch (error) {
    yield put(AdminAction.getListRestaurantFailure(error));
  }
}

export function* createRestaurantAdmin(action) {
  try {
    const { data } = action;
    let response = yield call(AdminService.createRestaurantAdmin, data);
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      yield put(AdminAction.createRestaurantSuccess(responseData));
    } else {
      yield put(AdminAction.createRestaurantFailure(response.data.error));
    }
  } catch (error) {
    yield put(AdminAction.createRestaurantFailure(error));
  }
}

export function* getRestaurantAdmin(action) {
  try {
    const { data } = action;
    let response = yield call(AdminService.getRestaurantAdmin, data);
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      yield put(AdminAction.getRestaurantSuccess(responseData));
    } else {
      yield put(AdminAction.getRestaurantFailure(response.data.error));
    }
  } catch (error) {
    yield put(AdminAction.getRestaurantFailure(error));
  }
}

export function* updateRestaurantAdmin(action) {
  try {
    const { data } = action;
    let response = yield call(AdminService.updateRestaurantAdmin, data);
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      yield put(AdminAction.updateRestaurantSuccess(responseData));
    } else {
      yield put(AdminAction.updateRestaurantFailure(response.data.error));
    }
  } catch (error) {
    yield put(AdminAction.updateRestaurantFailure(error));
  }
}

export function* deleteRestaurantAdmin(action) {
  try {
    const { data } = action;
    let response = yield call(AdminService.deleteRestaurantAdmin, data);
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      yield put(AdminAction.deleteRestaurantSuccess(responseData));
    } else {
      yield put(AdminAction.deleteRestaurantFailure(response.data.error));
    }
  } catch (error) {
    yield put(AdminAction.deleteRestaurantFailure(error));
  }
}

export function* getProfileAdmin() {
  try {
    let response = yield call(AdminService.getProfileAdmin, {});
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      yield put(AdminAction.getProfileAdminSuccess(responseData));
    } else {
      yield put(AdminAction.getProfileAdminFailure(response.data.error));
    }
  } catch (error) {
    yield put(AdminAction.getProfileAdminFailure(error));
  }
}
