"use client";

import { signIn } from "next-auth/react";
import z from "zod";

const SigninSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(7, { message: "Invalid Password" }),
});

export type State = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string | null;
  status?: "success" | "error";
};

export const getUser = async (
  _prevState: State,
  formData: FormData,
): Promise<State> => {
  const validatedFields = SigninSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }

  const { email, password } = validatedFields.data;

  try {
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.url)
      return { message: "Successfully signed in", status: "success" };
    return { message: "Invalid email or password", status: "error" };
  } catch (err) {
    console.log(err);
    return { message: "Server error", status: "error" };
  }
};
