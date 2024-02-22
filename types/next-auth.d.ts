import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import { IUser } from "./user.types";

declare module "next-auth" {
  interface Session {
    user: IUser;

    backendTokens: {
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: IUser;
  }
}
