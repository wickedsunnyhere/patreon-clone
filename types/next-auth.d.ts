import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image?: string;
      isCreator: boolean;
    };
  }

  interface User {
    id: string;
    name: string;
    email: string;
    image?: string;
    isCreator?: boolean;
  }
}