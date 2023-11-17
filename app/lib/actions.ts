"use server";

import prisma from "@/prisma";
import z from "zod";
import bcrypt from "bcrypt";

const SignupSchema = z.object({
  id: z.string(),
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  mobile_no: z.string().min(10, { message: "Invalid mobile number" }),
  password: z
    .string()
    .min(6, { message: "Password should be more than 5 characters" }),
});

const Signup = SignupSchema.omit({ id: true, date: true });

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    mobile_no?: string[];
    password?: string[];
  };
  message?: string | null;
  status?: "success" | "error";
};

export async function signup(
  prevState: State,
  formData: FormData,
): Promise<State> {
  // Validate form using Zod
  const validatedFields = Signup.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    mobile_no: formData.get("mobile_no"),
    password: formData.get("password"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }

  const { name, email, mobile_no, password } = validatedFields.data;

  let dateTime = new Date().toISOString();
  dateTime = dateTime.split("T").join(" ");

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await prisma.user.create({
      data: {
        name,
        email,
        mobile_no,
        password: hashedPassword,
        created_at: dateTime,
      },
    });

    return { message: "Successfully Created.", status: "success" };
  } catch (error) {
    console.log(error);

    return { message: "Server error", status: "error" };
  } finally {
    await prisma.$disconnect();
  }
}
