/**
 * Export an instance of api client
 */

import { ApiConstant } from "../const";
import apisauce from "apisauce";

export const defaultConfig = {
  baseURL: ApiConstant.BASE_URL,
  headers: ApiConstant.HEADER_DEFAULT,
  timeout: ApiConstant.TIMEOUT,
};

export const createApi = (initConfig = defaultConfig) =>
  apisauce.create(initConfig);

const Api = createApi();

export default Api;
