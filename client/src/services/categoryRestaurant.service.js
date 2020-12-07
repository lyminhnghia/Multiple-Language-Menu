import { ApiConstant } from "../const";
import { createApiRegistration } from "../api";
import { format } from "react-string-format";

export const getListCategoryRestaurant = (data) =>
  createApiRegistration().get(ApiConstant.LIST_CATEGORY, data);

export const createCategoryRestaurant = (data) =>
  createApiRegistration().post(ApiConstant.CREATE_CATEGORY, data);

export const updateCategoryRestaurant = (data) =>
  createApiRegistration().put(
    format(ApiConstant.UPDATE_CATEGORY, data.id),
    data
  );

export const removeCategoryRestaurant = (data) =>
  createApiRegistration().delete(format(ApiConstant.UPDATE_CATEGORY, data.id));
