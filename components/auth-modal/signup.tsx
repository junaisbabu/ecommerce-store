"use client";

import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";

function Signup({ onShow }: { onShow: () => void }) {
  return (
    <form className="w-80 max-w-md space-y-4">
      <h1 className="text-center text-base font-bold md:text-lg">
        Create An Account
      </h1>
      <Input
        id="name"
        type="text"
        placeholder="Full Name"
        name="name"
        aria-describedby="name-error"
      />
      <Input
        id="email"
        type="text"
        placeholder="Email"
        name="email"
        aria-describedby="email-error"
      />
      <Input
        id="mobile_no"
        type="text"
        placeholder="Mobile Number"
        name="mobile_no"
        aria-describedby="mobile_no-error"
      />
      <Input
        id="password"
        type="password"
        placeholder="Password"
        name="password"
        aria-describedby="password-error"
      />
      <Button className="w-full py-2 text-sm" type="submit">
        Sign Up
      </Button>

      <div className="flex items-center gap-2">
        <p className="text-xs">Already have an account?</p>
        <span
          className="cursor-pointer text-sm font-bold text-green-600 hover:underline hover:underline-offset-2"
          onClick={onShow}
        >
          Sign In
        </span>
      </div>
    </form>
  );
}

export default Signup;
