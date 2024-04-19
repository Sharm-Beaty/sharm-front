import axios from "axios";

const BASE_URL = "https://beautyshop.fly.dev/api/v1/users";

export async function getUserData() {
  const response = await axios.get(`${BASE_URL}/me`);
  return response.data;
}
