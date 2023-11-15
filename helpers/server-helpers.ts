import prisma from "@/prisma";

export const connectToDatabase = async () => {
  try {
    await prisma.$connect();
  } catch (err) {
    throw new Error("Error in DB connection");
  }
};
