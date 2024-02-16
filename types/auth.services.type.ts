import { IUser } from "./user.types";

export interface ICredentials {
  user: string;
  password: string;
}
export interface ILoginResponse {
  accessToken: string;
  user: IUser;
}
export interface IUpdateData {
  password: string;
  resetToken: string | string[];
}

export interface IRegisterData {
  name: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  image?: string;
}

export interface IEmailData {
  email: string;
}
