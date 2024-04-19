import { MyFormData } from "../../component/Account/interfaces";
import axios from "axios";

const BASE_URL = "https://beautyshop.fly.dev/api/v1/users";

export function updateUserData(data: MyFormData) {
  const response = axios.patch(`${BASE_URL}/me`, {
    ...data,
  });
  return response;
}
