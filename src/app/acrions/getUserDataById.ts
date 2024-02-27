import { MyFormData } from "../../component/Account/interfaces";
import axios from "axios";

const BASE_URL = "https://example.com/api";

export async function getUserDataById(userId: string) {
  const response = await axios.get(`${BASE_URL}/users/${userId}`);
  return response.data;
}
