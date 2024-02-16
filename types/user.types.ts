export interface IUser {
  id: string;
  name: string;
  email: string;
  lastName: string;
  role: UserROLES;
  image: string;
  userName: string;
  companyId: string;
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

export type UserROLES = "employee" | "admin";
