import { MyFormData } from "../../component/Account/interfaces";
import axios from "axios";

const BASE_URL = "https://example.com/api";

export function getAccountData() {
  const response = axios.get(`${BASE_URL}/account`);
  return response;
}
