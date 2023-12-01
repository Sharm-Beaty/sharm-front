import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const fetchClient = axios.create({ baseURL });

export default fetchClient;
