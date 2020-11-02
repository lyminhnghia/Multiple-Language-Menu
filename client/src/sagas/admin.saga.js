import { call, put } from "redux-saga/effects";
import { ApiConstant } from "../const";
import AdminAction from "../redux/admin.redux";
import { AdminService } from "../services";

export function* getListShopAdmin(action) {
  try {
    const { data } = action;
    let response = yield call(AdminService.getListShopAdmin, data);
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data;
      yield put(AdminAction.getListShopSuccess(responseData));
    } else {
      yield put(AdminAction.getListShopFailure(response.data.error));
    }
  } catch (error) {
    yield put(AdminAction.getListShopFailure(error));
  }
}

export function* createShopAdmin(action) {
  try {
    const { data } = action;
    let response = yield call(AdminService.createShopAdmin, data);
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      yield put(AdminAction.createShopSuccess(responseData));
    } else {
      yield put(AdminAction.createShopFailure(response.data.error));
    }
  } catch (error) {
    yield put(AdminAction.createShopFailure(error));
  }
}

export function* getShopAdmin(action) {
  try {
    const { data } = action;
    let response = yield call(AdminService.getShopAdmin, data);
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      yield put(AdminAction.getShopSuccess(responseData));
    } else {
      yield put(AdminAction.getShopFailure(response.data.error));
    }
  } catch (error) {
    yield put(AdminAction.getShopFailure(error));
  }
}

export function* updateShopAdmin(action) {
  try {
    const { data } = action;
    let response = yield call(AdminService.updateShopAdmin, data);
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      yield put(AdminAction.updateShopSuccess(responseData));
    } else {
      yield put(AdminAction.updateShopFailure(response.data.error));
    }
  } catch (error) {
    yield put(AdminAction.updateShopFailure(error));
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
