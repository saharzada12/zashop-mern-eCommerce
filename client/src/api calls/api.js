import axios from "axios";

const BASE_URL = "https://zashop-ecommerce.herokuapp.com/";

// const BASE_URL = "http://localhost:6001/api/";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

console.log(TOKEN);

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = TOKEN;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// for login in the apiCalls page
export const loginRequest = axios.create({
  baseURL: BASE_URL,
});

// for the cart payment
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});

// for the register page
export const insertUser = (user) =>
  axios.post(`${BASE_URL}api/auth/register`, user);
