import { IUserCreate } from "@/types/user.types";
import { axiosInstance } from "./axios.config";

export class UserServices {
  static async getAll() {
    const res = await axiosInstance.get("/user/employees");

    return res.data;
  }
  static async getUserById(userId: string) {
    const res = await axiosInstance.get(`/user/${userId}`);

    return res.data;
  }

  static async create(userData: IUserCreate) {
    return await axiosInstance.post("/user", userData);
  }
  static async delete(userId: string) {
    return await axiosInstance.delete(`/${userId}`);
  }
}
