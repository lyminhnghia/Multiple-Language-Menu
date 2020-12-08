import { ApiConstant } from "../const";
import { createApiRegistration } from "../api";

export const categoryCustomer = (data) =>
  createApiRegistration().get(ApiConstant.LIST_CATEGORY_CUSTOMER, {
    restaurantId: data.restaurantId,
    lang_code: data.lang_code,
  });

export const itemCustomer = (data) =>
  createApiRegistration().get(ApiConstant.LIST_ITEM_CUSTOMER, {
    categoryLanguageId: data.categoryId,
  });

export const languageCustomer = (data) =>
  createApiRegistration().get(ApiConstant.LIST_LANGUAGE_CUSTOMER, {});
