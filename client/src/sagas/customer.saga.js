import { call, put } from "redux-saga/effects";
import { ApiConstant } from "../const";
import CustomerAction from "../redux/customer.redux";
import { CustomerService } from "../services";

export function* getListCategoryCustomer(action) {
  try {
    const { data } = action;
    let response = yield call(CustomerService.categoryCustomer, data);
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      yield put(CustomerAction.getListCategoryCustomerSuccess(responseData));
    } else {
      yield put(
        CustomerAction.getListCategoryCustomerFailure(response.data.error)
      );
    }
  } catch (error) {
    yield put(CustomerAction.getListCategoryCustomerFailure(error));
  }
}

export function* getListItemCustomer(action) {
  try {
    const { data } = action;
    let response = yield call(CustomerService.itemCustomer, data);
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      yield put(CustomerAction.getListItemCustomerSuccess(responseData));
    } else {
      yield put(CustomerAction.getListItemCustomerFailure(response.data.error));
    }
  } catch (error) {
    yield put(CustomerAction.getListItemCustomerFailure(error));
  }
}
