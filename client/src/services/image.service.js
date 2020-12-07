import { ApiConstant } from "../const";
import { createApiRegistration } from "../api";

export const uploadImage = (data) =>
  createApiRegistration().post(ApiConstant.UPLOAD_IMAGE, data);
