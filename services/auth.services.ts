import {
  ICredentials,
  IEmailData,
  ILoginResponse,
  IRegisterData,
  IUpdateData,
} from "@/types";
import { axiosInstance } from "./axios.config";

export class AuthServices {
  static async login(credendtials: ICredentials) {
    return await axiosInstance.post("/auth/login", credendtials);
  }

  static async register(data: IRegisterData) {
    const user = await axiosInstance.post("/auth/register", data);
    return user.data;
  }

  static async resetPassword(data: IEmailData) {
    const email = await axiosInstance.post("/auth/reset-password", data);
    return email.data;
  }

  static async updatePassword(data: IUpdateData) {
    const updateData = await axiosInstance.patch("/auth/update-password", data);

    return updateData.data;
  }
  static async refreshToken(token: string) {
    return await axiosInstance.post("/auth/me", { token });
  }
}
