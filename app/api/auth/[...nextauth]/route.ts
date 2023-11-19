import prisma from "@/prisma";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<any> {
        if (!credentials) return null;

        await prisma.$connect();

        try {
          const user = await prisma.user.findFirst({
            where: {
              email: credentials.email,
            },
          });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password,
            );

            if (isPasswordCorrect) return user;
          }
        } catch (err: any) {
          return new Error(err);
        } finally {
          await prisma.$disconnect();
        }
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
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
