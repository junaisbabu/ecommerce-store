import { authConfig } from "./auth.config";
import NextAuth from "next-auth";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
});
