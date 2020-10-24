import { ApiConstant } from "../const";
import { createApiRegistration } from "../api";

export const getListShopAdmin = (data) =>
  createApiRegistration().get(ApiConstant.GET_LIST_SHOP_ADMIN, data);

export const getShopAdmin = (data) => {};

export const createShopAdmin = (data) =>
  createApiRegistration().post(ApiConstant.CREATE_SHOP_ADMIN, data);
