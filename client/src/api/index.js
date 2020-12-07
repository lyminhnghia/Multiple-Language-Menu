import { ApiConstant, AppConstant } from "../const";
import apisauce from "apisauce";
import Cookie from "js-cookie";

export const DEFAULT_CONFIG = {
  baseURL: ApiConstant.BASE_URL,
  headers: ApiConstant.HEADER_DEFAULT,
  timeout: ApiConstant.TIMEOUT,
};

export const createApi = (initConfig = DEFAULT_CONFIG) => {
  const token = Cookie.get(AppConstant.KEY_TOKEN);
  if (token && token.length > 0) {
    initConfig.headers.accessToken = token;
  }
  return apisauce.create(initConfig);
};

export const createApiRegistration = () => createApi(DEFAULT_CONFIG);
