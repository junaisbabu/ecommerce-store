"use client";

import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";
import { createUser } from "@/lib/actions/create-user";
import { useFormState } from "react-dom";
import useAuthModal from "@/hooks/use-auth-modal";
import { useEffect } from "react";

function Signup({ onShow }: { onShow: () => void }) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createUser, initialState);
  const authModal = useAuthModal();

  useEffect(() => {
    if (state.status === "success") {
      authModal.onClose();
    }
  }, [state]);

  return (
    <form className="w-80 max-w-md space-y-4" action={dispatch}>
      <h1 className="text-center text-base font-bold md:text-lg">
        Create An Account
      </h1>
      <div>
        <Input
          id="name"
          type="text"
          placeholder="Full Name"
          name="name"
          aria-describedby="name-error"
        />
        {state.errors?.name ? (
          <div
            id="name-error"
            aria-live="polite"
            className="text-sm text-red-500"
          >
            {state.errors.name.map((error: string) => (
              <small key={error}>{error}</small>
            ))}
          </div>
        ) : null}
      </div>
      <div>
        <Input
          id="email"
          type="text"
          placeholder="Email"
          name="email"
          aria-describedby="email-error"
        />
        {state.errors?.email ? (
          <div
            id="email-error"
            aria-live="polite"
            className="text-sm text-red-500"
          >
            {state.errors.email.map((error: string) => (
              <small key={error}>{error}</small>
            ))}
          </div>
        ) : null}
      </div>
      <div>
        <Input
          id="mobile_no"
          type="text"
          placeholder="Mobile Number"
          name="mobile_no"
          aria-describedby="mobile_no-error"
        />
        {state.errors?.mobile_no ? (
          <div
            id="mobile_no-error"
            aria-live="polite"
            className="text-sm text-red-500"
          >
            {state.errors.mobile_no.map((error: string) => (
              <small key={error}>{error}</small>
            ))}
          </div>
        ) : null}
      </div>
      <div>
        <Input
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          aria-describedby="password-error"
        />
        {state.errors?.password ? (
          <div
            id="password-error"
            aria-live="polite"
            className="text-sm text-red-500"
          >
            {state.errors.password.map((error: string) => (
              <small key={error}>{error}</small>
            ))}
          </div>
        ) : null}
      </div>
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
