import { ApiConstant } from "../const";
import { createApiRegistration } from "../api";
import { format } from "react-string-format";

export const getListRestaurantAdmin = (data) =>
  createApiRegistration().get(ApiConstant.GET_LIST_RESTAURANT_ADMIN, data);

export const getRestaurantAdmin = (data) =>
  createApiRegistration().get(
    format(ApiConstant.RESTAURANT_ADMIN, data.id),
    {}
  );

export const createRestaurantAdmin = (data) =>
  createApiRegistration().post(ApiConstant.CREATE_RESTAURANT_ADMIN, data);

export const updateRestaurantAdmin = (data) =>
  createApiRegistration().put(
    format(ApiConstant.RESTAURANT_ADMIN, data.id),
    data
  );

export const deleteRestaurantAdmin = (data) =>
  createApiRegistration().delete(
    format(ApiConstant.RESTAURANT_ADMIN, data.id),
    data
  );

export const getProfileAdmin = (data) =>
  createApiRegistration().get(ApiConstant.PROFILE_ADMIN, data);
