import { AuthServices } from "@/services";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        user: {
          label: "Username",
          type: "text",
          placeholder: "jsmith",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        if (!credentials?.user || !credentials.password) return null;

        const res = await AuthServices.login(credentials);

        if (res.status === 401) {
          return null;
        }

        return res.data;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account }) {
      const authenticatedUser = {
        email: user.email,
        image: user.image,
        name: user.name,
      };

      return true;
    },
    async jwt({ token, user }) {
      if (user) return { ...token, ...user };

      return token;
    },

    async session({ token, session }) {
      session.user = token.user;

      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
