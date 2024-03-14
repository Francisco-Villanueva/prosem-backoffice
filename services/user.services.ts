import { IUserCreate, IUserUpdate } from "@/types/user.types";
import { HTTPRequests } from "./axios.config";

export class UserServices {
  static async getAll() {
    const res = await HTTPRequests.get("/user/employees");

    return res.data;
  }
  static async getUserById(userId: string) {
    const res = await HTTPRequests.get(`/user/${userId}`);

    return res.data;
  }

  static async create(userData: IUserCreate) {
    return await HTTPRequests.post("/user", userData);
  }
  static async update(userId: string, data: IUserUpdate) {
    return await HTTPRequests.patch(`/${userId}`, data);
  }
  static async delete(userId: string) {
    return await HTTPRequests.delete(`/${userId}`);
  }
}
