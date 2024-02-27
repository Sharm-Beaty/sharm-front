import { MyFormData } from "../../component/Account/interfaces";
import axios from "axios";

const BASE_URL = "https://example.com/api";

export function updateUserData(userId: string, data: MyFormData) {
  const response = axios.post(`${BASE_URL}/account`, {
    userId: userId,
    ...data,
  });
  return response;
}
