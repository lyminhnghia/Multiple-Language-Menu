import { call, put } from "redux-saga/effects";
import { ApiConstant } from "../const";
import RestaurantInfoAction from "../redux/restaurantInfo.redux";
import { RestaurantInfoService } from "../services";

export function* getRestaurantContract(action) {
  try {
    const { data } = action;
    let response = yield call(
      RestaurantInfoService.getRestaurantContract,
      data
    );
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      yield put(RestaurantInfoAction.getContractSuccess(responseData));
    } else {
      yield put(RestaurantInfoAction.getContractFailure(response.data.error));
    }
  } catch (error) {
    yield put(RestaurantInfoAction.getContractFailure(error));
  }
}

export function* getRestaurantInfo(action) {
  try {
    const { data } = action;
    let response = yield call(RestaurantInfoService.getRestaurantInfo, data);
    if (response.status == ApiConstant.STT_OK) {
      let responseData = response.data.data;
      let newFormat = {
        restaurant_type: responseData.restaurant_type,
        restaurant_name: responseData.restaurant_name,
        email: responseData.email,
        telephone: responseData.telephone,
        name_wifi: responseData.name_wifi,
        password_wifi: responseData.password_wifi,
        url_website: responseData.url_website,
        url_image: responseData.url_image,
        port_number: responseData.address.port_number,
        city: responseData.address.city,
        address: responseData.address.address,
        building: responseData.address.building,
        cash: responseData.payment_method.cash,
        credit_card: responseData.payment_method.credit_card,
        app: responseData.payment_method.app,
        etc: responseData.payment_method.etc,
        working_shifts: responseData.working_shifts,
      };
      yield put(RestaurantInfoAction.getRestaurantInfoSuccess(newFormat));
    } else {
      yield put(
        RestaurantInfoAction.getRestaurantInfoFailure(response.data.error)
      );
    }
  } catch (error) {
    yield put(RestaurantInfoAction.getRestaurantInfoFailure(error));
  }
}
