import { axiosInstance } from "./axios.config";

export class CompanyServices {
  static async getById(companyId: string) {
    const res = await axiosInstance.get(`/company/${companyId}`);
    return res.data;
  }
}
