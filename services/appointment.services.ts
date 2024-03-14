import { axiosInstance } from "./axios.config";

export class AppointmentServices {
  static async getAll() {
    const res = await axiosInstance.get("/appointments");

    return res.data;
  }
}
