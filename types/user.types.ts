import { IAappointment, IWorkhour } from ".";

export interface IUser {
  id: string;
  name: string;
  email: string;
  lastName: string;
  role: UserROLES;
  image: string;
  userName: string;
  companyId: string;
  Appointments: IAappointment[];
  Workhours: IWorkhour[];
}
export interface IUserCreate {
  phone: string;
  name: string;
  email: string;
  lastName: string;
  password: string;
  role: UserROLES;
  image?: string;
  userName: string;
  CompanyId: string;
}
export interface IUserUpdate {
  phone?: string;
  name?: string;
  email?: string;
  lastName?: string;
  password?: string;
  role?: UserROLES;
  image?: string;
  userName?: string;
}
export type UserROLES = "employee" | "admin";
