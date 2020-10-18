import { ApiConstant } from "../const";
import { createApi } from "../api";

export const login = (data) =>
  createApi().post(ApiConstant.POST_LOGIN_ADMIN, data);
