import { MyFormData } from "../../component/Account/interfaces";
import axios from "axios";

const BASE_URL = "https://example.com/api";

export function sendAccountData(data: MyFormData) {
  const response = axios.post(`${BASE_URL}/account`, data);
  return response;
}
