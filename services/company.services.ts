import { INewCompany } from "@/types";
import { axiosInstance } from "./axios.config";

export class CompanyServices {
  static async create(data: INewCompany) {
    return await axiosInstance.post(`/company`, data);
  }
  static async getById(companyId: string) {
    const res = await axiosInstance.get(`/company/${companyId}`);
    return res.data;
  }
  static async getByName(companyName: string) {
    const res = await axiosInstance.get(`/company/name/${companyName}`);
    return res.data;
  }
}
