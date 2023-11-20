import type { NextAuthConfig } from "next-auth";
import prisma from "@/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { z } from "zod";

export const authConfig = {
  providers: [
    CredentialsProvider({
      async authorize(credentials): Promise<any> {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(7) })
          .safeParse(credentials);
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          try {
            await prisma.$connect();
            const user = await prisma.user.findFirst({
              where: {
                email,
              },
            });

            if (!user) return null;

            const isPasswordCorrect = await bcrypt.compare(
              password,
              user.password,
            );

            if (isPasswordCorrect) return user;
          } catch (err: any) {
            return new Error(err);
          } finally {
            await prisma.$disconnect();
          }
        }

        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;

      return session;
    },
  },
} satisfies NextAuthConfig;
