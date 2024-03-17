import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
export const getSessionCompanyId = async (ctx: GetServerSidePropsContext) => {
  const session = await getSession(ctx);
  console.log("getSessionCompanyID : ", { session });
  const companyId = session?.user.companyId || null;
  return companyId;
};
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const axiosInstance = axios.create({
  baseURL: API_URL,
});
export const setAuthInterceptor = (companyId: string | null) => {
  return axiosInstance.interceptors.request.use(
    (config) => {
      if (companyId) {
        config.headers["CompanyId"] = companyId;
        config.headers["Authorization"] = `Bearer ${companyId}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
};

export class HTTPRequests {
  static async get(url: string) {
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
