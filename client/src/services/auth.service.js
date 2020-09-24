import { APIConstant } from "../const";
import API from "../api";

export const login = data =>
  API.post(APIConstant.POST_LOGIN, {
    login_nm: data.username,
    login_pw: data.password,
    client_id: APIConstant.ClIENT_ID,
  });
