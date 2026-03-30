import axios from "axios"; // Axiosクライアント

const baseUrl = "http://127.0.0.1:8080/api"; // 接続先ドメイン+API
export const END_POINT = {
  login: "/login",
};

const axiosClient = axios.create({
  baseURL: baseUrl,
  timeout: 5000, // 5000ms
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// axiosFether
export const fetcher = async <T>(url: string): Promise<T> => {
  const res = await axiosClient.get<T>(url);
  return res.data;
};
