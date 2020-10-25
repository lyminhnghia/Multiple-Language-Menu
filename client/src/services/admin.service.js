import { ApiConstant } from "../const";
import { createApiRegistration } from "../api";
import { format } from "react-string-format";

export const getListShopAdmin = (data) =>
  createApiRegistration().get(ApiConstant.GET_LIST_SHOP_ADMIN, data);

export const getShopAdmin = (data) =>
  createApiRegistration().get(format(ApiConstant.SHOP_ADMIN, data.id), {});

export const createShopAdmin = (data) =>
  createApiRegistration().post(ApiConstant.CREATE_SHOP_ADMIN, data);

export const updateShopAdmin = (data) =>
  createApiRegistration().get(format(ApiConstant.SHOP_ADMIN, data.id), data);
