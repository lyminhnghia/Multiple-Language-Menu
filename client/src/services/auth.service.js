import { ApiConstant } from "../const";
import { createApiRegistration } from "../api";

export const login = (data) =>
  createApiRegistration().post(ApiConstant.POST_LOGIN_ADMIN, data);
