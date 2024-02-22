import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const axiosInstance = axios.create({
  baseURL: API_URL,
});
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("companyId");
    config.headers["CompanyId"] = token;

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export class HTTPRequests {
  static async get<T>(url: string): Promise<T> {
    return await axiosInstance.get(url);
  }

  static async post<T>(url: string, payload: T) {
    return await axiosInstance.post(url, payload);
  }

  static async put<T>(url: string, payload: T) {
    return await axiosInstance.put(url, payload);
  }
  static async patch<T>(url: string, payload: T) {
    return await axiosInstance.put(url, payload);
  }
  static async delete(url: string) {
    return await axiosInstance.put(url);
  }
}
