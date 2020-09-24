/**
 * Export an instance of api client
 */

import { APIConstant } from "../const";
import apisauce from "apisauce";

export const defaultConfig = {
  baseURL: APIConstant.BASE_URL,
  headers: APIConstant.HEADER_DEFAULT,
  timeout: APIConstant.TIMEOUT,
};

export const createApi = (initConfig = defaultConfig) => apisauce.create(initConfig);

const Api = createApi();

export default Api;
