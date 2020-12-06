import { ApiConstant } from "../const";
import { createApiRegistration } from "../api";

export const createQRCode = (data) =>
  createApiRegistration().post(ApiConstant.CREATE_QRCODE, data);

export const getQRCode = (data) =>
  createApiRegistration().get(ApiConstant.GET_QRCODE, data);
