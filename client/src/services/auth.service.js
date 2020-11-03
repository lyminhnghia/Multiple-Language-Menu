import { ApiConstant } from "../const";
import { createApiRegistration } from "../api";

export const login = (data) =>
  createApiRegistration().post(ApiConstant.POST_LOGIN_ADMIN, data);

export const loginShop = (data) =>
  createApiRegistration().post(ApiConstant.POST_LOGIN_SHOP, data);

export const changePassword = (data) =>
  createApiRegistration().put(ApiConstant.CHANGE_PASSWORD_ADMIN, data);
