import axios from "axios";

//API URL from env
const base_API_URL = import.meta.env.VITE_BASE_API_URL;

const authInstance = axios.create({
  baseURL: base_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const protectedInstance = axios.create({
  baseURL: base_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

protectedInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default { authInstance, protectedInstance, base_API_URL };
