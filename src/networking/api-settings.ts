import axios from "axios";

const apiUrl = import.meta.env.VITE_APP_API_URL;

const networkClient = axios.create({
  baseURL: apiUrl,
});
axios.defaults.withCredentials = true;

export default networkClient;
