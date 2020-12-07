import { ApiConstant } from "../const";
import { createApiRegistration } from "../api";
import { format } from "react-string-format";

export const createItemRestaurant = (data) =>
  createApiRegistration().post(ApiConstant.CREATE_ITEM, data);

export const updateItemRestaurant = (data) =>
  createApiRegistration().put(format(ApiConstant.UPDATE_ITEM, data.id), data);

export const removeItemRestaurant = (data) =>
  createApiRegistration().delete(format(ApiConstant.UPDATE_ITEM, data.id));
